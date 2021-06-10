import './Landing.css'
import React,{useState} from 'react'
import {Layout, Button, Row, Col, Card} from 'antd'
import Navbar from '../../navbar/Navbar'
import Website from '../weOffer/website/Website'
import backImageSection1 from '../../../assests/backgroundImages/WebMobile.jpg'
import backImageSection2 from '../../../assests/backgroundImages/Hire_developers.jpg'
import discoverSection3card from '../../../assests/backgroundImages/discover.png'
import solutionSection3card from '../../../assests/backgroundImages/web-design.png'
import executionSection3card from '../../../assests/backgroundImages/programming.png'
import deliverySection3card from '../../../assests/backgroundImages/coding.png'
import MLvectorSection3card from '../../../assests/backgroundImages/ML-vector.jpg'
import ChatBotSection3card from '../../../assests/backgroundImages/chatbot.jpg'
import CloudSection3card from '../../../assests/backgroundImages/cloud.jpg'
import MobileSection3card from '../../../assests/backgroundImages/MobileDesign.jpg'
import UISection3card from '../../../assests/backgroundImages/UIdesign.jpg'
import WebSection3card from '../../../assests/backgroundImages/webdev2.jpg'
import { CloseOutlined } from '@ant-design/icons'


const {Content,Header,Sider} = Layout;
const { Meta } = Card;

const AppContent = () => {
    
    return (
        <Layout  >
            {/* <Navbar /> */}
            <Layout className="site-layout" >
                {/* Header section */}
                {/* <Header >
                    <h2 style={{color:'whitesmoke'}}>Welcome</h2>
                </Header> */}
                
                {/* --------------------  Landing header --------------------------- */}
                <Content className="content-area">
                    <section class="main-page-header">
                            <div class="container">
                                <Row>
                                <Col span={12}>
                                <div class="page-header-content">
                                    <h1>We have best to build what your need</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat veritatis ex ipsa, fugit architecto libero nesciunt excepturi, magni accusamus asperiores, modi explicabo. Facilis consequatur ullam maiores a, repudiandae doloremque </p>
                                    <Button type="primary" size="large">Know More ...</Button>
                                </div>
                                </Col>
                                <Col span={12}></Col>
                                </Row>
                            </div>
                    </section>
            {/* ------------------------- Landing header ends here------------------- */}


{/* ======================== Hire Developers starts here ========================= */}
                    <div className="hire-developers">
                    <Row>
                        <Col xs={{ span: 24}} sm={{ span: 24}} md={{ span: 24}} lg={{ span: 12}} className="hire-developers-image">
                            <img src={backImageSection2} height="100%"></img>
                        </Col>
                        <Col xs={{ span: 24}} sm={{ span: 24}} md={{ span: 24}} lg={{ span: 12}} className="hire-developers-text">
                            <h1>Hire Developers</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat veritatis ex ipsa, fugit architecto libero nesciunt excepturi, magni accusamus asperiores, modi explicabo. Facilis consequatur ullam maiores a, repudiandae doloremque <br />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat veritatis ex ipsa, fugit architecto libero nesciunt excepturi, magni accusamus asperiores, modi explicabo. Facilis consequatur ullam maiores a, repudiandae doloremque
                            </p>
                            <Button type="primary" size="large">Contact us</Button>
                        </Col>
                    </Row>
                    </div>
{/* --------------------------------- Hire Developers Ends here -------------------------- */}


{/* =============================== Application Development process section starts here ========================= */}
                <section className="application-development">
                    <div className="head1">
                    <h1>Simplified Application Development Process</h1> 
                    </div>
                    <div>
                    <Row>
                        <Col xs={{ span: 24}} sm={{ span: 12}} lg={{ span: 6}} className="application-development-text">
                            <center><img src={discoverSection3card} height='150px' alt="card Image" />
                            <p className="application-development-title">Challanges</p>
                            <p className="application-development-content">maiores a, repudiandae doloremque <br />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat veritatis ex ipsa, fugit architecto libero nesciunt excepturi, magni accusamus asperiores, modi explicabo. Facilis </p></center>
                        </Col>
                        <Col xs={{ span: 24}} sm={{ span: 12}} lg={{ span: 6}} className="application-development-text">
                            <center><img src={solutionSection3card} height='150px' alt="card Image" />
                            <p className="application-development-title">Solution</p>
                            <p className="application-development-content">maiores a, repudiandae doloremque <br />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat veritatis ex ipsa, fugit architecto libero nesciunt excepturi, magni accusamus asperiores, modi explicabo. Facilis </p></center>
                        </Col>
                        <Col xs={{ span: 24}} sm={{ span: 12}} lg={{ span: 6}} className="application-development-text">
                            <center><img src={executionSection3card} height='150px' alt="card Image" />
                            <p className="application-development-title">Execution</p>
                            <p className="application-development-content">maiores a, repudiandae doloremque <br />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat veritatis ex ipsa, fugit architecto libero nesciunt excepturi, magni accusamus asperiores, modi explicabo. Facilis </p></center>
                        </Col>
                        <Col xs={{ span: 24}} sm={{ span: 12}} lg={{ span: 6}} className="application-development-text">
                            <center><img src={deliverySection3card} height='150px' alt="card Image" />
                            <p className="application-development-title">Delivery</p>
                            <p className="application-development-content">maiores a, repudiandae doloremque <br />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat veritatis ex ipsa, fugit architecto libero nesciunt excepturi, magni accusamus asperiores, modi explicabo. Facilis </p></center>
                        </Col>  
                    </Row>
                    </div>
                </section>

{/* ------------------------------- Application development process section ends here----------------------- */}

{/* ========================= Core Services section starts here ================== */}
                <section className="container-fluid core-services">
                    <div className="head">
                    <h1>Our Core Servies</h1>
                    </div>
                <Row gutter={[16, 16]}>
                    <Col xs={{ span: 24}} sm={{ span: 12}} md={{ span: 12}} lg={{ span: 8}}>
                        <Card hoverable cover={<img alt="Modern Design" height='250px' src={MobileSection3card} />}>
                            <Meta title="Mobile Application" description="We develop mobile apps that help businesses for better operational efficiency and engagement. Hire certified mobile app developers from IndiaNIC who are experts for delivering excellence in Android, iOS and cross-platform app development services" />
                        </Card>
                    </Col>
                    <Col xs={{ span: 24}} sm={{ span: 12}} md={{ span: 12}} lg={{ span: 8}}>
                        <Card hoverable cover={<img alt="clean and Elegant" height='250px' src={WebSection3card} />}>
                            <Meta title="Web Application" description="We develop mobile apps that help businesses for better operational efficiency and engagement. Hire certified mobile app developers from IndiaNIC who are experts for delivering excellence in Android, iOS and cross-platform app development services" />
                        </Card>
                    </Col>
                    <Col xs={{ span: 24}} sm={{ span: 12}} md={{ span: 12}} lg={{ span: 8}}>
                        <Card hoverable cover={<img alt="Great Support" height='250px' src={UISection3card} />}>
                            <Meta title="UI/UX Design" description="We develop mobile apps that help businesses for better operational efficiency and engagement. Hire certified mobile app developers from IndiaNIC who are experts for delivering excellence in Android, iOS and cross-platform app development services" />
                        </Card>
                    </Col>
                    <Col xs={{ span: 24}} sm={{ span: 12}} md={{ span: 12}} lg={{ span: 8}}>
                        <Card hoverable cover={<img alt="Easy to customise" height='250px' src={ChatBotSection3card} />}>
                            <Meta title="ChatBot" description="We develop mobile apps that help businesses for better operational efficiency and engagement. Hire certified mobile app developers from IndiaNIC who are experts for delivering excellence in Android, iOS and cross-platform app development services" />
                        </Card>
                    </Col>
                    <Col xs={{ span: 24}} sm={{ span: 12}} md={{ span: 12}} lg={{ span: 8}}>
                        <Card hoverable cover={<img alt="Unlimited Features" height='250px' src={MLvectorSection3card} />}>
                            <Meta title="AI/ML" description="We develop mobile apps that help businesses for better operational efficiency and engagement. Hire certified mobile app developers from IndiaNIC who are experts for delivering excellence in Android, iOS and cross-platform app development services" />
                        </Card>
                    </Col>
                    <Col xs={{ span: 24}} sm={{ span: 12}} md={{ span: 12}} lg={{ span: 8}}>
                        <Card hoverable cover={<img alt="Advance Options" height='250px' src={CloudSection3card} />}>
                            <Meta title="DevOps" description="We develop mobile apps that help businesses for better operational efficiency and engagement. Hire certified mobile app developers from IndiaNIC who are experts for delivering excellence in Android, iOS and cross-platform app development services" />
                        </Card>
                    </Col>
                </Row>
                </section>



                </Content>
            </Layout>
        </Layout>
    )
}

export default AppContent;
