import React from 'react'
import { List, Card } from 'antd';
const data = [
    {
        title: 'Premium',
        content: [
            {
                price: '$99.00',
                space: 'unlimited space',
                user: '19 users',
                support: '24/7',
                backup: 'safe,reliable backup',
                access: 'access from anywhere'
            }
        ]
    },
    {
        title: 'Gold',
        content: [
            {
                price: '$60.00',
                space: 'limited space',
                user: '10 users',
                support: '24/7',
                backup: 'safe,reliable backup',
                access: 'access from anywhere'
            }
        ]
    },
    {
        title: 'Bronze',
        content: [
            {
                price: '$10.00',
                space: 'limited space',
                user: '2 users',
                support: '24/7',
                backup: 'safe,reliable backup',
                access: 'limited locations'
            }
        ]
    },

];
function AppPricing() {

    return (
        <div>
            <List
                grid={{
                    gutter: 16,
                    xs: 1,
                    sm: 2,
                    md: 4,
                    lg: 4,
                    xl: 6,
                    xxl: 3,
                }}
                dataSource={data}
                renderItem={item => (
                    <List.Item>
                        <Card title={item.title}>
                            <p>{item.content}</p>
                        </Card>
                    </List.Item>
                )}
            />,


        </div>
    )
}

export default AppPricing
