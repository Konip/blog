export type LoginDto = {
    email: string
    password: string
}

export type CreateUserDto = {
    fullName: string
} & LoginDto

export type ResponseUser = {
    fullName: string
    email: string
    password: string
    id: number
    token: string
}