import React from "react"
import ReactDOM from "react-dom"
import "./App.less"
import { BrowserRouter, Route } from "react-router-dom"
/* BrowserRouter 历史路由 路由中不带# 哈希路由带 
 Route 路由 
 NavLink可以实现路由链接的高亮，通过activeClassName指定样式名  
 Switch 通常情况下，path和component是一一对应的关系。 2.Switch可以提高路由匹配效率(单一匹配)。
			 */
// 导入登录组件
import Login from "./pages/login/login.jsx"
import Admin from "./pages/admin/admin.jsx"
ReactDOM.render(
    <BrowserRouter>
        {/* 历史路由 不是哈希路由 */}
        <Route path="/login" component={Login}></Route>
        <Route path="/admin" component={Admin}></Route>
    </BrowserRouter>,
    document.querySelector("#root")
)
