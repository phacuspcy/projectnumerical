import React, { Component } from 'react'
import { Input, Button } from "antd";
import { Card, Row, Col } from "antd";
import "antd/dist/antd.css";
export default class SimpsonRule extends Component {
    render() {
        return (
            <div className="site-card-wrapper">
            <Row gutter={24}>
              <Col span={10}>
                <Card title="Simpson's Rule" bordered={false}>
                  <form>
                    <p>Input Equal :</p>
                    <Input type="text" />
                    <br />
                    <br />
                    <p>Input X Start :</p>
                    <Input type="text" />
                    <br />
                    <br />
                    <p>Input X End :</p>
                    <Input type="text" />
                    <br />
                    <br />
                    <p>Input N Split :</p>
                    <Input type="text" />
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
                        <th width="20%">Result</th>
                        <th width="30%">Real</th>
                        <th width="30%">Error</th>
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
        )
    }
}
