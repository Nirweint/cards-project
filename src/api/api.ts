export const api = {
    login(payload: LoginPayloadType) {
        return instance.post<LoginResponseType>('/auth/login', payload)
    }
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