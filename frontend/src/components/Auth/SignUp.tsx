import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import { ReactComponent as Close } from '../../assets/img/close.svg';
import { SignupFormSchema } from '../../utils/schemas/signupValidation';
// import { Context } from "../../Context.js";
// import './Modal.css';
import './Auth.scss';


interface SignUpProps {
    // openModal(activeModal: boolean, typeModal: string): void
    // setEmail(email: string): void
    setAuthVisible: () => void
}

// const isValidEmail = (email: string): boolean => !(email && !/^[a-zа-яё0-9._%+-]+@[a-zа-яё0-9.-]+\.[a-zа-яё]{2,6}$/i.test(email));

// Yup.addMethod(Yup.string, 'validateEmail', function (errorText) {
//     const message = errorText || 'Поле должно содержать адрес в формате email@domain.com';
//     return this.test('emailValidate', message, isValidEmail);
// });




const SignUp: React.FC<SignUpProps> = ({ setAuthVisible }) => {

    const [loading, setLoading] = React.useState<boolean>()
    const [emailPage, setEmailPage] = React.useState<boolean>(false)
    // const ctx = useContext(Context);

    const handleOnSubmit = async ({ email, password }: { email: string, password: string }, actions: any) => {
        console.log(email, password);

        // try {
        //     setLoading(true)
        //     await ctx.registration(email, password)
        //     actions.setSubmitting(false);
        //     actions.resetForm();
        //     setEmail(email)
        //     openModal(true, 'SignupInformation')
        // } catch (error) {
        //     actions.setErrors({ incorrect: error })
        //     actions.setSubmitting(false);
        // } finally {
        //     setLoading(false)
        // }
    }

    return (
        <div className="signup">
            <div className="signup__close">
                <Close onClick={setAuthVisible} />
            </div>
            <div className="signup__img"></div>
            <div className="signup__form">
                <div className="signup__form-container">
                    <div className="signup__header">
                        <div className="signup__header-container">
                            <div className="signup__header-title">
                                Create Account.
                            </div>
                            <div className="signup__header-subtitle">
                                Share your thoughts with the world from today.
                            </div>
                        </div>
                    </div>
                    {
                        emailPage
                            ?
                            <Formik
                                initialValues={{ email: '', password: '' }}
                                validationSchema={SignupFormSchema}
                                onSubmit={handleOnSubmit}
                            >
                                {({ isSubmitting, errors }: { isSubmitting: boolean, errors: any }) => (
                                    <Form>
                                        <div className="input-wrapper">
                                            <div className="input-container">
                                                <Field className="modal__input" type="email" name="email" placeholder="Email" />
                                                <div className={errors?.email ? "input-border-error" : "input-border"}></div>
                                                <div className={errors?.incorrect ? "input-border-error" : "input-border"}></div>
                                            </div>
                                            <ErrorMessage className="inputError" name="email" component="div" />
                                            {errors.incorrect && <div className="inputError">{errors.incorrect}</div>}
                                        </div>

                                        <div className="input-wrapper">
                                            <div className="input-container">
                                                <Field className="modal__input" type="password" name="password" placeholder="Password" />
                                                <div className={errors?.password ? "input-border-error" : "input-border"}></div>
                                                <div className={errors?.incorrect ? "input-border-error" : "input-border"}></div>
                                            </div>
                                            <ErrorMessage className="inputError" name="password" component="div" />
                                        </div>
                                        <div className="login-container">
                                            <button className="modal__btn-sign" type="submit" disabled={isSubmitting}>
                                                {loading ?
                                                    <span className="loading">
                                                        Registration<span className="one">.</span><span className="two">.</span><span className="three">.</span>
                                                    </span>
                                                    : "Sign up, it's Free"}
                                            </button>
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                            :
                            <div className='signup__cards'>
                                <div className="signup__cards-title">
                                    Continue with...
                                </div>
                                <div className="signup__cards-container">
                                    <div className="signup__card">
                                        <div className="signup__card-img"></div>
                                        <div className="signup__card-title">
                                            Facebook
                                        </div>
                                    </div>
                                    <div className="signup__card"
                                    >Google
                                    </div>
                                    <div className="signup__card"
                                        onClick={() => setEmailPage(true)}
                                    >
                                        Email address
                                    </div>
                                </div>
                            </div>
                    }
                </div>

            </div>
        </div>
    )
}
export default SignUp;
