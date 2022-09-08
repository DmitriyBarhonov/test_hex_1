import React from 'react';
import { Formik, Form, Field, } from "formik";

export const RegisterForm = (props) => {

    return (
        <>
            <Formik  initialValues={{ username: "", password:"" }} onSubmit={(values)=>{(props.clickRegistration(values.username, values.password))}}>
                <Form>
                    <div>
                        <div>Регистрация</div>
                        <div>
                            <Field name="username" type="text" placeholder='Логин'/>
                        </div>
                        <div>
                            <Field name="password" type="text" placeholder='Пароль'/>
                        </div>
                        <div>
                            <button type="sumbit" >Регистрация</button>
                        </div>
                    </div>
                </Form>
            </Formik>
        </>
    )
}
