import React, { Component } from "react";
import { Input, Button } from "antd";
import { Card, Row, Col } from "antd";
import "antd/dist/antd.css";
import { create, all } from "mathjs";

const math = create(all);
class NewtonRaphson extends Component {
  constructor(props) {
    super(props);
    this.NRaphson = this.NRaphson.bind(this);
    this.funcal = this.funcal.bind(this);
    this.cleantable = this.cleantable.bind(this);
  }
  NRaphson = () => {
    //math.derivative('x^2', 'x')
    var table = document.getElementById("output");
    var expression = document.getElementById("text1").value;
    var expression2 = math.derivative(expression, 'x');
    //var expression3 = "("+expression+")+"+"(x-"+x+")*("+math.derivative(expression, 'x')+")"; //หา derivative
    var x = 0;
    var x_old = document.getElementById("text2").value;
    var n = 0;
    var check = parseFloat(0.00000000);
    if(document.getElementById("output").getElementsByTagName("tr").length>0){
            this.cleantable();
    }
    console.log(expression2.toString());
    do{
            n++;

            x = x_old-(this.funcal(x_old,expression)/this.funcal(x_old,expression2.toString()));
            check = Math.abs(x-x_old).toFixed(8);
            console.log(check);
            console.log(n);
            // Create an empty <tr> element and add it to the 1st position of the table:
            var row = table.insertRow(n);

            // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);

            // Add some text to the new cells:

            cell1.setAttribute("id","cell");
            cell2.setAttribute("id","cell");
            cell3.setAttribute("id","cell");

            cell1.innerHTML = n;
            cell2.innerHTML = x;
            cell3.innerHTML = check;

            x_old = x;
    }while(check>0.00001 && n<100)
  };

  // แก้สมาการ X
  funcal = (X, expression) => {
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
            <Card title="NewtonRaphson" bordered={false}>
              <form>
                <p>Input Equal</p>
                <Input type="text" placeholder="EX: 1/2" id="text1" />
                <br />
                <br />
                <p>Initial Number X :</p>
                <Input type="text" id="text2" />
                <br />
                <br />
              </form>
              <center>
                <Button type="primary" onClick={this.NRaphson}>
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
                    <th width="25%">X</th>
                    <th width="30%">
                      |x<sub>i</sub>-x<sub>i-1</sub>|
                    </th>
                  </tr>
                  <tr className="list-data">
                    <td
                      width="20%"
                      id="Iteration"
                      style={{ textAlign: "center" }}
                    />
                    <td width="25%" id="x" />
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
export default NewtonRaphson;
