import axios from 'axios'
import { CreateUserDto, LoginDto, ResponseUser } from '../store/types'

export const API_URL = `http://localhost:5000`

const instance = axios.create({
    baseURL: API_URL,

})

export const UserApi = {
    async register(dto: CreateUserDto): Promise<ResponseUser> {
        const { data } = await instance.post<CreateUserDto, { data: ResponseUser }>('/auth/register', dto)
        return data
    },
    async login(dto: LoginDto) {
        const { data } = await instance.post<CreateUserDto, { data: ResponseUser }>('/auth/login', dto)
        return data
    }
}
