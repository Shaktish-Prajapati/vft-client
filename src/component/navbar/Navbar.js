import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Layout, Menu, Breadcrumb, message, Button, Anchor, Drawer } from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    HomeOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
    PoweroffOutlined,
    AppstoreOutlined,
    SettingOutlined,
    MailOutlined,
} from '@ant-design/icons';
import { Link, BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { Logout } from '../../redux/user/UserActions'
// import Logo from '../../assests/svg/vft-right-logo250x150.png'
// import Logo from '../../assests/svg/20210521_011053.png'
import Logo from '../../assests/svg/vft-right-logo2.png'
import './Navbar.css'

const { Sider } = Layout;
const { SubMenu } = Menu;

const Navbar = ({ history }) => {
    const [collapsed, setcollapsed] = useState(true)
    const userData = useSelector(state => state.userLogin)
    console.log(userData)

    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    const dispatch = useDispatch()
    useEffect(() => {
        setcollapsed(false)
    }, [])
    useEffect(() => {
        console.log('inside useEffect of Logout!!')
    }, [userData])
    return (<>
        <Menu key="navbarMenu" mode="horizontal" className="NavBar">
            {/* <div className="container-fluid"> */}
            <div className="header">
                <div className="logo">
                    <img src={Logo} alt="company-logo" width="100%" />
                </div>

                <div className="mobileHidden">
                    <Anchor targetOffset="100">
                        {/* <Menu.Item key="home" className="NavBar-flexItem"> */}
                        <Link key="home-link" className="link">
                            Home
                        </Link>
                        {/* </Menu.Item> */}

                        <Link key="services-link" className="link">
                            Services
                        </Link>


                        <Link key="technology-link" className="link">
                            Technology
                        </Link>

                        <Link key="aboutus-link" className="link">
                            AboutUs
                        </Link>
                        <Menu.Item >
                            <div className="User-icon">
                                <div className="User-logo" />
                                <div className="User-name">
                                    <p>Shaktish Prajapati</p>
                                </div>
                            </div>
                        </Menu.Item>
                    </Anchor>

                </div>
                <div className="mobileVisible">
                    <Button type="primary" onClick={showDrawer}>
                        <i className="fas fa-bars"></i>
                    </Button>
                    <Drawer
                        placement="left"
                        closable={false}
                        onClose={onClose}
                        visible={visible}
                    >
                        <Anchor targetOffset="65">
                            <Menu.Item key="home" className="NavBar-flexItem">
                                <Link key="home-link" className="link">
                                    Home
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="services" className="NavBar-flexItem" >
                                <Link key="services-link" className="link">
                                    Services
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="technology" className="NavBar-flexItem" >
                                <Link key="technology-link" className="link">
                                    Technology
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="aboutus" className="NavBar-flexItem" >
                                <Link key="aboutus-link" className="link">
                                    AboutUs
                                </Link>
                            </Menu.Item>
                        </Anchor>
                    </Drawer>
                </div>
            </div>
            {/* </div> */}
        </Menu>
    </>

        // <Menu key="navbarMenu"  mode="horizontal" className="NavBar">
        // <div className="logo">

        // <img src={Logo} alt="company-logo" width="100%"/>

        // </div>
        // <div className="User-icon">
        //     <div className="User-logo">

        //     </div>
        //     <div className="User-name">
        //     <p>Shaktish Prajapati</p>
        //     </div>
        // </div>
        //     <div className="NavBar-flex" >
        //     <Menu.Item key="home" className="NavBar-flexItem">
        //         <Link key="home-link" className="link">
        //             Home
        //         </Link>
        //     </Menu.Item>
        //     <Menu.Item key="services" className="NavBar-flexItem" >
        //         <Link key="services-link" className="link">
        //             Services
        //         </Link>
        //     </Menu.Item>
        //     <Menu.Item key="technology" className="NavBar-flexItem" >
        //         <Link key="technology-link" className="link">
        //             Technology
        //         </Link>
        //     </Menu.Item>
        //     <Menu.Item key="aboutus" className="NavBar-flexItem" >
        //         <Link key="aboutus-link" className="link">
        //             AboutUs
        //         </Link>
        //     </Menu.Item>
        //     </div>
        // </Menu>
    )
}
export default Navbar;
