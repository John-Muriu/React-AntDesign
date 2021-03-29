import React from 'react'
import { Collapse } from "antd";
import { Button } from 'antd'

const { Panel } = Collapse;


function AppFaq(key) {

    const text1 = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, magni?`;
    const text2 = `Lorem ipsum dolor sit amet consectetur.`
    const text3 = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, magni`
    // console.log(key)
    return (
        <div className="block faqBlock">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h1> Frequently Asked Questions</h1>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <Collapse defaultActiveKey={['1']} onChange={AppFaq}>
                        <Panel header="how to set our softWare" key="1">
                            <p>{text1}</p>
                        </Panel>
                        <Panel header="where can i download the softwares" key="2">
                            <p>{text2}</p>
                        </Panel>
                        <Panel header="How to access the cloud" key="3">
                            <p>{text3}</p>
                        </Panel>
                    </Collapse>
                </div>
                <div className="quickSupport">
                    <div className="titleHolder">
                        <h1> Want quick Support</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, libero?</p>
                    </div>
                    <Button type="primary" size="large"> <i className="fas fa-envelope"> Email Suport</i> </Button>
                </div>
            </div>

        </div>
    )
}

export default AppFaq
