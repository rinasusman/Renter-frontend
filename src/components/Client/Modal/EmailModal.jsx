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
  const dispatch = useDispatch();
  const [login, { isLoadings }] = useLoginMutation();
  const { userToken } = useSelector((state) => state.auth);
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



    emailModal.onClose();
    otpModal.onOpen();


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
