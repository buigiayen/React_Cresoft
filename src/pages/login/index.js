import { useHistory } from "react-router-dom";
import { Form, Input, Button, Modal } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';
import "./index.css"
import { useState } from 'react';
import { loginCTP } from "../../common/services/apiHelper"
function Login() {
    const [usernames, setUsername] = useState("");
    const [passwords, setPassWord] = useState("");
    let history = useHistory();
    const info = () => {
        const data = { Username: usernames, Password: passwords }
        loginCTP(data).then(rs => {
            let token = rs;
            localStorage.setItem("userToken", token);
            if (token !== null) {
                history.push("/main");
            }
            else{
               history.push("/");
            }



        }
        ).catch(rs => console.log(rs));

    };
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return (

        <Row>
            <Col span={10}></Col>
            <Col span={8}>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                >
                    <h2 className="label"> ĐĂNG NHẬP HỆ THỐNG</h2>
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Xin hãy nhập tài khoản!' }]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} className="txtUsername"
                            onChange={e => setUsername(e.target.value)} placeholder="Tài khoản" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Xin hãy nhập mật khẩu!' }]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Mật khẩu"
                            onChange={e => setPassWord(e.target.value)}
                        />
                    </Form.Item>


                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button" onClick={() => info("login")}>
                            Đăng nhập
                        </Button>

                    </Form.Item>
                    <Form.Item>
                        <Button type="info" htmlType="submit" className="login-form-button" onClick={showModal}>
                            Đăng kí
                        </Button>
                    </Form.Item>
                    <Form.Item>

                        <a className="login-form-forgot" href="">
                            Quên mật khẩu!
                        </a>
                    </Form.Item>

                </Form>
                <Modal title="Đăng kí" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Xin hãy nhập tài khoản!' }]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} className="txtUsername"
                            onChange={e => setUsername(e.target.value)} placeholder="Tài khoản" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Xin hãy nhập mật khẩu!' }]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Mật khẩu"
                            onChange={e => setPassWord(e.target.value)}
                        />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Xin hãy nhập mật khẩu!' }]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Xác nhận mật khẩu"
                            onChange={e => setPassWord(e.target.value)}
                        />
                    </Form.Item>
                </Modal>
            </Col>
        </Row>

    );
}


export default Login;