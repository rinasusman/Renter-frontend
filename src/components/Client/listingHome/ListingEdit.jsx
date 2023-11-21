import React, { useEffect, useState } from 'react'
import Container from '../../Container'
import Heading from '../../Heading'
import Input from '../inputs/Input'
import { useLocation, useNavigate } from 'react-router-dom'
import Button from '../../Button'
import userAxios from "../../../Axios/guestAxios";
const ListingEdit = () => {

    const location = useLocation();
    const { itemData } = location.state;

    const [title, setTitle] = useState(itemData.title);
    const [locations, setLocation] = useState(itemData.location);
    const [guestCount, setGuestCount] = useState(itemData.guestCount);
    const [roomCount, setRoomCount] = useState(itemData.roomCount);
    const [bathroomCount, setBathroomCount] = useState(itemData.bathroomCount);
    const [description, setDescription] = useState(itemData.description);
    const [price, setPrice] = useState(itemData.price);
    const [selectedImages, setSelectedImages] = useState([]);
    const navigate = useNavigate()









    const handleUpdate = async () => {
        try {
            const imageUrls = await Promise.all(
                Array.from(selectedImages).map(async (image) => {
                    const formData = new FormData();
                    formData.append("file", image);
                    formData.append("upload_preset", "i9govbk0");
                    formData.append('cloud_name', "dxwljcjad");

                    const response = await fetch("https://api.cloudinary.com/v1_1/dxwljcjad/image/upload", {
                        method: "POST",
                        body: formData,
                    });

                    const data = await response.json();
                    return data.secure_url;
                })
            );
            await userAxios.put(`/edithomes/${itemData._id}`, {
                title,
                locations,
                guestCount,
                roomCount,
                bathroomCount,
                description,
                price,
                imageUrls
            });
            navigate('/myproperties')
        } catch (error) {
            console.error('Error updating home:', error);
        }
    };
    return (
        <Container>
            <Heading
                title="Edit your Home"
                subtitle=""
            />


            <div className=' flex justify-center'>

                <div className='mt-10 flow flow-col-2'>
                    <div>
                        Title:
                    </div>

                    <input
                        className="
                        border-2 
                        rounded-sm 
                        w-[350px] 
                        p-3
                        "
                        type=" text"
                        placeholder={itemData.title}
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <hr />
                    <div>
                        Category:
                    </div>

                    <input

                        className="
                        border-2
                         rounded-sm 
                          w-[350px] 
                          p-3
                          "
                        type="text"
                        placeholder={itemData.category}

                    />
                    <div>
                        Place:
                    </div>
                    <input
                        className="
                        border-2 
                        rounded-sm 
                        w-[350px] 
                        p-3
                        "
                        type="text"
                        placeholder={itemData.location}
                        value={locations}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                    <hr />
                    <div>Guest:</div>

                    <input
                        className="
                        border-2 
                        rounded-sm 
                        w-[350px] 
                        p-3
                        "

                        type="text"
                        placeholder={itemData.guestCount}
                        value={guestCount}
                        onChange={(e) => setGuestCount(e.target.value)}
                    />
                    <hr />
                    <div>Room:</div>

                    <input
                        className="
                        border-2 
                        rounded-sm 
                        w-[350px] 
                        p-3
                        "
                        type="text"
                        placeholder={itemData.roomCount}
                        value={roomCount}
                        onChange={(e) => setRoomCount(e.target.value)}
                    />
                    <hr />
                    <div> Bathroom:</div>


                    <input
                        className="
                        border-2 
                        rounded-sm 
                        w-[350px] 
                        p-3
                        "
                        type="text"
                        placeholder={itemData.bathroomCount}
                        value={bathroomCount}
                        onChange={(e) => setBathroomCount(e.target.value)}
                    />
                    <hr />
                    <div>Image:</div>

                    <img
                        className="
                        w-[350px] 
                        h-[350px]
                        "
                        src={itemData.imageSrc}
                        alt="" />
                    <hr />
                    <div> Add More Images:</div>

                    <input type="file" multiple onChange={(e) => setSelectedImages(e.target.files)} />
                    <hr />
                    <div>Description:</div>

                    <input
                        className="
                        border-2 
                        rounded-sm 
                        w-[350px] 
                        p-3
                        "
                        type="text"
                        placeholder={itemData.description}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <hr />
                    <div>Price:</div>

                    <input
                        className="
                        border-2 
                        rounded-sm 
                        w-[350px] 
                        p-3
                        "
                        type="text"
                        placeholder={itemData.price}
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                    <br />
                    <div
                        className='
                        w-[350px]
                         mt-3'>
                        <Button
                            onClick={() => {

                                handleUpdate();
                            }}
                            label=" Update"
                        />
                    </div>

                </div>
            </div>


        </Container >
    )
}

export default ListingEdit