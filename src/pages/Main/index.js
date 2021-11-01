import { Layout, Input } from 'antd';
import React from 'react';
import AppFooter from '../../View/AppFooter';
import Menus from '../../View/Appheader/menu';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import User from "../User/index";
const { Header, Content, Footer } = Layout;
const { Search } = Input;
export default function Main() {
    const onSearch = value => console.log(value);
    return (
        <Layout style={{ minHeight: '100vh' }}>

            <Router>
                <Menus />
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }} />
                    <div style={{ padding: 10 }}></div>
                    <Content style={{ margin: '0 16px' }}>
                        <Switch>
                            <Route path="/User"> <User /></Route>
                        </Switch>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}><AppFooter /></Footer>
                </Layout>
            </Router>
        </Layout>
    );

}

