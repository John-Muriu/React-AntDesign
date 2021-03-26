import React from 'react'
import { Modal, Button } from 'antd'
import { useState } from 'react'

const AppWork = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <div className="block worksBlock">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2> How It Works</h2>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
            <div className="contentHolder">
                <Button onClick={showModal}>
                    <i className="fas fa-play"></i>
                </Button>

            </div>
            <Modal title="HowItWorks" visible={isModalVisible} onCancel={handleCancel} footer={null}>
                <iframe width="100%" height="405" src="https://www.youtube.com/embed/rwjmyZUA2O8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </Modal>
        </div>
    );
};

export default AppWork


