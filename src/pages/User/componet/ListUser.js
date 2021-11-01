

import { Card, Col, Row } from 'antd';

export function name() {
    const Data = {
        UserCount: 10,
        UserDelete :20,
        UserAction: 20,
    }
    return (<div className="site-card-wrapper">
        <Row gutter={16}>
            <Col span={8}>
                <Card title="Card title" bordered={false}>
                </Card>
            </Col>
            <Col span={8}>
                <Card title="Card title" bordered={false}>
                    Card content
                </Card>
            </Col>
            <Col span={8}>
                <Card title="Card title" bordered={false}>
                    Card content
                </Card>
            </Col>
        </Row>
    </div>)
}