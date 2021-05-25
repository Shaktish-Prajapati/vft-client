import './Landing.css'
import React,{useState} from 'react'
import {Layout} from 'antd'
import Navbar from '../../navbar/Navbar'
import Website from '../weOffer/website/Website'
const {Content,Header,Sider} = Layout

const AppContent = () => {
    
    return (
        <Layout style={{ minHeight: '100vh' }} >
            {/* <Navbar /> */}
            <Layout className="site-layout" >
                {/* Header section */}
                <Header >
                    <h2 style={{color:'whitesmoke'}}>Welcome</h2>
                </Header>
                
                <Content style={{ margin: '24px 16px 0' }}>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360, background:'white' }}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel distinctio voluptatibus nemo aut. At veritatis aperiam facilis, unde maxime exercitationem, vitae saepe sapiente ipsam cupiditate ea. Repellendus numquam blanditiis animi!</p>
                    </div>
                </Content>
            </Layout>
        </Layout>
    )
}

export default AppContent;
