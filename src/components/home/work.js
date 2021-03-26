import React from 'react'
import { Modal, Button } from 'antd'
import useState from 'react'

const AppWork = () => {
    const [showModal, isModalVisible, handleOk, handleCancel] = useState(false)





    return (
        <div className="block worksBlock ">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2> How It Works</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                </div>
                <Button type="primary" onClick={showModal}>
                    Open Modal
      </Button>
                <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                    <p>Some contents...</p>
                    <iframe title="MyLife" width="100%" height="350" src="https://www.youtube.com/watch?v=PEDXYcQTwd0" frameborder="0"></iframe>
                </Modal>

            </div>
        </div>
    );
}


export default AppWork


