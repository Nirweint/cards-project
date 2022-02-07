import axios, {AxiosResponse} from "axios";

export type ForgotPasswordDataRequestType = {
    email: string,
    from: string,
    message: string,
}

type ResponseType = {
    answer: boolean,
    html: boolean,
    info: string,
    success: boolean,
}

type LoginPayloadType = {
    email: string
    password: string
    rememberMe?: boolean
}

export type LoginResponseType = {
    _id: string;
    email: string;
    name: string;
    avatar?: string;
    publicCardPacksCount: number; // количество колод

    created: Date;
    updated: Date;
    isAdmin: boolean;
    verified: boolean; // подтвердил ли почту
    rememberMe: boolean;

    error?: string;
}

const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0',
    withCredentials: true,
})

export const api = {
    forgotPassword(data: ForgotPasswordDataRequestType){
        return instance.post<ForgotPasswordDataRequestType, AxiosResponse<ResponseType>>('/auth/forgot', data)
    },
    signUp(email: string,password: string){
        return instance.post('/auth/register',{email, password})
    },
    login(payload: LoginPayloadType) {
        return instance.post<LoginResponseType>('/auth/login', payload)
    },
    authMe(){
        return instance.post<LoginResponseType>('/auth/me')
    }
}