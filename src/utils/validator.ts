export const isEmailValid = (email: string) => {
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)
}

export const isPasswordLengthValid = (password: string) => {
    return password.length > 7
}
