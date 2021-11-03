import React from "react";
import Card from "../components/common/card/Card";
import Col from "../components/common/grid/Col.styled";
import Row from "../components/common/grid/Row.styled";

export default function Home() {
    return (
        <div>
            <Row>
                <Col span={8}>
                    <Card title={"title"}>
                        <h3>Section Header</h3>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}
