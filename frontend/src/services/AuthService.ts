import axios from 'axios'
import { CreateUserDto, LoginDto, ResponseLogin, ResponseUser } from '../store/types'
import Cookies from 'js-cookie'
export const API_URL = `http://localhost:5000`

const instance = axios.create({
    baseURL: API_URL,
})

export default class AuthService {
    static async register(dto: CreateUserDto): Promise<ResponseUser> {
        const { data } = await instance.post<CreateUserDto, { data: ResponseUser }>('/auth/register', dto)
        return data
    }
    static async login(dto: LoginDto): Promise<ResponseLogin> {
        const { data } = await instance.post<LoginDto, { data: ResponseLogin }>('/auth/login', dto)
        return data
    }
    static saveCookie(token: string) {
        Cookies.set('authToken', token, { expires: 30 })
    }
    static clearCookie() {
        Cookies.remove('authToken')
    }
}