import React from "react";
import store from "../store/index";
import "./login.css";

class Login extends React.Component {
    constructor(props) {
        super(props);

        // 将redux-store中的状态映射到组件中
        this.state = store.getState();

        // 当redux-store发生变化，更新组件的store
        store.subscribe(() => {
            console.log(store.getState());
            this.setState({
                ...store.getState(),
            });
        });
    }

    switchLogStatus() {
        const { isLogin } = store.getState();
        // dispatch一个对象（action对象），这个对象包含type属性

        // 下面这个函数相当于自执行的Action Creator（创建action对象）
        // 可以将其放入reducer中，再引入，Vuex建议这样做
        /*(() => {
            return {
                type: isLogin ? "LOGOUT" : "LOGIN"
            }
        })()*/

        store.dispatch(
            (() => {
                return {
                    type: isLogin ? "LOGOUT" : "LOGIN",
                };
            })()
        );
    }

    countPlus() {
        store.dispatch(
            (() => {
                return {
                    type: "COUNT",
                };
            })()
        );
    }

    render() {
        return (
            <>
                <div className={"btn"} onClick={this.switchLogStatus}>
                    {this.state.isLogin ? "退出登录" : "登录"}
                </div>
                <div className={"btn"} onClick={this.countPlus}>
                    点击次数[{this.state.count}]
                </div>
            </>
        );
    }
}

export default Login;
