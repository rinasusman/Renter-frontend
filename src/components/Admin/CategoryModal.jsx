import React, { useState, useCallback, useEffect } from "react";

import { FcGoogle } from "react-icons/fc";
import toast, { Toaster } from 'react-hot-toast';
import { useForm } from "react-hook-form";
import axios from 'axios';
import adminAxios from '../../Axios/adminAxios.js';
import Modal from "../Client/Modal/Modal.jsx";
import Heading from "../Heading.jsx";
import Input from "../Client/inputs/Input.jsx";
import useCategoryModal from "../../Hooks/useCategoryModal.js";

const CategoryModal = () => {

  const loginModal = useCategoryModal();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);


  const {
    register,
    handleSubmit,
    reset,
    formState: {
      errors,
    },
  } = useForm({
    defaultValues: {
      name: '',
      description: ''

    },
  });

  React.useEffect(() => {
    reset({
      name: "",
      description: "",
    });
  }, [reset]);



  const onSubmit = async (data) => {
    setIsLoading(true);
    const payload = {
      name: data.name,
      description: data.description
    }
    console.log(payload, "datttttttttttttttttta")
    try {
      const categories = await adminAxios.post('/addCategory', payload);

      if (categories.data.success) {
        loginModal.onClose()
        toast.success("Category created Successfully")
      }
      else {
        setError("Category already exists");
        toast.error("Category already exists")
      }

    } catch (e) {
      if (axios.isAxiosError(e)) {
        setError(e.response?.data?.error || 'An error occurred');
        toast.error(e.response?.data?.error || '');
      } else {
        setError('An error occurred');
        toast.error('An error occurred');
      }
    } finally {
      setIsLoading(false);
    }

  };





  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Input
        id="name"
        label="Name"

        // disabled={isLoading}
        register={register}
        errors={errors}
        required
      />

      <Input
        id="description"
        label="Description"

        // disabled={isLoading}
        register={register}
        errors={errors}
        required
      />


    </div >
  );



  return (
    <>
      <Modal
        // disabled={isLoading}
        isOpen={loginModal.isOpen}
        title="Add Category"
        actionLabel="Continue"
        onClose={loginModal.onClose}
        onSubmit={handleSubmit(onSubmit)}
        body={bodyContent}

      />
    </>
  );
};

export default CategoryModal;
