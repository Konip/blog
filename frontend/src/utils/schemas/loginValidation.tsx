import * as Yup from 'yup';

export const LoginFormSchema = Yup.object().shape({
    email: Yup.string()
        .required('Field cannot be empty')
        .email('Please insert a valid email'),
    password: Yup.string()
        .min(4, 'Password is too short - should be 4 chars minimum.')
        .max(32, 'Password is too long - should be 32 chars maximum.')
});