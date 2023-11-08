// HeartButton.js
import React, { useEffect, useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useLoginModal from '../Hooks/useLoginModal';
import userAxios from '../Axios/guestAxios';
import { setUserLogin, setUserLogout } from '../Redux/container/userAuth.slice';

const HeartButton = ({ listingId }) => {
    const [isFilled, setIsFilled] = useState(false);
    const userTokens = useSelector((state) => state.auth.userToken);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const loginModal = useLoginModal();
    const tokens = localStorage.getItem('usertoken');

    useEffect(() => {

        const storedHeartState = localStorage.getItem(`heart-${listingId}`);
        if (storedHeartState) {
            setIsFilled(storedHeartState === 'true');
        }
    }, [listingId]);

    const toggleHeart = () => {
        if (!userTokens) {
            loginModal.onOpen();
        } else {
            const newHeartState = !isFilled;
            const headers = {
                'Authorization': `Bearer ${tokens} `,
                'Content-Type': 'application/json',
            };

            if (newHeartState) {
                userAxios.post('/addfavorites', { listingId }, { headers })
                    .then((response) => {
                        if (response.status === 200) {
                            setIsFilled(newHeartState);
                            localStorage.setItem(`heart-${listingId}`, newHeartState.toString());
                        }
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            } else {
                userAxios.delete('/removefavorites', { data: { listingId }, headers })
                    .then((response) => {
                        if (response.status === 200) {
                            setIsFilled(false);
                            localStorage.setItem(`heart-${listingId}`, 'false');
                        }
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            }
        }
    };

    // Function to update isFilled and localStorage after user logs in
    const handleLogin = () => {
        dispatch(setUserLogin(tokens));
        const storedHeartState = localStorage.getItem(`heart-${listingId}`);
        if (storedHeartState) {
            setIsFilled(storedHeartState === 'true');
        }
    };
    const handleLogout = () => {

        setIsFilled(false);
        localStorage.removeItem(`heart-${listingId}`);
        dispatch(setUserLogout());
    };

    return (
        <>
            <div
                className="relative hover:opacity-80 transition cursor-pointer"
                onClick={userTokens ? toggleHeart : loginModal.onOpen}
            >
                {isFilled ? (
                    <AiFillHeart size={24} className="fill-rose-500" />
                ) : (
                    <AiOutlineHeart size={28} className="fill-white absolute -top-[2px] -right-[2px]" />
                )}

            </div>
            {/* <div>  <button onClick={handleLogout}>Logout</button></div> */}
        </>
    );
};

export default HeartButton;
