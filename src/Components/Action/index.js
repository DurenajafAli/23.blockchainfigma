import axios from "axios";

const BASE_URL = "https://json-services.onrender.com/";
export const usersData = (dataUsers) => async (dispatch) => {
    try {
        dispatch({ type: 'ADD-USERS-REQUEST' })
        const response = await axios.post(`${BASE_URL}/users`, dataUsers);
        dispatch({ type:'ADD-USERS-SUCCESS',payload:response.data})
    } catch (error) {
        dispatch({ type:'ADD-USERS-ERROR', payload:error.message})
    }
}
export const getData = () => async (dispatch) => {
    try {
        dispatch({ type: 'ADD-DATA-REQUEST' })
        const response = await axios.get(`${BASE_URL}/users`);
        dispatch({ type: 'ADD-DATA-SUCCESSFUL',payload:response.data})
    } catch (error) {
        dispatch({ type: 'ADD-DATA-ERROR', payload:error.message})
    }
}
export const userBasic = (obj,id) => async (dispatch) => {
    try {
        dispatch({ type: 'ADD-BASICINFO-REQUEST' })
        const response = await axios.patch(`${BASE_URL}/users/${id}`, obj)
        dispatch({ type: 'ADD-BASICINFO-SUCCESSFUL', payload: response.data })
    } catch (error) {
        dispatch({ type: 'ADD-BASICINFO-ERROR', payload:error.message })
    }
}

export const userContact = (obj, id) => async (dispatch) => {
    try {
        dispatch({ type: 'ADD-CONTACTINFO-REQUEST' })
        const response = await axios.patch(`${BASE_URL}/users/${id}`, obj)
        dispatch({ type: 'ADD-CONTACTINFO-SUCCESSFUL', payload: response.data })
    } catch (error) {
        dispatch({ type: 'ADD-CONTACTINFO-ERROR', payload: error.message })
    }
}
export const userExperience = (obj, id) => async (dispatch) => {
    try {
        dispatch({ type: 'ADD-EXPERIENCEINFO-REQUEST' })
        const response = await axios.patch(`${BASE_URL}/users/${id}`, obj)
        dispatch({ type: 'ADD-EXPERIENCEINFO-SUCCESSFUL', payload: response.data })
    } catch (error) {
        dispatch({ type: 'ADD-EXPERIENCEINFO-ERROR', payload: error.message })
    }
}

export const singleData = (id) => async (dispatch) => {
    try {
        dispatch({ type: 'ADD-SINGLE-USER' })
        const response = await axios.get(`${BASE_URL}/users/${id}`)
        dispatch({ type: 'ADD-SINGLE-SUCCESSFULL' , payload:response.data})
    } catch (error) {
        dispatch({ type: 'ADD-SINGLE-ERROR',payload:error})
    }
}

export const allUsers = (id,obj) => async (dispatch) => {
    try {
        dispatch({ type: 'ADD-USERS-REQUEST' })
        const response = await axios.patch(`${BASE_URL}/users/${id}`,obj)
        dispatch({type:'ADD-USERS-SUCCESS',payload:response.data})
    } catch (error) {
        dispatch({type:'ADD-USERS-ERROR',payload:error})
    }
}