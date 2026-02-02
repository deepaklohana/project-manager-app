import axios from "axios";

const  userApi= axios.create({
    baseURL: 'http://localhost:5005/api/users'
})

export const getUser = ()=>{
    return userApi.get('/')
}

export const deleteUser = (id)=>{
    return userApi.delete(`/delete/${id}`)
}

export const postUser =(user)=>{
    return userApi.post('/add',user)
}

export const updatedUser = (id, user) =>{
    return userApi.patch(`/update/${id}`,user)
}

