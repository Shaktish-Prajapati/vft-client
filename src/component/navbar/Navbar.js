import React, { useState, useEffect } from 'react'
import {useSelector} from 'react-redux'
import { Layout, Menu, Breadcrumb, message, Button } from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    HomeOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
    PoweroffOutlined
} from '@ant-design/icons';
import { Link, BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import {Logout} from '../../redux/user/UserActions'
// import Logo from '../../assests/svg/vft-right-logo250x150.png'
// import Logo from '../../assests/svg/20210521_011053.png'
import Logo from '../../assests/svg/vft-right.png'
import './Navbar.css'

const {Sider } = Layout;
const { SubMenu } = Menu;

const Navbar =({history})=> {
    const [collapsed, setcollapsed] = useState(true)
    const userData = useSelector(state => state.userLogin)
    console.log(userData)

    const dispatch = useDispatch()
    useEffect(() => {
        setcollapsed(false)
    }, [])
    useEffect(()=>{
        console.log('inside useEffect of Logout!!')
    },[userData])
        return (
            <Sider collapsible collapsed={collapsed} onCollapse={()=>setcollapsed(!collapsed)} >
            <div className="logo">
                <div className="logoBox">
                    
                        <img className="logo" src={Logo} alt="company-logo" />
                    
                </div>
                
            </div>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                <Menu.Item key="Home" icon={<HomeOutlined />}>
                    <Link to='/'>Home </Link>
                </Menu.Item>
                <Menu.Item key="website" icon={<HomeOutlined />}>
                    <Link to='/website'>Website </Link>
                </Menu.Item>
                <SubMenu key="sub1" icon={<UserOutlined />} default='User' title={userData.status?userData.userData.name:'User'}>
                <Menu.Item key="login">
                    <Link to='/login' >Login</Link>
                </Menu.Item>
                
                <Menu.Item key="register">
                <Link to='/register'>Register</Link>
                </Menu.Item>
                {
                        userData.status?<>
                        {/* <Menu.Item key='username'> 
                            {userData.userData.name}
                        </Menu.Item> */}
                        <Menu.Item key='logout'
                        onClick={() => {
                            if (localStorage.getItem('vftuserData')) {
                                dispatch(Logout())
                            }else{
                                message.error('Token not found!!!')
                            }
                        }}
                        // type='primary'
                        icon={<PoweroffOutlined style={{color:'#ff4d4d'}} />}
                        >
                        Logout
                    </Menu.Item> </>
                :<></>
                }
                </SubMenu>
                <SubMenu key="sub2" icon={<TeamOutlined />} title="Services">
                <Menu.Item key="6">Website Development</Menu.Item>
                <Menu.Item key="8">Mobile App</Menu.Item>
                </SubMenu>
                <Menu.Item key="9" icon={<FileOutlined />}>
                Files
                </Menu.Item>
                <Menu.Item key="aboutUs" icon={<DesktopOutlined />}>
                <Link to="/aboutUs" >About Us</Link>
                </Menu.Item>
            </Menu>
        </Sider>
        )
    }
export default Navbar;
