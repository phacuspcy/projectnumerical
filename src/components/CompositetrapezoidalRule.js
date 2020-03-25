import React, { Component } from "react";
import { Input, Button } from "antd";
import { Card, Row, Col } from "antd";
import "antd/dist/antd.css";

class CompositetrapezoidalRule extends Component {
  render() {
    return (
      <div className="site-card-wrapper">
        <Row gutter={24}>
          <Col span={10}>
            <Card title="Composite Trapezoidal's Rule" bordered={false}>
              <form>
                <p>Input Equal :</p>
                <Input type="text" id="text1" />
                <br />
                <br />
                <p>Input X Start :</p>
                <Input type="text" id="text2" />
                <br />
                <br />
                <p>Input X End :</p>
                <Input type="text" id="text3" />
                <br />
                <br />
                <p>Input N Split :</p>
                <Input type="text" id="text4" />
                <br />
                <br />
              </form>
              <center>
                <Button type="primary">
                  SUBMIT
                </Button>
                &nbsp;&nbsp;
                <Button type="primary">API</Button>
                <br />
                <br />
              </center>
            </Card>
          </Col>  
        </Row>
        <br />
        <br />
        <Row gutter={24}>
          <Col span={24}>
            <Card title="Output" bordered={false}>
            <table
                id="output"
                style={{ padding: "0px 8px" }}
                className="table table-hover"
              >
                <tbody>
                  <tr style={{ textAlign: "center" }}>
                    <th width="10%">result</th>
                    <th width="15%">Real</th>
                    <th width="20%">Error</th>
                  </tr>   
                </tbody>
              </table>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
export default CompositetrapezoidalRule;
