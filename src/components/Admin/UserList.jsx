
import React, { useEffect, useState } from 'react'
import adminAxios from '../../Axios/adminAxios'
import { toast } from "react-toastify";
const UserList = () => {
    const [ClientDetails, setClientDetails] = useState([]);


    const fetchClientDetails = async () => {

        try {
            let response = await adminAxios.get('/getClientList');
            console.log(response, "hhhhhhhhhhhhhh")
            if (Array.isArray(response.data)) {
                setClientDetails(response.data);
                console.log(setClientDetails, "ssssssssssssssssssssssssss")
            }
        } catch (e) {
            console.log('error', e.message);
        }
    }
    useEffect(() => {
        fetchClientDetails()
    }, []);

    // const handleStatus = async (userId) => {
    //     const userToModify = ClientDetails.find(user => user._id === userId);

    //     if (!userToModify) {
    //         console.log('User not found.');
    //         return;
    //     }

    //     const action = userToModify.status === 1 ? 'Block' : 'unBlock';

    //     try {
    //         await adminAxios.post(`/updateStatus/${userId}?action=${action}`);
    //         setClientDetails(prevClientDetails => {
    //             return prevClientDetails.map(user => {
    //                 if (user._id === userId) {
    //                     return { ...user, status: userToModify.status === 1 ? 0 : 1 };
    //                 }
    //                 return user;
    //             });
    //         });
    //     } catch (error) {
    //         console.log('Error:', error);
    //     }
    // }



    const blockUser = async (userId) => {
        try {
            const res = await adminAxios.put(
                `userblock/${userId}`
            );
            console.log(res, "ddddddddddddddddddddddd")
            if (res.data.message === "user blocked successfully") {
                toast.success("user unblocked successfully");
                const updated = ClientDetails.map((user) =>
                    user._id === userId ? { ...user, status: true } : user
                );
                setClientDetails(updated);
            }


        } catch (error) {
            console.log(error.message);
        }
    };
    const unblockUser = async (userId) => {
        try {
            const res = await adminAxios.put(
                `userunblock/${userId}`
            );
            console.log(res, "hhhhhhhhhhhhhhhhhhhh")
            if (res.data.message === "user unblocked successfully") {
                toast.success("user blocked successfully");
                const updated = ClientDetails.map((user) =>
                    user._id === userId ? { ...user, status: false } : user
                );
                setClientDetails(updated);
            }

        } catch (error) {
            console.log(error.message);
        }
    };


    return (
        <div
            className='
        pt-[25px] 
        px-[25px] 
        bg-[#FBF9FC]
        '
        >
            <div
                className='
                flex 
                items-center 
                justify-between
                '>
                <h1
                    className='
                text-[#5a5c69] 
                text-[28px] 
                leading-[34px] 
                font-normal
                '>
                    USER LIST
                </h1>
            </div>
            <div
                className="
                flex 
                flex-col
                ">
                <div
                    className="
                    overflow-x-auto 
                    sm:-mx-6 
                    lg:-mx-8
                    ">
                    <div
                        className="
                        inline-block 
                        min-w-full 
                        py-2 
                        sm:px-6 
                        lg:px-8
                        ">
                        <div
                            className="
                            overflow-hidden
                            ">
                            <table
                                className="
                                min-w-full 
                                text-center 
                                text-sm 
                                font-light">
                                <thead
                                    className="
                                    border-b 
                                    bg-rose-500 
                                    font-medium 
                                    text-white 
                                    dark:border-neutral-500 
                                    dark:bg-neutral-900
                                    ">
                                    <tr>
                                        <th scope="col"
                                            className="
                                             px-6 
                                             py-4
                                             ">
                                            SL
                                        </th>
                                        <th scope="col"
                                            className=" 
                                            px-6 
                                            py-4
                                            ">
                                            NAME
                                        </th>
                                        <th scope="col"
                                            className=" 
                                            px-6 
                                            py-4
                                            ">
                                            EMAIL
                                        </th>
                                        <th scope="col"
                                            className=" 
                                            px-6 
                                            py-4
                                            ">
                                            ACTION
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {ClientDetails?.map((user, index) => (
                                        <tr
                                            className="
                                            border-b 
                                            dark:border-neutral-500
                                            "
                                            key={user._id}>
                                            <td
                                                className="
                                                whitespace-nowrap  
                                                px-6 
                                                py-4 
                                                font-medium
                                                ">
                                                {index + 1}

                                            </td>
                                            <td
                                                className="
                                                whitespace-nowrap  
                                                text-black  
                                                font-medium 
                                                px-6 
                                                py-4
                                                ">
                                                {user.name}
                                            </td>
                                            <td
                                                className="
                                                whitespace-nowrap 
                                                text-black 
                                                font-medium 
                                                px-6 
                                                py-4
                                                ">
                                                {user.email}
                                            </td>
                                            <td
                                                className="
                                                whitespace-nowrap  
                                                px-2 
                                                py-2
                                                ">
                                                {/* {user.status ? (
                                                    <button
                                                        className='
                                                    bg-green-600 
                                                    rounded-[3px] 
                                                    px-3 
                                                    h-[20px]  
                                                    text-white  
                                                    cursor-pointer 
                                                    font-medium'
                                                        onClick={() => blockUser(user._id)}

                                                    >
                                                        BLOCK
                                                    </button>
                                                ) : (
                                                    <button
                                                        className='
                                                    bg-red-500 
                                                    rounded-[3px] 
                                                    px-3 
                                                    h-[20px]  
                                                    text-white  
                                                    cursor-pointer 
                                                    font-medium'
                                                        onClick={() => unblockUser(user._id)}
                                                    > UNBLOCK
                                                    </button>
                                                )} */}

                                                {user.status ? (
                                                    <button
                                                        className='
                                                        bg-red-500
                                                        rounded-[3px]
                                                        px-3 
                                                        h-[20px]  
                                                        text-white  
                                                        cursor-pointer 
                                                        font-medium
                                                        ' onClick={() => unblockUser(user._id)}> BLOCK</button>
                                                ) : (
                                                    <button className='
                                                    bg-green-500 
                                                    rounded-[3px] 
                                                    px-3 
                                                    h-[20px]  
                                                    text-white  
                                                    cursor-pointer 
                                                    font-medium' onClick={() => blockUser(user._id)}
                                                    >UNBLOCK</button>
                                                )}

                                            </td>
                                        </tr>
                                    ))}
                                    {ClientDetails.length === 0 && <h2>Empty list</h2>}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default UserList