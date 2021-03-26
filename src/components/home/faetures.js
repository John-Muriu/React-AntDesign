import React from 'react'
import { Row, Col, Card, } from 'antd';

import image1 from '../../assets/images/modern-design.jpg'
import image2 from '../../assets/images/clean-design.jpg'
import image3 from '../../assets/images/great-support.jpg'
import image4 from '../../assets/images/easy-customise.jpg'
import image5 from '../../assets/images/unlimited-features.jpg'
import image6 from '../../assets/images/advanced-option.jpg'


const { Meta } = Card;

function AppFeature() {
    return (
        <div className="block featureBlock bgGray  ">
            <div className='container-fluid'>
                <div className="titleHolder">
                    <h1> Key Features and Benefits</h1>
                    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                </div>
                <Row gutter={[16, 16]}>
                    <div className="site-card-wrapper">
                        <Row gutter={16}>
                            <Col span={8}>
                                <Card
                                    hoverable
                                    cover={<img alt="Modern Design" src={image1} />}
                                >
                                    <Meta title="Modern Design" />
                                </Card>,

                            </Col>
                            <Col span={8}>
                                <Card
                                    hoverable
                                    cover={<img alt="Clean Design" src={image2} />}
                                >
                                    <Meta title="Clean Design" />
                                </Card>,

                            </Col>
                            <Col span={8}>
                                <Card
                                    hoverable
                                    cover={<img alt="Great Support" src={image3} />}
                                >
                                    <Meta title="Great Support" />
                                </Card>,

                            </Col>

                            <Col span={8}>
                                <Card
                                    hoverable
                                    cover={<img alt="Easy To Customize" src={image4} />}
                                >
                                    <Meta title="Easy To Customize" />
                                </Card>,

                            </Col>
                            <Col span={8}>
                                <Card
                                    hoverable
                                    cover={<img alt="Unlimited Features" src={image5} />}
                                >
                                    <Meta title="Unlimited Features" />
                                </Card>,

                            </Col>
                            <Col span={8}>
                                <Card
                                    hoverable
                                    cover={<img alt="Advanced Opttion" src={image6} />}
                                >
                                    <Meta title="Advanced Optotion" />
                                </Card>,

                            </Col>
                        </Row>
                    </div>
                </Row>
            </div>
        </div >
    )
}

export default AppFeature
