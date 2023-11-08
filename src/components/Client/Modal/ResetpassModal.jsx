import React, { useState, useCallback, useEffect } from "react";

import { FcGoogle } from "react-icons/fc";

import { useForm } from "react-hook-form";

import userAxios from "../../../Axios/guestAxios.js";
import Heading from "../../Heading.jsx";
import Button from "../../Button.jsx";
import Modal from "./Modal.jsx";
import Input from "../inputs/Input.jsx";
import useRegisterModal from "../../../Hooks/useRegisterModal.js";
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../../../Redux/container/userApiSlice.js";
import { setUserLogin } from "../../../Redux/container/userAuth.slice.js";
import axios from "axios";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import useResetpassModal from "../../../Hooks/useResetpassModal.js";
import useLoginModal from "../../../Hooks/useLoginModal.js";

const ResetpassModal = () => {
  const loginModal = useLoginModal();
  const resetModal = useResetpassModal();
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [passwordMatchError, setPasswordMatchError] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: {
      errors,
    },
  } = useForm({
    defaultValues: {

      password: '',
      confirmpassword: '',
    },
  });

  React.useEffect(() => {
    reset({

      password: "",
    });
  }, [reset]);


  const onSubmit = async (data) => {
    setIsLoading(true);
    if (data.password !== data.confirmpassword) {
      setPasswordMatchError(true);
      setIsLoading(false);
      return;
    }
    setPasswordMatchError(false);

    const payload = {
      password: data.password,
    };
    try {
      const otpSend = await userAxios.post('/passwordReset', data);
      if (otpSend) {
        resetModal.onClose();
        loginModal.onOpen();
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

      <Heading title="Welcome back" subtitle="Reset your account!" />
      <div className="relative">
        <Input
          id="password"
          label="Password"
          type="password"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
          onChange={(e) => {
            const password = e.target.value;

          }}
        />

      </div>
      {errors.password && (
        <p className="text-rose-500">{errors.password.message}</p>
      )}
      <Input
        id="confirmpassword"
        label="Confirm Password"
        type="password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      {passwordMatchError && (
        <p className="text-rose-500">Password and Confirm Password do not match.</p>
      )}



    </div >
  );


  return (
    <>
      <Modal
        // disabled={isLoading}
        isOpen={resetModal.isOpen}
        title="Enter Email"
        actionLabel="Continue"
        onClose={resetModal.onClose}
        onSubmit={handleSubmit(onSubmit)}
        body={bodyContent}

      />
    </>
  );
};

export default ResetpassModal;
