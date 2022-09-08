import React from 'react';
import { connect } from 'react-redux';
import { registerThunkCreactor } from '../redux/registerReducer';
import { loginThunkCreactor } from '../redux/loginReducer';
import { dataThunkCreactor } from '../redux/dataReducer';
import { RegisterForm } from './formPages/formRegister/registerForm';
import { LoginForm } from './formPages/formLogin/formLogin';
import { Profile } from './profile/profile';
import { Routes, Route, NavLink } from "react-router-dom";
// import {Redirect }



export class PageForm extends React.Component {

    clickRegistration = (username, password) => {
        this.props.registerThunkCreactor(username, password)
    }

    clickLogin = (username, password) => {
        this.props.loginThunkCreactor(username, password)
    }

    clikGetStatic = () => {
        this.props.dataThunkCreactor()
    }

    render() {
        console.log(this.props.loginStatus)
        return (
            <>
                <div>
                    <div>
                        <div> <NavLink to='/login'>Вход</NavLink></div>
                        <div><NavLink to='/registration'>Регистрация</NavLink></div>
                    </div>
                    <Routes>
                        <Route path="/login/*" element={<LoginForm loginStatus={this.props.loginStatus} clickLogin={this.clickLogin} />} />
                        <Route path="/registration/*" element={<RegisterForm clickRegistration={this.clickRegistration} />} />
                        <Route path="/profile/*" element={<Profile clikGetStatic={this.clikGetStatic} loginStatus={this.props.loginStatus} />} />
                    </Routes>

                </div>
            </>
        )
    }
}



let mapStateToProps = (state) => {
    return {
        loginStatus: state.loginReducer.loginStatus
    }
}


export const PageMainContainer = connect(mapStateToProps, { registerThunkCreactor, loginThunkCreactor, dataThunkCreactor, })(PageForm)