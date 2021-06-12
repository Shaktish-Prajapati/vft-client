import React from 'react'
import { Layout, Row, Col } from 'antd'
import './Footer.css'
import Logo from '../../assests/svg/vft-right-logo2.png'
import {
    TwitterOutlined,
    FacebookOutlined,
    YoutubeOutlined,
    LinkedinOutlined,
    InstagramOutlined,
    MailOutlined,
    PhoneOutlined
} from '@ant-design/icons'

const { Footer } = Layout

const AppFooter = () => {
    return (
        <Footer className='footer-area' >
            <Row>
                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 8 }}>
                    <div className="footer-logo">
                        <img src={Logo} alt="company-logo" width='100px' />
                    </div>
                    <div className="details">
                        <h3>Contacts us :</h3>
                        <MailOutlined /><a href="mailto:vftechnology@gmail.com"> vftechnology@gmail.com</a><br />
                        <PhoneOutlined /><a href="tel:+918238794644"> +91 8238794644</a>
                    </div>
                    <div className="social-link">
                        <TwitterOutlined id='socialbadge' />
                        <YoutubeOutlined id='socialbadge' />
                        <FacebookOutlined id='socialbadge' />
                        <InstagramOutlined id='socialbadge' />
                    </div>
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 8 }}>
                    <div className="column">
                        <h2>Company</h2>
                        <ul>
                            <li> <a href="#" id='list' >AboutUs</a> </li>
                            <li> <a href="#" id='list' >Blogs</a> </li>
                            <li> <a href="#" id='list' >Career</a> </li>
                            <li> <a href="#" id='list' >FAQs</a> </li>
                            <li> <a href="#" id='list' >Policies</a> </li>
                            <li> <a href="#" id='list' >Sitemap</a> </li>
                        </ul>
                    </div>
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 8 }}>
                    <h2>Services</h2>
                    <div className="column">
                        <Row>
                            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>
                                <ul>
                                    <li> <a href="#" id='list' >Android App Development</a> </li>
                                    <li> <a href="#" id='list' >AWS Development</a> </li>
                                    <li> <a href="#" id='list' >Google Cloud</a> </li>
                                    <li> <a href="#" id='list' >Hybrid App Development</a> </li>
                                    <li> <a href="#" id='list' >iOS App Development</a> </li>
                                    <li> <a href="#" id='list' >Laravel App Development</a> </li>
                                </ul>
                            </Col>
                            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>
                                <ul>
                                    <li> <a href="#" id='list' >MongoDB Development</a> </li>
                                    <li> <a href="#" id='list' >MySql App Development</a> </li>
                                    <li> <a href="#" id='list' >NodeJS App Development</a> </li>
                                    <li> <a href="#" id='list' >React Native</a> </li>
                                    <li> <a href="#" id='list' >ReactJS Development</a> </li>
                                </ul>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
            <div className="bottomBar">
                <p id='bottomBar' >Copyright &copy; 2020-{new Date().getFullYear()} Vishnu FinTech. All Rights Reserved.</p>
            </div>
        </Footer>
    )
}

export default AppFooter
