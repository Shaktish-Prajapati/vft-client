import './AboutUs.css'
import React,{useState} from 'react'
import {Layout} from 'antd'
import Navbar from '../../navbar/Navbar'
import Website from '../weOffer/website/Website'
const {Content,Header,Sider} = Layout

const AboutUs = () => {
    return (
        <Layout style={{ minHeight: '100vh' }} >
            {/* <Navbar /> */}
            <Layout className="site-layout" >
                {/* Header section */}
                <Header >
                    <h2 style={{color:'whitesmoke'}}>About Us</h2>
                </Header>
                
                <Content style={{ margin: '24px 16px 0' }}>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360, background:'white' }}>
                        <div className="about-layout">
                            About Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis saepe dolore recusandae, dolorem assumenda totam fuga alias neque deserunt provident eos id, similique commodi quis quae maiores harum voluptatum fugit.
                        </div>
                        <div className="about-contact-layout">
                            Contact Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos accusantium beatae ea voluptatibus aliquam, consequatur odio ut quis in ducimus provident. Dolore optio quasi tempore qui reprehenderit blanditiis dolores quidem.
                        </div>
                    </div>
                </Content>
            </Layout>
        </Layout>
    )
}

export default AboutUs
