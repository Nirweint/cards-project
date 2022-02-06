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

const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0',
})

export const api = {
    forgotPassword(data: ForgotPasswordDataRequestType){
        return instance.post<ForgotPasswordDataRequestType, AxiosResponse<ResponseType>>('/auth/forgot', data)
    },
    signUp(email: string,password: string){
        return instance.post('/auth/register',{email, password})
    }
}