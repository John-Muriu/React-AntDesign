import React from 'react';
import { Carousel, Button } from 'antd';


const items = [
    {
        key: "1",
        title: 'Web and Mobile developers',
        content: 'JohnTech is a custom software development company providing a complete software design and development service. JohnTech delivers the best in class custom software solutions, elite software development teams and innovative cloud software to enterprise business across numerous industries',

    },
    {
        key: '2',
        title: 'Work better together',
        content: 'We believe new technologies are the lifeline of every business in the modern age and aim to connect businesses across all industries to innovative software, technological development, solutions and services, in a manner that’s faster, easier and better than ever before.',
    },
    {
        key: '3',
        title: 'The best way to improve business productivity',
        content: 'JohnTech developed and designed a financial risk-assessment and matching platform. Connected to various banks, lenders, and insurers, the system provides applicants with real-time quotes and recommendations.',
    }


]

function AppHero() {
    return (
        <div className="heroBlock">

            <Carousel>
                {items.map(item => {
                    return (
                        <div className="container-fluid">
                            <div className="content">
                                <h3>{item.title}</h3>
                                <p>{item.content}</p>
                                <div className="btnHolder">
                                    <Button type="primary" size="large">Learn more</Button>
                                    <Button size="large"><i class=" fas fa-desktop"></i>
                                      Watch a Demo</Button>
                                </div>
                            </div>
                        </div>
                    )
                })}

            </Carousel >
        </div >
    )
}

export default AppHero;