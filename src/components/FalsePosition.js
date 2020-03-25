import React, { Component } from "react";
import { Input, Button } from "antd";
import { Card, Row, Col } from "antd";
import "antd/dist/antd.css";
import { create, all } from "mathjs";

const math = create(all);
class FalsePosition extends Component {
  constructor(props) {
    super(props);
    this.FPos = this.FPos.bind(this);
    this.findxm = this.findxm.bind(this);
    this.funcal = this.funcal.bind(this);
    this.cleantable = this.cleantable.bind(this);
  }
  FPos = () => {
    var table = document.getElementById("output");
    var xl = document.getElementById("text2").value;
    var xr = document.getElementById("text3").value;
    var x_old = xr;
    var xm = 0;
    var n = 0;
    var check = parseFloat(0.0);
    if (
      document.getElementById("output").getElementsByTagName("tr").length > 0
    ) {
      this.cleantable();
    }
    do {
      if (xl != xr) {
        xm = this.findxm(xl, xr);
        check = Math.abs(xm - x_old).toFixed(8);
      } else {
        console.log("do");
        check = 0;
      }

      console.log(check);
      n++;
      console.log(n);
      // Create an empty <tr> element and add it to the 1st position of the table:
      var row = table.insertRow(n);

      // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);

      // Add some text to the new cells:
      cell1.innerHTML = n;
      cell1.setAttribute("id", "cell");
      cell2.innerHTML = xl;
      cell2.setAttribute("id", "cell");
      cell3.innerHTML = xr;
      cell3.setAttribute("id", "cell");
      cell4.innerHTML = xm;
      cell4.setAttribute("id", "cell");
      cell5.innerHTML = check;
      cell5.setAttribute("id", "cell");

      if (this.funcal(xl) < this.funcal(xr)) {
        if (this.funcal(xm) > 0) {
          xr = xm;
        } else if (this.funcal(xm) < 0) {
          xl = xm;
        } else if (this.funcal(xm) == 0) {
          xr = xm;
          xl = xm;
        }
      } else if (this.funcal(xl) > this.funcal(xr)) {
        if (this.funcal(xm) < 0) {
          xr = xm;
        } else if (this.funcal(xm) > 0) {
          xl = xm;
        } else if (this.funcal(xm) == 0) {
          xr = xm;
          xl = xm;
        }
      }
      if (parseFloat(xl) > parseFloat(xr)) {
        var temp = xr;
        xr = xl;
        xl = temp;
      }
      x_old = xm;
    } while (check > 0.00001 && n < 100);
  };
  //คำนวนหา Xm
  findxm = (xl, xr) => {
    return (
      (xl * this.funcal(xr) - xr * this.funcal(xl)) /
      (this.funcal(xr) - this.funcal(xl))
    );
  };

  // แก้สมาการ X
  funcal = X => {
    var expression = document.getElementById("text1").value;
    expression = math.compile(expression);
    let scope = { x: parseFloat(X) };
    return expression.eval(scope);
  };

  //ลบ table
  cleantable = () => {
    var count = document.getElementById("output").getElementsByTagName("tr")
      .length;
    for (var j = 1; j < count; j++) {
      document.getElementById("output").deleteRow(1);
    }
  };

  render() {
    return (
      <div className="site-card-wrapper">
        <Row gutter={24}>
          <Col span={10}>
            <Card title="FalsePosition" bordered={false}>
              <form>
                <p>Input Equal</p>
                <Input type="text" placeholder="EX: 2x+1" id="text1" />
                <br />
                <br />
                <p>Number Start (XL)</p>
                <Input type="text" placeholder="3" id="text2" />
                <br />
                <br />
                <p>Numer End (XR)</p>
                <Input type="text" placeholder="5" id="text3" />
                <br />
                <br />
              </form>
              <center>
                <Button type="primary" onClick={this.FPos}>
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
                    <th width="20%">Iteration</th>
                    <th width="25%">
                      X<sub>L</sub>
                    </th>
                    <th width="25%">
                      X<sub>R</sub>
                    </th>
                    <th width="30%">
                      X<sub>M</sub>
                    </th>
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
    );
  }
}
export default FalsePosition;
