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
import useEmailModal from "../../../Hooks/useEmailModal.js";
import useForgotpassOtpModal from "../../../Hooks/useForgotpassOtpModal.js";

const EmailModal = () => {
  const otpModal = useForgotpassOtpModal();
  const emailModal = useEmailModal();
  const navigate = useNavigate();
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
      email: '',
      password: ''

    },
  });

  React.useEffect(() => {
    reset({
      email: "",
      password: "",
    });
  }, [reset]);


  const onSubmit = async (data) => {
    setIsLoading(true);





    try {
      const otpSend = await userAxios.post('/forgotsendotp', data);
      if (otpSend) {
        emailModal.onClose();
        otpModal.onOpen();
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
      <Input
        id="email"
        label="Email"
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
        isOpen={emailModal.isOpen}
        title="Enter Email"
        actionLabel="Continue"
        onClose={emailModal.onClose}
        onSubmit={handleSubmit(onSubmit)}
        body={bodyContent}

      />
    </>
  );
};

export default EmailModal;