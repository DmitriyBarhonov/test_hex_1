import { Navigate } from "react-router-dom";
import React from "react";
import { Formik, Form, Field, } from "formik";
import profile from ".././../style/profileStyle.module.css"


export class Profile extends React.Component {
    componentDidMount() {
        if (this.props.state.dataReducer.statistic.length === 0) {
            let promise = this.props.dataThunkCreactor(this.props.state.dataReducer.numberPage * 10, this.props.state.loginReducer.token)
            promise.then(() => {
                this.props.paginationClik(this.props.state.loginReducer.token, this.props.state.dataReducer.numberPage, this.props.state.dataReducer.sortParam)
            })

        }
    }





    render() {

        let href = `http://79.143.31.216/s/${this.props.state.squeezeLink.short}`

        return (

            <>
                <div className={profile.generator}>
                    <Formik initialValues={{ link: "" }} onSubmit={(values) => { (this.props.ckickPostLink(values.link)) }}>
                        <Form>
                            <div >
                                <div className={profile.title}>Генератор ссылок</div>
                                <div>
                                    <Field className={profile.input} name="link" type="text" placeholder='Ссылка' />
                                </div>

                                <div className={profile.button_generator_block}>
                                    <button className={profile.button} type="sumbit" >Получить ссылку</button>
                                </div>
                            </div>
                        </Form>
                    </Formik>

                    {this.props.state.squeezeLink.squeezeError ? <div className={profile.title}>Некорректная ссылка</div> : null}
                    <div className={profile.item}>
                        <div> ID: {this.props.state.squeezeLink.id}</div>
                        <div> Сокращенная: <a href={href}>http://79.143.31.216/s/{this.props.state.squeezeLink.short}</a> </div>
                        <div>Исходная: {this.props.state.squeezeLink.target}</div>
                        <div>Количество переходов: {this.props.state.squeezeLink.counter}</div>
                    </div>
                </div>


                {this.props.loginReducer.loginStatus ? null : <Navigate to="/login/" />}
            </>
        )
    }
}