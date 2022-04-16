import * as Yup from 'yup';

export const SignupFormSchema = Yup.object().shape({
    fullName: Yup.string()
        // .required('Field cannot be empty')
        .min(4, 'Password is too short - should be 4 chars minimum.')
        .max(32, 'Password is too long - should be 32 chars maximum.'),
    email: Yup.string()
        // .required('Field cannot be empty')
        .email('Please insert a valid email'),
    password: Yup.string()
        // .required('Password is required')
        .min(4, 'Password is too short - should be 4 chars minimum.')
        .max(32, 'Password is too long - should be 32 chars maximum.')
});