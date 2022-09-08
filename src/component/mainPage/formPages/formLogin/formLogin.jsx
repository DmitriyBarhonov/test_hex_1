import React from 'react';
import { Formik, Form, Field, } from "formik";
import {Navigate } from "react-router-dom";
import profile from "../../../style/profileStyle.module.css"


export const LoginForm = (props) => {

    return (
       <div className={profile.generator}>
            <Formik  initialValues={{ username: "", password:"" }} onSubmit={(values)=>{props.clickLogin(values)}}>
                <Form>
                    <div>
                         <div className={profile.title}>Вход</div>
                        <div>
                            <Field className={profile.input} name="username" type="text" placeholder='Логин'/>
                        </div>
                        <div>
                            <Field className={profile.input} name="password" type="password" placeholder='Пароль'/>
                        </div>
                        <div className={profile.button_generator_block}>
                            <button className={profile.button} type="sumbit" >Войти</button>
                        </div>
                    </div>
                </Form>
            </Formik>
            {props.loginReducer.loginStatus ? <Navigate to="/profile/"/> : null}
            {props.loginReducer.loginError ? <div>Не правильный логин или пароль</div> : null}
        
       </div>
    )
}
