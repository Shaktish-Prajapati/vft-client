import './Landing.css'
import React,{useState} from 'react'
import {Layout} from 'antd'
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



const {Content,Header,Sider} = Layout

const AppContent = () => {
    
    return (
        <Layout style={{ minHeight: '100vh' }} >
            {/* <Navbar /> */}
            <Layout className="site-layout" >
                {/* Header section */}
                {/* <Header >
                    <h2 style={{color:'whitesmoke'}}>Welcome</h2>
                </Header> */}
                
                <Content className="content-area">
                     {/* <div className="site-layout-background" > */}
                     <div className="section1">
                            <div  className="section1-partition-image" >
                                <img className="section1Image" src={backImageSection1} alt="" />
                            </div>
                            <div className="section1-partition-text">
                                <div className="section1-text-heading">
                                    <p>We have best to build your need</p>
                                </div>
                                <div className="section1-text-content">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat veritatis ex ipsa, fugit architecto libero nesciunt excepturi, magni accusamus asperiores, modi explicabo. Facilis consequatur ullam maiores a, repudiandae doloremque </p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat veritatis ex ipsa, fugit architecto libero nesciunt excepturi, magni accusamus asperiores, modi explicabo. Facilis consequatur ullam maiores a, repudiandae doloremque </p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat veritatis ex ipsa, fugit architecto libero nesciunt excepturi, magni accusamus asperiores, modi explicabo. Facilis consequatur ullam maiores a, repudiandae doloremque </p>
                                </div>
                            <button className='clickHere-button'>Click Here</button>
                            </div>
                            
                                
                            
                        </div>
                        <div className="section2" style={{padding:'10px'}}>
                            <div className="section2-image" >
                                <img style={{height:'100%',width:'100%', radius:'30%', borderRadius:'50px'}}  src={backImageSection2} alt="Hire Developers" />
                            </div>
                            <div className="section2-textContent" style={{padding:'20px' }}>
                                {/* <div> */}

                                <h4 className='section2-headingText' style={{paddingLeft:'50px'}} >Hire Developers</h4>
                                <p style={{color:'#00000'}}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi alias, distinctio explicabo assumenda aliquam est odit suscipit odio nesciunt earum similique incidunt nostrum, dicta, labore deserunt reiciendis nam totam laborum.
                                </p>
                                <p style={{color:'#00000'}}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi alias, distinctio explicabo assumenda aliquam est odit suscipit odio nesciunt earum similique incidunt nostrum, dicta, labore deserunt reiciendis nam totam laborum.
                                </p>
                                <p style={{color:'#00000'}}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi alias, distinctio explicabo assumenda aliquam est odit suscipit odio nesciunt earum similique incidunt nostrum, dicta, labore deserunt reiciendis nam totam laborum.
                                </p>
                                <button className='clickHere-button'>Contact Us</button>
                                {/* </div> */}
                            </div>
                        </div>

                        <div className='section3'>
                            <div className="section3-heading">
                                <p>We Simplify Application Development Process</p>
                            </div>
                            <div className='section3-cards'>
                                <div className="section3-innerCard">
                                    <div className="section3-innerCard-image">
                                        <img className="card-image-section3" src={discoverSection3card} alt="card Image" />
                                    </div>
                                    <p id='heading'>Challenges</p>
                                    <p id= 'content'>Content</p>
                                </div>
                                <div className="section3-innerCard">
                                <div className="section3-innerCard-image">
                                        <img className="card-image-section3" src={solutionSection3card} alt="card Image" />
                                </div>
                                    <p id='heading'>Solution</p>
                                    <p id= 'content'>Content</p>
                                </div>
                                <div className="section3-innerCard">
                                <div className="section3-innerCard-image">
                                        <img className="card-image-section3" src={executionSection3card} alt="card Image" />
                                    </div>
                                    <p id='heading'>Execution</p>
                                    <p id= 'content'>Content</p>
                                </div>
                                <div className="section3-innerCard">
                                <div className="section3-innerCard-image">
                                        <img className="card-image-section3" src={deliverySection3card} alt="card Image" />
                                    </div>
                                    <p id='heading'>Deliver</p>
                                    <p id= 'content'>Content</p>
                                </div>
                            </div>
                            <div className="section3-heading">
                                <p>Our Core Services</p>
                            </div>
                                <div className="wrapper">
                                <div className="section3-cards-long">
                                <div className="section3-innerCard-long">
                                    <div className="section3-innerCard-image-long">
                                            <img className="card-image-section3" src={MobileSection3card} alt="card Image" />
                                    </div>
                                        <p id='heading'>Mobile Application</p>
                                        <p id= 'content'>We develop mobile apps that help businesses for better operational efficiency and engagement. Hire certified mobile app developers from IndiaNIC who are experts for delivering excellence in Android, iOS and cross-platform app development services</p>
                                </div>
                            </div>
                            <div className="section3-cards-long">
                                <div className="section3-innerCard-long">
                                    <div className="section3-innerCard-image-long">
                                            <img className="card-image-section3" src={WebSection3card} alt="card Image" />
                                    </div>
                                        <p id='heading'>Web Application</p>
                                        <p id= 'content'>We are website design and web development company in India delivering the best web development services to craft bespoke websites, web applications, web-tools, etc. to global businesses and startups with 100% project delivery</p>
                                </div>
                            </div>
                            <div className="section3-cards-long">
                                <div className="section3-innerCard-long">
                                    <div className="section3-innerCard-image-long">
                                            <img className="card-image-section3" src={UISection3card} alt="card Image" />
                                    </div>
                                        <p id='heading'>UI/UX Design</p>
                                        <p id= 'content'>Simple design is a complex process. We simplify it by focusing on Challenges and Solutions followed by building functional user interfaces that keep the audience at the center</p>
                                </div>
                            </div>
                            <div className="section3-cards-long">
                                <div className="section3-innerCard-long">
                                    <div className="section3-innerCard-image-long">
                                            <img className="card-image-section3" src={ChatBotSection3card} alt="card Image" />
                                    </div>
                                        <p id='heading'>Chatbot</p>
                                        <p id= 'content'>We are humans and we propose a chatbot development strategy that will be a perfect fit for your business goals and end user experience. Let the bots do what they are made for! We are experts to build intelligent bots to drive a natural conversational experience to your users and bots that simplify processes.</p>
                                </div>
                            </div>
                            <div className="section3-cards-long">
                                <div className="section3-innerCard-long">
                                    <div className="section3-innerCard-image-long">
                                            <img className="card-image-section3" src={MLvectorSection3card} alt="card Image" />
                                    </div>
                                        <p id='heading'>AI/ML</p>
                                        <p id= 'content'>We are an AI application development company helping businesses to add intelligence to their ecosystems by building AI-driven applications and integration services. We infuse AI elements to existing business processes to boost productivity.</p>
                                </div>
                            </div>
                            <div className="section3-cards-long">
                                <div className="section3-innerCard-long">
                                    <div className="section3-innerCard-image-long">
                                            <img className="card-image-section3" src={CloudSection3card} alt="card Image" />
                                    </div>
                                        <p id='heading'>DevOps</p>
                                        <p id= 'content'>Empower continuous delivery with balanced orchestration and piping development branches into the production workflow.</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        
                    {/* </div> */}

                </Content>
            </Layout>
        </Layout>
    )
}

export default AppContent;
