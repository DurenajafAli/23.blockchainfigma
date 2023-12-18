const initialState = {
    users:[]
}

export const usersReducer=(state = initialState, action) => {
    switch (action.type) {
        case 'ADD-USERS-REQUEST':
            return { loading: true, ...state }
        case 'ADD-USERS-SUCCESS':
            return { ...state, users: action.payload, loading: false }
        case 'ADD-USERS-ERROR':
            return {loading:false,error:action.payload}
        default:
            return state
    }
}
export const getDataReducer = (state = {}, action) => {
    switch (action.type) {
        case 'ADD-DATA-REQUEST':
            return { loading: true, ...state }
        case 'ADD-DATA-SUCCESSFUL':
            return { ...state, data: action.payload, loading: false }
        case 'ADD-DATA-ERROR':
            return {loading:false,error:action.payload}
        default:
            return state
    }
}

export const BasicInfoReducer = (state = {UserInfo:{}}, action) => {
    switch (action.type) {
        case 'ADD-BASICINFO-REQUEST':
            return { loading: true, ...state }
        case 'ADD-BASICINFO-SUCCESSFUL':
            return { ...state, UserInfo: action.payload, loading: false }
        case 'ADD-BASICINFO-ERROR':
            return { loading: false, error: action.payload }
        default:
            return state
    }
}
export const ContactInfoReducer = (state = { ContactInfo: {} }, action) => {
    switch (action.type) {
        case 'ADD-CONTACTINFO-REQUEST':
            return { loading: true, ...state }
        case 'ADD-CONTACTINFO-SUCCESSFUL':
            return { ...state, ContactInfo: action.payload, loading: false }
        case 'ADD-CONTACTINFO-ERROR':
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const ExperienceInfoReducer = (state = { ExperienceInfo: {} }, action) => {
    switch (action.type) {
        case 'ADD-EXPERIENCEINFO-REQUEST':
            return { loading: true, ...state }
        case 'ADD-EXPERIENCEINFO-SUCCESSFUL':
            return { ...state, ExperienceInfo: action.payload, loading: false }
        case 'ADD-EXPERIENCEINFO-ERROR':
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const SingleUserReducer = (state = { singleUserData: {} }, action)=> {
    switch (action.type) {
       case 'ADD-SINGLE-USER':
            return { loading: true, ...state }
        case 'ADD-SINGLE-SUCCESSFULL':
            return { ...state, singleUserData: action.payload, loading: false }
        case 'ADD-SINGLE-ERROR':
            return {loading:false,error:action.payload}
        default:
            return state
    }
}
    
export const getAllReducer = (state = { state: {} }, action) => {
    switch (action.type) {
        case 'ADD-USERS-REQUEST':
            return { loading: true, ...state }
        case 'ADD-USERS-SUCCESS':
            return { ...state, users: action.payload, loading: false }
        case 'ADD-USERS-ERROR':
            return {loading:false,error:action.payload}
            default:
            return state
    }
}
