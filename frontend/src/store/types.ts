export type LoginDto = {
    email: string
    password: string
}

export type CreateUserDto = {
    fullName: string
} & LoginDto

export type ResponseUser = {
    id: number
    fullName: string
    email: string
    password: string
    token: string
}

export type ResponseLogin = {
    id: number
    fullName: string
    email: string
    token: string
}