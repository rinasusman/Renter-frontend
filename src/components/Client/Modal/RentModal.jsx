import React, { useState, useCallback, useEffect } from "react";

import { FcGoogle } from "react-icons/fc";

import { useForm } from "react-hook-form";

import userAxios from "../../../Axios/guestAxios.js";
import Heading from "../../Heading.jsx";
import Button from "../../Button.jsx";
import Modal from "./Modal.jsx";
import Input from "../inputs/Input.jsx";

import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../../../Redux/container/userApiSlice.js";
import axios from "axios";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import useRentModal from "../../../Hooks/useRentModal.js";

const RentModal = () => {

  const rentModal = useRentModal();

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










  const bodyContent = (
    <div className="flex flex-col gap-4">



    </div >
  );



  return (
    <>
      <Modal
        // disabled={isLoading}
        isOpen={rentModal.isOpen}
        title="Renter your home"
        actionLabel="Continue"
        onClose={rentModal.onClose}

        body={bodyContent}

      />
    </>
  );
};

export default RentModal;
