import React, { Component } from "react";
import { Input, Button } from "antd";
import { Card, Row, Col } from "antd";
import "antd/dist/antd.css";

class GaussElimination extends Component {
  render() {
    return (
      <div className="site-card-wrapper">
        <Row gutter={24}>
          <Col span={10}>
            <Card title="Gauss Elimination Method" bordered={false}>
              <form>
                <p>Input 'N' Create Table Input :</p>
                <Input type="text" id="text1" />
                <br />
                <br />
              </form>
              <center>
                <Button type="primary">SUBMIT</Button>
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
                    <th width="10%">X</th>
                    <th width="15%">ResultX</th>
                    
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
export default GaussElimination;
