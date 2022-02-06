import axios, {AxiosResponse} from "axios";


    const instance = axios.create({
        baseURL: 'https://neko-back.herokuapp.com/2.0',
    })

    export const api = {
        // forgotPassword(data: ForgotPasswordDataTypeq){
        //     return instance.post<ForgotPasswordDataType, AxiosResponse<ResponseType>>('/auth/forgot', data)
        // },
        // setNewPassword(data: any) {
        //     return instance.post('/auth/set-new-password', data)
        // },
        signUp(email: string,password: string){
            return instance.post('/auth/register',{email, password})
        }
    }

