const MIN_PASSWORD_LENGTH = 7;

export const isEmailValid = (email: string): boolean =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

export const isPasswordLengthValid = (password: string): boolean =>
  password.length > MIN_PASSWORD_LENGTH;
