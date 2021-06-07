import React from 'react'
import {Layout} from 'antd'
import './Footer.css'
import Logo from '../../assests/svg/vft-right-logo2.png'
import {
    TwitterOutlined,
    FacebookOutlined,
    YoutubeOutlined,
    LinkedinOutlined,
    InstagramOutlined
} from '@ant-design/icons'

const {Footer} = Layout

const AppFooter = () => {
    return (
        <Footer className='footer-area' >
            <div className="row">
                <div className="column">
                    <div className="Footer-logo">
                        <img src={Logo} alt="company-logo"/>
                    </div> <br /><br /><br />
                    <div className="details">
                        <p id='email'>vftechnology@gmail.com</p>
                        <p id='phone'>+91 8238794644</p>
                    </div>
                    <div className="social-link">
                        <TwitterOutlined id='socialbadge'/>
                        <YoutubeOutlined id='socialbadge'/>
                        <FacebookOutlined id='socialbadge'/>
                        <InstagramOutlined id='socialbadge'/>
                    </div>
                </div>
                <div className="column">
                    <p id='heading'>Company</p>
                    <p id='list' >AboutUs</p>
                    <p id='list' >Blogs</p>
                    <p id='list' >Career</p>
                    <p id='list' >FAQs</p>
                    <p id='list' >Policies</p>
                    <p id='list' >Sitemap</p>
                </div>
                <div className="column">
                <p id='heading'>Services</p>
                    <p id='list' >Android App Development</p>
                    <p id='list' >AWS Development</p>
                    <p id='list' >Google Cloud</p>
                    <p id='list' >Hybrid App Development</p>
                    <p id='list' >iOS App Development</p>
                    <p id='list' >Laravel App Development</p>
                    <p id='list' >MongoDB Development</p>
                    <p id='list' >MySql App Development</p>
                    <p id='list' >NodeJS App Development</p>
                    <p id='list' >React Native</p>
                    <p id='list' >ReactJS Development</p>
                </div>
                {/* <div className="column">Hire Developer</div> */}
            </div>
            <div className="bottomBar">
                <p id='bottomBar' >Copyright &copy; 2020-{new Date().getFullYear()} Vishnu FinTech. All Rights Reserved.</p>
            </div>
        </Footer>
    )
}

export default AppFooter
