
import userAxios from '../Axios/guestAxios';



export const createChat = (data) => userAxios.post('/createChat', data);

export const userChats = (id) => userAxios.get(`/getchat/${id}`);

export const findChat = (firstId, secondId) => userAxios.get(`/find/${firstId}/${secondId}`);