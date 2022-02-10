import axios, {AxiosResponse} from "axios";

const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0',
    withCredentials: true,
});

//'http://localhost:7542/2.0/'

export const authAPI = {
    forgotPassword(data: ForgotPasswordDataRequestType){
        return instance.post<ForgotPasswordDataRequestType, AxiosResponse<ResponseType>>('/auth/forgot', data)
    },
    signUp(email: string,password: string){
        return instance.post('/auth/register',{email, password})
    },
    login(payload: LoginPayloadType) {
        return instance.post<LoginResponseType>('/auth/login', payload)
    },
    logout(){
        return instance.delete<ResponseType>('/auth/me')
    },
    me(){
        return instance.post<LoginResponseType>('/auth/me')
    },
    setProfileName(data: SetNameAvaType) {
        return instance.put<SetNameAvaResponseType>('/auth/me', data)
    },
    setNewPassword(newPassword: string, token: string | undefined) {
        return instance.post<SetNewPasswordResponeType>('/auth/set-new-password', {
            password: newPassword,
            resetPasswordToken: token
        })
    }
};

export type ForgotPasswordDataRequestType = {
    email: string,
    from: string,
    message: string,
}

export type SetNameAvaType = {
    name?: string,
    avatar?: string,
}

export type SetNameAvaResponseType = {
    updatedUser: LoginResponseType,

    error?: string,
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
    rememberMe: boolean
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

type SetNewPasswordResponeType = {
    info?: string
    error?: string
};