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
        <div className="block pricingBlock bgGray">
            <div className="container-fluid">
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
                                <p>{item.content[0].price}</p>
                                <p>{item.content[0].space}</p>
                                <p>{item.content[0].user}</p>
                                <p>{item.content[0].support}</p>
                                <p>{item.content[0].backup}</p>
                                <p>{item.content[0].access}</p>
                            </Card>
                        </List.Item>
                    )}
                />,

</div>
        </div>
    )
}

export default AppPricing
