import { Navigate } from "react-router-dom";
import React from "react";
import profile from "../../style/profileStyle.module.css"

export class ProfileStatic extends React.Component {

    render() {

        let pages = [];

        const pageCount = Math.ceil(this.props.dataReducer.staisticCount / this.props.dataReducer.pageSize);

        for (let i = 1; i <= pageCount; i++) {
            pages.push(i);
        }

        const token = this.props.loginReducer.token;
        let numberPage = this.props.dataReducer.numberPage;
        let sortParam = this.props.dataReducer.sortParam;

        return (
            <>
                <div className={profile.button_generator_block}>
                    <button onClick={() => this.props.paginationClik(token, numberPage, "asc_short")} className={profile.button} >Сокращенные по возрастанию</button>
                    <button onClick={() => this.props.paginationClik(token, numberPage, "asc_target")} className={profile.button} >Исходная ссылка по возрастанию</button>
                    <button onClick={() => this.props.paginationClik(token, numberPage, "asc_counter")} className={profile.button} >Счетчик по возрастанию</button>
                </div>
                <div className={profile.button_generator_block}>
                    <button onClick={() => this.props.paginationClik(token, numberPage, "desc_short")} className={profile.button} >Сокращенные по убыванию</button>
                    <button onClick={() => this.props.paginationClik(token, numberPage, "desc_target")} className={profile.button} >Исходная ссылка по убыванию</button>
                    <button onClick={() => this.props.paginationClik(token, numberPage, "desc_counter")} className={profile.button} >Счетчик по убыванию</button>
                </div>
                <div >
                    <div >
                        {pages.map(e => {
                            return <button className={profile.pag_btn}
                                onClick={() => this.props.paginationClik(token, e * 10, sortParam)} key={e}>{e}</button>
                        })}
                    </div>
                    {numberPage ? <div>  Страница: {numberPage / 10}</div> : <div>Страница:</div>}


                    {this.props.dataReducer.statistic.map((e) => {
                        let href = `http://79.143.31.216/s/${e.short}`

                       return <div className={profile.item} key={e.id} >
                            <div> ID: {e.id}</div>
                            <div> Сокращенная: <a href={href}>http://79.143.31.216/s/{e.short}</a> </div>
                            <div>Исходная: {e.target}</div>
                            <div>Количество переходов: {e.counter}</div>
                        </div>
                    }
                    )}

                </div>
                {this.props.loginReducer.loginStatus ? null : <Navigate to="/login/" />}
            </>
        )
    }
}

