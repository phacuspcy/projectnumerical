import React, { Component } from "react";
import { Input, Button } from "antd";
import { Card, Row, Col } from "antd";
import "antd/dist/antd.css";
export default class EulerMethod extends Component {
  render() {
    return (
      <div className="site-card-wrapper">
        <Row gutter={24}>
          <Col span={10}>
            <Card title="Euler Method" bordered={false}>
              <form>
                <p>Input Equal :</p>
                <Input type="text" />
                <br />
                <br />
                <p>Start X :</p>
                <Input type="text" />
                <br />
                <br />
                <p>End X :</p>
                <Input type="text" />
                <br />
                <br />
                <p>Y(0) :</p>
                <Input type="text" />
                <br />
                <br />
                <p>Input H :</p>
                <Input type="text" />
                <br />
                <br />
                <p>Input Real Equal :</p>
                <Input type="text" />
                <br />
                <br />
              </form>
              <center>
                <Button type="primary" onClick={this.cal}>
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
                    <th width="20%">Current X</th>
                    <th width="20%">Y</th>
                    <th width="20%">Real Y</th>
                    <th width="20%">Error</th>
                  </tr>
                  <tr className="list-data">
                    <td
                      width="20%"
                      id="Iteration"
                      style={{ textAlign: "center" }}
                    />
                    <td width="25%" id="xl1" />
                    <td width="25%" id="xr1" />
                    <td width="30%" id="x" />
                    <td width="30%" id="error" />
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
