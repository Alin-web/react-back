// 登录组件
import React, { Component } from "react"
import "./login.less"
import { UserOutlined, LockOutlined } from "@ant-design/icons"
import logo from "./img/logo.png"
import { Layout, Form, Input, Button, message } from "antd"
const { Header, Content } = Layout
export default class login extends Component {
    // 验证规则
    rules = [
        { required: true, whitespace: true, message: "请输入用户名" },
        { min: 4, message: "最小长度为4" },
        { max: 14, message: "最大长度为14" },
        { pattern: /^[a-zA-Z0-9_]+$/, message: "必须是英文 数字或下划线组成" },
    ]
    // 自定义表单验证规则  _第一个参数为该输入框类型  value 参数为输入得值 必须返回一个Promise 状态
    // 老版有三个参数 validators = (_, value,callbac)  callbac 回调形式已弃用
    validators = (_, value) => {
        if (!value) {
            /* callback("请输入内容") */
            return Promise.reject("请输入内容")
        } else if (value.length < 4) {
            /* callback("最小长度为4") */
            return Promise.reject("最小长度为4")
        } else if (value.length > 14) {
            /*  callback("最大长度为14") */
            return Promise.reject("最大长度为14")
        } else if (!/^[a-zA-Z0-9_]+$/.test(value)) {
            /* callback("必须是英文 数字或下划线组成") */
            return Promise.reject("必须是英文 数字或下划线组成")
        } else {
            /* callback() */
            return Promise.resolve()
        }
    }
    // 表单成功
    success = (e) => {
        console.log("成功")
        console.log(e)
    }
    // 失败
    fail = (e) => {
        message.error("验证失败 请按要求填写")
    }
    // 监听输入框输入值 相当于Oninput 时间
    onValuesChange = (changedValues, allValues) => {
        /*  console.log(changedValues) */
        console.log("============")
        /*  console.log(allValues) */
    }
    onFieldsChange = (e) => {
        console.log(11111)
        /* console.log(e) */
    }
    render() {
        return (
            <div className="login">
                <Layout className="lay">
                    <Header className="header">
                        <img src={logo} alt="logo"></img>
                        <p>谷粒后台管理</p>
                    </Header>
                    <Content className="content">
                        <div className="tit">
                            <p>用户登录</p>
                            <Form
                                name="login"
                                className="form"
                                onFinish={this.success}
                                ref={(e) => {
                                    this.form = e
                                }}
                                onFinishFailed={this.fail}
                                onValuesChange={this.onValuesChange}
                                /* onFieldsChange={this.onFieldsChange} */
                            >
                                <Form.Item name="username" rules={this.rules}>
                                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                                </Form.Item>
                                <Form.Item name="password" rules={[{ validator: this.validators }]}>
                                    <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
                                </Form.Item>
                                <Form.Item>
                                    <Button type="primary" htmlType="submit" className="submitBut">
                                        登录
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </Content>
                </Layout>
            </div>
        )
    }
}
