import React from 'react';
import { Formik, Form, Field, } from "formik";
import { Navigate } from "react-router-dom";
import profile from "../../../style/profileStyle.module.css"


export const RegisterForm = (props) => {

    return (

        <div className={profile.generator}>
            <Formik initialValues={{ username: "", password: "" }} onSubmit={(values) => { (props.clickRegistration(values.username, values.password)) }}>
                <Form>
                    <div>
                        <div className={profile.title}>Регистрация</div>
                        <div>
                            <Field className={profile.input} name="username" type="text" placeholder='Логин' />
                        </div>
                        <div>
                            <Field className={profile.input} name="password" type="password" placeholder='Пароль' />
                        </div>
                        <div className={profile.button_generator_block}>
                            <button className={profile.button} type="sumbit" >Регистрация</button>
                        </div>
                    </div>
                </Form>
            </Formik>
            {props.registerData.registrationStatus ? <Navigate to="/login/" /> : null}
            {props.registerData.registrationError ? <div>Логин уже занят</div> : null}
        </div>

    )
}
