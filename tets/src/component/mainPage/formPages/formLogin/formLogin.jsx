import React from 'react';
import { Formik, Form, Field, } from "formik";
import {Navigate } from "react-router-dom";

export const LoginForm = (props) => {

    return (
        <>
            <Formik  initialValues={{ username: "", password:"" }} onSubmit={(values)=>{props.clickLogin(values)}}>
                <Form>
                    <div>
                         <div>Вход</div>
                        <div>
                            <Field name="username" type="text" placeholder='Логин'/>
                        </div>
                        <div>
                            <Field name="password" type="text" placeholder='Пароль'/>
                        </div>
                        <div>
                            <button type="sumbit" >Войти</button>
                        </div>
                    </div>
                </Form>
            </Formik>
            {props.loginStatus ? <Navigate to="/profile/"/> : null}
        </>
    )
}
