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
    PoweroffOutlined,
    AppstoreOutlined,
    SettingOutlined,
    MailOutlined,
} from '@ant-design/icons';
import { Link, BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import {Logout} from '../../redux/user/UserActions'
// import Logo from '../../assests/svg/vft-right-logo250x150.png'
// import Logo from '../../assests/svg/20210521_011053.png'
import Logo from '../../assests/svg/vft-right-logo2.png'
import './Navbar.css'

const { Sider } = Layout;
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
    return (<>
        {/* Custom Style */}
        
        <Menu  mode="horizontal" className="NavBar">
        <div className="logo">
        
        <img src={Logo} alt="company-logo" width="100%"/>
        
        </div>
        <div className="User-icon">
            <div className="User-logo">
            
            </div>
            <div className="User-name">
            <p>Purushottam Kumar</p>
            </div>
        </div>
            <div className="NavBar-flex" >

            <Menu.Item key="home" className="NavBar-flexItem">
                <Link className="link">
                    Home
                </Link>
            </Menu.Item>
            <Menu.Item key="services" className="NavBar-flexItem" >
                <Link className="link">
                    Services
                </Link>
            </Menu.Item>
            <Menu.Item key="technology" className="NavBar-flexItem" >
                <Link className="link">
                    Technology
                </Link>
            </Menu.Item>
            <Menu.Item key="aboutus" className="NavBar-flexItem" >
                <Link className="link">
                    AboutUs
                </Link>
            </Menu.Item>
            </div>
        </Menu>
        
        
        
        
        
        {/* <div className="NavBar">
        <div className="logo">
        
        <img src={Logo} alt="company-logo" width="80px"/>
        
        </div>
        <div className="User-icon">
        <div className="User-logo">
        
        </div>
        <div className="User-name">
        <p>Purushottam Kumar</p>
        </div>
        </div>
        <div className="NavBar-text">
        <ul>
        <li>
        <Link className="link">Home</Link>
        </li>
        <li>
        <Link className="link">Services</Link>
        </li>
        <li>
        <Link className="link">Technology</Link>
        </li>
        <li>
        <Link className="link">About Us</Link>
        </li>
        </ul>
        </div>
        
        
    </div> */}
    {/* <Sider collapsible collapsed={collapsed} onCollapse={()=>setcollapsed(!collapsed)} >
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
    userData.status?<> */}
    {/* <Menu.Item key='username'> 
    {userData.userData.name}
</Menu.Item> */}
{/* <Menu.Item key='logout'
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
</Sider> */}
</>
)
}
export default Navbar;
