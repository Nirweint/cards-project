import {AxiosResponse} from "axios";
import {instance} from "./config";

export const authAPI = {
    forgotPassword(data: ForgotPasswordDataRequestType) {
        return instance.post<ForgotPasswordDataRequestType, AxiosResponse<ResponseType>>('/auth/forgot', data)
    },
    signUp(email: string, password: string) {
        return instance.post('/auth/register', {email, password})
    },
    login(payload: LoginPayloadType) {
        return instance.post<LoginResponseType>('/auth/login', payload)
    },
    logout() {
        return instance.delete<ResponseType>('/auth/me')
    },
    me() {
        return instance.post<LoginResponseType>('/auth/me')
    },
    setProfileName(data: SetNameAvaType) {
        return instance.put<SetNameAvaResponseType>('/auth/me', data)
    },
    setNewPassword(newPassword: string, token: string | undefined) {
        return instance.post<SetNewPasswordResponseType>('/auth/set-new-password', {
            password: newPassword,
            resetPasswordToken: token
        })
    }
};

// types
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

export type ResponseType = {
    answer: boolean,
    html: boolean,
    info: string,
    success: boolean,
}

export type LoginPayloadType = {
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

export type SetNewPasswordResponseType = {
    info?: string
    error?: string
};