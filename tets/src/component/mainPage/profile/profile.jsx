import { Navigate } from "react-router-dom";
import React from "react";


export class Profile extends React.Component {
    componentDidMount(){
        
    }

    render() {
        return (<>
        <button onClick={this.props.clikGetStatic} >КНОПКА</button>
            {/* <div>
                {this.props.id}
                {this.props.short}
                {this.props.target}
                {this.props.counter}
            </div> */}
            {this.props.loginStatus ? null : <Navigate to="/login/" />}
        </>)
    }


}