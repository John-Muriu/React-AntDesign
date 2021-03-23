import React from 'react'
import { Row, Col } from 'antd';



const items = [{
    key: '1',
    title: 'Mobile developers',
    content: 'development company providing a complete software design and development service. JohnT',
},
{
    key: '2',
    title: 'software development company ',
    content: 'class custom software solutions, elite software development teams and innovative cloud software to enterprise business across numerous industries',
},
{
    key: '3',
    title: ' JohnTech delivers the be',
    content: 'enterprise business across numerous industries',
}


]
function AppAbout() {
    return (
        <div className="block aboutBlock">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>About us  </h2>
                    <p> development is keeeeeeeey</p>
                </div>
                <div className="contentHolder">
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, magnam. Corrupti voluptatibus nesciunt eos consectetur. Eveniet beatae laudantium dolores animi aspernatur cum, ab blanditiis. Nemo, quis exercitationem. Maxime, ut ducimus.
                    </p>
                </div>
                <Row gutter={[16, 16]}>
                    <Col span={8}> column 1</Col>
                    <Col span={8} >column  </Col>
                    <Col span={8}> column </Col>

                </Row>
            </div>
        </div>
    )
}

export default AppAbout;