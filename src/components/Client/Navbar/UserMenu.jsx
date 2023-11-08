import React, { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

import MenuItem from "./MenuItem";
import Avatar from "../../Avatar";
import useRegisterModal from "../../../Hooks/useRegisterModal";
import useLoginModal from "../../../Hooks/useLoginModal";
import { useDispatch, useSelector } from "react-redux";
import { useLogoutMutation } from "../../../Redux/container/userApiSlice";
import { setUserLogout } from '../../../Redux/container/userAuth.slice'
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useRentModal from "../../../Hooks/useRentModal";

const UserMenu = ({ }) => {


  const { userToken } = useSelector((state) => state.auth)
  console.log(userToken, "token>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
  const name = userToken?.userSignUp?.name || ""
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const rentModal = useRentModal();
  const [logoutApiCall] = useLogoutMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);



  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const handleSignUpClick = () => {
    // Open the sign-up modal by calling the onOpen function from the registerModal
    registerModal.onOpen();
  };
  const handleLoginClick = () => {
    // Open the sign-up modal by calling the onOpen function from the registerModal
    loginModal.onOpen();
  };
  const handlePropertyClick = () => {
    // Open the sign-up modal by calling the onOpen function from the registerModal
    navigate("/myproperties/")
  };
  const handleFavoritesClick = () => {
    // Open the sign-up modal by calling the onOpen function from the registerModal
    navigate("/favorites")
  };

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(setUserLogout());

      navigate('/')

    } catch (err) {
      console.log(err)
    }
  }

  const onRent = useCallback(() => {
    if (!userToken) {
      return loginModal.onOpen()
    }
    rentModal.onOpen()
  }, [userToken, loginModal, rentModal])

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={onRent}
          className="
            hidden
            md:block
            text-sm 
            font-semibold 
            py-3 
            px-4 
            rounded-full 
            hover:bg-neutral-100 
            transition 
            cursor-pointer
          "
        >
          Renter your home
        </div>
        <div
          onClick={toggleOpen}
          className="
          p-4
          md:py-1
          md:px-2
          border-[1px] 
          border-neutral-200 
          flex 
          flex-row 
          items-center 
          gap-3 
          rounded-full 
          cursor-pointer 
          hover:shadow-md 
          transition
          "
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar src="/images/placeholder.jpg" />
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className="
            absolute 
            rounded-xl 
            shadow-md
            w-[40vw]
            md:w-3/4 
            bg-white 
            overflow-hidden 
            right-0 
            top-12 
            text-sm
          "
        >
          <div className="flex flex-col cursor-pointer">

            {userToken && userToken.userSignUp && userToken.userSignUp.message === 'You are logged' ? (
              <>
                <MenuItem label="My trips" />
                <MenuItem label="My favorites" onClick={handleFavoritesClick} />
                <MenuItem label="My reservations" />
                <MenuItem label="My properties" onClick={handlePropertyClick} />
                <MenuItem label="homebnb my home" onClick={rentModal.onOpen} />
                <hr />
                <MenuItem label="Logout" onClick={logoutHandler} />
              </>
            ) : (
              <>
                <MenuItem label="Login" onClick={handleLoginClick} />

                <MenuItem label="Sign up" onClick={handleSignUpClick} />
              </>
            )



            }






          </div>
        </div>


      )}
    </div>
  );
};

export default UserMenu;
