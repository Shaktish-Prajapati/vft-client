// import './AppContent.css'
import React,{useState} from 'react'
import {Layout} from 'antd'
import Background from '../../../../assests/svg/vft-right.png'
// import Logo from '../'
const {Content,Header,Sider} = Layout

const Website = () => {
    
    return (
        <Layout style={{ minHeight: '100vh' }} >
            {/* <Navbar /> */}
            <Layout className="site-layout" >
                {/* Header section */}
                <Header >
                    <h2 style={{color:'whitesmoke'}}>Website Development</h2>
                </Header>
                <Content style={{ margin: '24px 16px 0', }}>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360, background:'white'}}>
                        <p>Website Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel distinctio voluptatibus nemo aut. At veritatis aperiam facilis, unde maxime exercitationem, vitae saepe sapiente ipsam cupiditate ea. Repellendus numquam blanditiis animi!</p>
                    </div>
                </Content>
            </Layout>
        </Layout>
    )
}

export default Website;
