import React from 'react';
import { Menu } from 'antd';
// import { Anchor } from 'antd'

function AppHeader() {
    return (
        <div className="container-fluid">
            <div className="header">
                <div className="logo">
                    <i className="fas fa-bolt"></i>
                    <a rel="noopener noreferrer" href="http://www.github.com/john-muriu" target="_blank">JohnTech</a>
                </div>
                {/* <Anchor targetOffset="65"> */}
                <Menu mode="horizontal" defaultSelectedKeys={['home']}>
                    {/* <div className="mobileHidden">  </div> */}
                    <Menu.Item key="home">Home</Menu.Item>
                    <Menu.Item key="about">About</Menu.Item>
                    <Menu.Item key="features">Features</Menu.Item>
                    <Menu.Item key="howitworks">How It works</Menu.Item>
                    <Menu.Item key="faq">FAQ</Menu.Item>
                    <Menu.Item key="pricing">Pricing</Menu.Item>
                    <Menu.Item key="contact">Contacts</Menu.Item>
                </Menu>
                {/* </Anchor> */}

            </div>
        </div>

    )
}

export default AppHeader;
