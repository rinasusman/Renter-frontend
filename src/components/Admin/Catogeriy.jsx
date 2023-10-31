import React, { useState } from 'react'
import useCategoryModal from '../../Hooks/useCategoryModal';
import adminAxios from '../../Axios/adminAxios'

const Catogeriy = () => {
    const [CategoryDetails, setCategoryDetails] = useState([]);
    const categoryModal = useCategoryModal();

    // const fetchCategoryDetails = async () => {

    //     try {
    //         let response = await adminAxios.get('/getCategoryList');
    //         console.log(response, "hhhhhhhhhhhhhh")
    //         if (Array.isArray(response.data)) {
    //             setClientDetails(response.data);
    //             console.log(setClientDetails, "ssssssssssssssssssssssssss")
    //         }
    //     } catch (e) {
    //         console.log('error', e.message);
    //     }
    // }
    // useEffect(() => {
    //     fetchClientDetails()
    // }, []);


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
                    CATEGORY LIST
                </h1>
                <button
                    onClick={categoryModal.onOpen}
                    className='
                    bg-rose-500 
                    h-[32px] 
                    rounded-[3px] 
                    text-white 
                    flex 
                    items-center 
                    px-[30px] 
                    cursor-pointer
                    '>
                    Add category
                </button>
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
                                            DESCRIPTION
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

                                    <tr
                                        className="
                                        border-b 
                                        dark:border-neutral-500
                                        "
                                    >
                                        <td
                                            className="
                                            whitespace-nowrap  
                                            px-6 
                                            py-4 
                                            font-medium
                                            ">
                                            1

                                        </td>
                                        <td
                                            className="
                                            whitespace-nowrap  
                                            text-black  
                                            font-medium 
                                            px-6 
                                            py-4
                                            ">
                                            abc
                                        </td>
                                        <td
                                            className="
                                            whitespace-nowrap 
                                            text-black 
                                            font-medium 
                                            px-6 
                                            py-4
                                            ">
                                            qer
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


                                            <button
                                                className='
                                                    bg-red-500
                                                    rounded-[3px]
                                                    px-3 
                                                    h-[20px]  
                                                    text-white  
                                                    cursor-pointer 
                                                    font-medium
                                                    ' > BLOCK</button>




                                        </td>
                                    </tr>


                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Catogeriy