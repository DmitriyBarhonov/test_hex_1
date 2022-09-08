import React from 'react';
import { connect } from 'react-redux';
import { registerThunkCreactor } from '../redux/registerReducer';
import { loginThunkCreactor } from '../redux/loginReducer';
import { dataThunkCreactor, paginationThunkCreactor } from '../redux/dataReducer';
import { postLinkThunkCreactor } from '../redux/squeezeReducer';
import { RegisterForm } from './formPages/formRegister/registerForm';
import { LoginForm } from './formPages/formLogin/formLogin';
import { Profile } from './profile/profile';
import { ProfileStatic } from './profile/profileStatisctic';
import { Routes, Route, NavLink } from "react-router-dom";
import profile from "../style/profileStyle.module.css"


export class PageForm extends React.Component {

    clickRegistration = (username, password) => {
        this.props.registerThunkCreactor(username, password)
    }

    clickLogin = (username, password) => {
        this.props.loginThunkCreactor(username, password)
    }

    ckickPostLink = (url) => {
        this.props.postLinkThunkCreactor(url)
    }

    paginationClik=(token, numberPage, order)=>{
        this.props.paginationThunkCreactor(token, numberPage, order)
    }

    render() { 
        
        return (
            <>
                <div>
                    <div className={profile.header}>
                        <div><NavLink to="/stat/">Статистика</NavLink></div>
                        <div> <NavLink to='/login'>Вход</NavLink></div>
                        <div><NavLink to='/registration'>Регистрация</NavLink></div>
                        <div><NavLink to="/profile/*">Профиль</NavLink></div>
                    </div>
                    <div className={profile.form}>
                        <Routes>
                            <Route path="/stat/*" element={<ProfileStatic dataThunkCreactor={this.props.dataThunkCreactor} paginationClik={this.paginationClik} dataReducer={this.props.dataReducer} loginReducer={this.props.loginReducer} />} />
                            <Route path="/login/*" element={<LoginForm loginReducer={this.props.loginReducer} clickLogin={this.clickLogin} />} />
                            <Route path="/registration/*" element={<RegisterForm clickRegistration={this.clickRegistration} registerData={this.props.registerReducer} />} />
                            <Route path="/profile/*" element={<Profile  state={this.props} paginationClik={this.paginationClik} dataThunkCreactor={this.props.dataThunkCreactor} ckickPostLink={this.ckickPostLink} loginReducer={this.props.loginReducer} />} />
                        </Routes>
                    </div>
                </div>
            </>
        )
    }
}


let mapStateToProps = (state) => {
    return {
        loginReducer: state.loginReducer,
        dataReducer: state.dataReducer,
        squeezeLink: state.squeezeReducer,
        registerReducer: state.registerReducer
    }
}


export const PageMainContainer = connect(mapStateToProps, { registerThunkCreactor,paginationThunkCreactor, loginThunkCreactor, dataThunkCreactor, postLinkThunkCreactor })(PageForm)