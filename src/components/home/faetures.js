import React from 'react'
import { Row, Col, Card, } from 'antd';

const { Meta } = Card;

function AppFeature() {
    return (
        <div className="block featureBlock bgGray  ">
            <div className='container-fluid'>
                <Row gutter={[16, 16]}>
                    <div className="site-card-wrapper">
                        <Row gutter={16}>
                            <Col span={8}>
                                <Card title="project1" bordered={false}>
                                    <Card
                                        hoverable
                                        style={{ width: 240 }}
                                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                    >
                                        <Meta title="Europe Street beat" description="www.instagram.com" />
                                    </Card>
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card title="project2" bordered={false}>
                                    <Card
                                        hoverable
                                        style={{ width: 240 }}
                                        cover={<Space size={12}>
                                            <Image
                                                width={200}
                                                src={`https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?${random}`}
                                                placeholder={
                                                    <Image
                                                        preview={false}
                                                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
                                                        width={200} />}
                                            />
                                            <Meta title="Europe Street beat" description="www.instagram.com" />
                                        </Space>
                                    </Card>}
                                 </Card>
                            </Col>
                            <Col span={8}>
                                <Card title="project 3" bordered={false}>
                                    <Card
                                        hoverable
                                        style={{ width: 240 }}
                                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                    >
                                        <Meta title="Europe Street beat" description="www.instagram.com" />
                                    </Card>,
        </Card>
                            </Col>
                        </Row>
                    </div>,
                </Row>
            </div>
        </div>
    )
}

export default AppFeature
