export default function (state, action) {
    // 首次调用本函数时设置初始 state
    state = state || {isLogin: false};

    switch (action.type) {
        case "LOGIN":
            return {isLogin: true};
        case "LOGOUT":
            return {isLogin: false};
        default:
            return state; // 无论如何都返回一个 state
    }
}