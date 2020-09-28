export default function (state, action) {
    // 首次调用本函数时设置初始 state
    state = state || { isLogin: false, count: 0 };

    switch (action.type) {
        case "LOGIN":
            state.isLogin = true
            return state
        case "LOGOUT":
            state.isLogin = false
            return state
        case "COUNT":
            console.log(state.count)
            state.count += 1
            return state
        default:
            return state; // 无论如何都返回一个 state
    }
}