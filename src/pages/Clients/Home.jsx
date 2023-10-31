import React from "react";
import Navbar from "../../components/Client/Navbar/Navbar";
import UserMenu from "../../components/Client/Navbar/UserMenu";
import LoginModal from "../../components/Client/Modal/LoginModal";
import RegisterModal from "../../components/Client/Modal/RegisterModal";
import OtpModal from "../../components/Client/Modal/OtpModal";
import Categories from "../../components/Client/Navbar/Categories";
import ListingHome from "../../components/Client/listingHome/ListingHome";
import EmailModal from "../../components/Client/Modal/EmailModal";
import ForgotpassOtpModal from "../../components/Client/Modal/ForgotpassOtpModal";
import RentModal from "../../components/Client/Modal/RentModal";


const Home = () => {
  ;
  return (
    <>
      <Navbar />
      <UserMenu />
      <Categories />
      <LoginModal />
      <RegisterModal />
      <OtpModal />
      <EmailModal />
      <ForgotpassOtpModal />
      <RentModal />
      <div className="pb-20 pt-18">
        <ListingHome />
      </div>
    </>
  );
};

export default Home;
