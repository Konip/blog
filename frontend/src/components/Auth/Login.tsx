import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { ReactComponent as ArrowLogo } from "../../assets/img/arrow.svg";
import { ReactComponent as Close } from "../../assets/img/close.svg";
import { ReactComponent as FbLogo } from "../../assets/img/fb.svg";
import { ReactComponent as GoogleLogo } from "../../assets/img/google.svg";
import { ReactComponent as MailLogo } from "../../assets/img/mail.svg";
import { loginRequest } from "../../store/authActionTypes";
import { closePopUp, openPopUp } from "../../store/modalActionTypes";
import { CreateUserDto } from "../../store/types";
import { ReactComponent as ShowPass } from "../../assets/img/show.svg";
import { ReactComponent as HidePass } from "../../assets/img/hide.svg";
import { SignupFormSchema } from "../../utils/schemas/signupValidation";
import "./Auth.scss";

interface LoginProps {
 
}

// const isValidEmail = (email: string): boolean => !(email && !/^[a-zа-яё0-9._%+-]+@[a-zа-яё0-9.-]+\.[a-zа-яё]{2,6}$/i.test(email));

// Yup.addMethod(Yup.string, "validateEmail", function (errorText) {
//     const message = errorText || "Поле должно содержать адрес в формате email@domain.com";
//     return this.test("emailValidate", message, isValidEmail);
// });

const Login: React.FC<LoginProps> = () => {

    const [loading, setLoading] = React.useState<boolean>()
    const [emailPage, setEmailPage] = React.useState<boolean>(false)
    const [showPassword, setShowPassword] = React.useState<boolean>(false)

    const dispatch = useDispatch()

    // const handleOnSubmit = async ({ email, password, fullName }: { fullName: string, email: string, password: string }, actions: any) => {
    const handleOnSubmit = async (dto: CreateUserDto, actions: any) => {
        try {
            setLoading(true)
            dispatch(loginRequest(dto))
            actions.resetForm();
        } catch (error) {
            actions.setErrors({ incorrect: error })
            console.warn(error);
        } finally {
            setLoading(false)
            actions.setSubmitting(false);
        }
    }

    const handleOnShowPass = () => {
        setShowPassword(!showPassword)
    }

    return (
        <div className="signup">
            <div className="signup__close">
                <Close onClick={() => dispatch(closePopUp())} />
            </div>
            <div className="signup__left"></div>
            <div className="signup__right">
                <div className="signup__right-container">
                    <div className="signup__header">
                        <div className="signup__header-container">
                            <div className="signup__header-title">
                                Log In.
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
                                initialValues={{ email: "", password: "", fullName: "" }}
                                validationSchema={SignupFormSchema}
                                onSubmit={handleOnSubmit}
                            >
                                {({ isSubmitting, errors }: { isSubmitting: boolean, errors: any }) => (
                                    <Form className="signup__form">
                                        <div className="signup__input">
                                            <label htmlFor="email">Email</label>
                                            <div className="signup__container">
                                                <Field className="signup__field" type="email" name="email" id="email" />
                                                <div className={errors?.email ? "signup__border-error" : "signup__border"}></div>
                                                <div className={errors?.incorrect ? "signup__border-error" : "signup__border"}></div>
                                            </div>
                                            <ErrorMessage className="signup__error" name="email" component="div" />
                                            {errors.incorrect && <div className="signup__error">{errors.incorrect}</div>}
                                        </div>
                                        <div className="signup__input">
                                            <label htmlFor="password">Password</label>
                                            <div className="signup__container">
                                                <Field className="signup__field"
                                                    type={showPassword ? "text" : "password"}
                                                    name="password"
                                                    id="password"
                                                />
                                                <div className={errors?.password ? "signup__border-error" : "signup__border"}></div>
                                                <div className={errors?.incorrect ? "signup__border-error" : "signup__border"}></div>
                                                {showPassword
                                                    ? <ShowPass id="show" onClick={handleOnShowPass} />
                                                    : <HidePass id="hide" onClick={handleOnShowPass} />
                                                }
                                            </div>
                                            <ErrorMessage className="signup__error" name="password" component="div" />
                                        </div>
                                        <div className="signup__footer">
                                            <div className="signup__footer-container">
                                                <div className="signup__cards-title">
                                                    Already have an account?
                                                </div>
                                                <div className="signup__cards-login"
                                                    onClick={() => dispatch(openPopUp("signUp"))}
                                                >
                                                    Create Account
                                                    <ArrowLogo />
                                                </div>
                                            </div>
                                            <button className="modal__btn-sign" type="submit" disabled={isSubmitting}>
                                                {loading ?
                                                    <span className="loading">
                                                        Login<span className="one">.</span><span className="two">.</span><span className="three">.</span>
                                                    </span>
                                                    : "Login"}
                                            </button>
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                            :
                            <div className="signup__cards">
                                <div className="signup__cards-title">
                                    Continue with...
                                </div>
                                <div className="signup__cards-container">
                                    <div className="signup__card">
                                        <a className="signup__card-img">
                                            <FbLogo />
                                        </a>
                                        <div className="signup__card-title">
                                            Facebook
                                        </div>
                                    </div>
                                    <div className="signup__card">
                                        <a className="signup__card-img">
                                            <GoogleLogo />
                                        </a>
                                        <div className="signup__card-title">
                                            Google
                                        </div>
                                    </div>
                                    <div className="signup__card"
                                        onClick={() => setEmailPage(true)}
                                    >
                                        <a className="signup__card-img">
                                            <MailLogo />
                                        </a>
                                        <div className="signup__card-title">
                                            Email address
                                        </div>
                                    </div>
                                </div>
                                <div className="signup__cards-footer">
                                    <div className="signup__cards-title">
                                        Already have an account?
                                    </div>
                                    <div className="signup__cards-login"
                                        onClick={() => dispatch(openPopUp("signUp"))}>
                                        Create Account
                                        <ArrowLogo />
                                    </div>
                                </div>
                            </div>
                    }
                </div>

            </div>
        </div>
    )
}
export default Login;
