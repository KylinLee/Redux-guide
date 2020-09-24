import React from "react";
import store from "../store/index"
import "./login.css"

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        store.subscribe(() => {
            this.setState({
                ...store.getState()
            })
        })
    }

    switchLogStatus() {
        const {isLogin} = store.getState()
            store.dispatch((() => {
                    return {
                        type: isLogin ? "LOGOUT" : "LOGIN"
                    }
                })()
            )
    }

    render() {
        console.log(this.state)
        return <div className={"btn"} onClick={this.switchLogStatus}>
            {this.state.isLogin ? "退出登录" : "登录"}
        </div>
    }

}

export default Login