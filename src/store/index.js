import {createStore} from "@reduxjs/toolkit"
import reducer from "./reducer"

// 使用reducer初始化redux-store
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store