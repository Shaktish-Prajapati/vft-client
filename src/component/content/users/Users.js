import React from 'react'
import {Layout} from 'antd'
const {Content} = Layout

const AppContent = () => {
    return (
        <Content style={{ margin: '24px 16px 0' }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel distinctio voluptatibus nemo aut. At veritatis aperiam facilis, unde maxime exercitationem, vitae saepe sapiente ipsam cupiditate ea. Repellendus numquam blanditiis animi!</p>
            </div>
        </Content>
    )
}

export default AppContent
