import React, { Component } from "react";
import "./App.css";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Layout, Menu} from "antd";
import Home from "./components/Home.js"
import Bisection from "./components/Bisection.js"
import BwDividedDiff from "./components/BwDividedDiff.js";
import CentralDividedDiff from "./components/CentralDividedDiff.js";
import CholeskyDecomposition from "./components/CholeskyDecomposition.js";
import CompositeSimpsonRule from "./components/CompositeSimpsonRule.js";
import CompositetrapezoidalRule from "./components/CompositetrapezoidalRule.js";
import ConjugateGradient from "./components/ConjugateGradient.js";
import CramerRule from "./components/CramerRule.js";
import EulerMethod from "./components/EulerMethod.js";
import FalsePosition from "./components/FalsePosition.js";
import FwDividedDiff from "./components/FwDividedDiff.js";
import GaussElimination from "./components/GaussElimination.js";
import GaussJordan from "./components/GaussJordan.js";
import GuassSeidelIteration from "./components/GaussSeidelIteration.js";
import HeunMethod from "./components/HeunMethod.js";
import JacobiIteration from "./components/JacobiIreration.js";
import LagrangePolynomials from "./components/LagrangePolynomials.js";
import LUDecomposition from "./components/LUDecomposition.js";
import MatrixInversion from "./components/MatrixInversion.js";
import ModifiedEulerMethod from "./components/ModifiedEulerMathod.js";
import MultipleLinearRegression from "./components/MultipleLinearRegression.js";
import NewtonDividedDifferences from "./components/NewtonDividedDifferences.js";
import NewtonRaphson from "./components/NewtonRaphson.js";
import OnePointIteration from "./components/OnePointIteration.js";
import PolynomialRegression from "./components/PolynomialRegression.js";
import Secant from "./components/Secant.js";
import SimpsonRule from "./components/SimpsonRule.js";
import SplineInterpolation from "./components/SplineInterpolation.js";
import TrapezoidalRule from "./components/TrapezoidalRule.js";


const { Header, Content,Sider } = Layout;
const SubMenu = Menu.SubMenu;

class App extends Component {
  state = {
    collapsed: false
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Router>
        <Layout style={{ minHeight: "100vh" }}>
          <Sider
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
          >
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
              <Menu.Item key="1">  
                <Link to="/Home"><span>Home</span></Link>
              </Menu.Item>
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <span>RootOfEquation</span>
                  </span>
                }
              >
                <Menu.Item key="2"><Link to="/Bisection">Bisection</Link></Menu.Item>              
                <Menu.Item key="3"><Link to="/FalsePosition">FalsePosition</Link></Menu.Item>               
                <Menu.Item key="4"><Link to="/NewtonRaphson">NewtonRaphson</Link></Menu.Item>
                <Menu.Item key="5"><Link to="/OnePointIteration">One-Point-Iteration</Link></Menu.Item>            
                <Menu.Item key="6"><Link to="/Secant">Secant</Link></Menu.Item>
                
              </SubMenu>

              <SubMenu
                key="sub2"
                title={
                  <span>
                    <span>Linear Algebra</span>
                  </span>
                }
              >
                <Menu.Item key="7"><Link to="/CramerRule">Cramer's Rule</Link></Menu.Item>
                <Menu.Item key="8"><Link to="/GaussElimination">Gauss Elimination Method</Link></Menu.Item> 
                <Menu.Item key="9"><Link to="/GaussJordan">Gauss-Jordan Method</Link></Menu.Item>
                <Menu.Item key="10"><Link to="/MatrixInversion">Matrix Inversion Method</Link></Menu.Item> 
                <Menu.Item key="11"><Link to="/LUDecomposition">LU Decomposition Method</Link></Menu.Item>
                <Menu.Item key="12"><Link to="/CholeskyDecomposition">Cholesky Decomposition Method</Link></Menu.Item>        
                <Menu.Item key="13"><Link to="/JacobiIteration">Jacobi Iteration Method</Link></Menu.Item>              
                <Menu.Item key="14"><Link to="/GuassSeidelIteration">Guass-Seidel Iteration Method</Link></Menu.Item>      
                <Menu.Item key="15"><Link to="/ConjugateGradient">Conjugate Gradient Method</Link></Menu.Item>
                
              </SubMenu>

              <SubMenu
                key="sub3"
                title={
                  <span>
                    <span>Interpolation and Extrapolation</span>
                  </span>
                }
              >
                <Menu.Item key="16"><Link to="/NewtonDividedDifferences">Newton's Divided-Differences</Link></Menu.Item>       
                <Menu.Item key="17"><Link to="/LagrangePolynomials">Lagrange Polynomials</Link></Menu.Item>    
                <Menu.Item key="18"><Link to="/SplineInterpolation">Spline Interpolation</Link></Menu.Item>
                
              </SubMenu>

              <SubMenu
                key="sub4"
                title={
                  <span>
                    <span>Regression</span>
                  </span>
                }
              >
                <Menu.Item key="19"><Link to="/PolynomialRegression">Polynomial Regression</Link></Menu.Item>    
                <Menu.Item key="20"><Link to="/MultipleLinearRegression">Multiple Linear Regression</Link></Menu.Item>
                
              </SubMenu>

              <SubMenu
                key="sub5"
                title={
                  <span>
                    <span>Integration Techniques</span>
                  </span>
                }
              >
                <Menu.Item key="21"><Link to="/TrapezoidalRule">Trapezoidal's Rule</Link></Menu.Item>                
                <Menu.Item key="22"><Link to="/CompositetrapezoidalRule">Composite Trapezoidal's Rule</Link></Menu.Item>            
                <Menu.Item key="23"><Link to="/SimpsonRule">Simpson's Rule</Link></Menu.Item>
                <Menu.Item key="24"><Link to="/CompositeSimpsonRule">CompositeSimpson's Rule</Link></Menu.Item>
                
              </SubMenu>

              <SubMenu
                key="sub6"
                title={
                  <span>
                    <span>Numerical Differentiation</span>
                  </span>
                }
              >
                <Menu.Item key="25"><Link to="/FwDividedDiff">Forward Divided-Differences</Link></Menu.Item>           
                <Menu.Item key="26"><Link to="/BwDividedDiff">Backward Divided-Differences</Link></Menu.Item>                
                <Menu.Item key="27"><Link to="/CentralDividedDiff">Central Divided-Differences</Link></Menu.Item>
                
              </SubMenu>

              <SubMenu
                key="sub7"
                title={
                  <span>
                    <span>ODE</span>
                  </span>
                }
              >
                <Menu.Item key="28"><Link to="/EulerMethod">Euler Method</Link></Menu.Item>                
                <Menu.Item key="29"><Link to="/HeunMethod">Heun Method</Link></Menu.Item>               
                <Menu.Item key="30"><Link to="/ModifiedEulerMethod">Modified Euler Method</Link></Menu.Item>
                
              </SubMenu>
            </Menu>
          </Sider>   
          <Layout>
          <Header style={{ background: '#003', padding: 5}}>        
              <center><h4 style={{ color: '#fff'}}>NUMERICAL</h4></center>
          </Header>
            <Content style={{
                margin: "24px 16px",
                padding: 30,
                background:"#4682B4"  
              }}>
              <Route  exact path="/Home" component={Home} />
              <Route  exact path="/Bisection" component={Bisection} />
              <Route  exact path="/FalsePosition" component={FalsePosition} />
              <Route  exact path="/NewtonRaphson" component={NewtonRaphson} />
              <Route  exact path="/OnePointIteration" component={OnePointIteration} />
              <Route  exact path="/Secant" component={Secant} />
              <Route  exact path="/CramerRule" component={CramerRule} />
              <Route  exact path="/GaussElimination" component={GaussElimination} />
              <Route  exact path="/GaussJordan" component={GaussJordan} />
              <Route  exact path="/MatrixInversion" component={MatrixInversion} />
              <Route  exact path="/LUDecomposition" component={LUDecomposition} />
              <Route  exact path="/CholeskyDecomposition" component={CholeskyDecomposition}/>
              <Route  exact path="/JacobiIteration" component={JacobiIteration} />
              <Route  exact path="/GuassSeidelIteration" component={GuassSeidelIteration}/>
              <Route  exact path="/ConjugateGradient" component={ConjugateGradient} />
              <Route  exact path="/NewtonDividedDifferences" component={NewtonDividedDifferences} />
              <Route  exact path="/LagrangePolynomials" component={LagrangePolynomials} />
              <Route  exact path="/SplineInterpolation" component={SplineInterpolation} />
              <Route  exact path="/PolynomialRegression" component={PolynomialRegression} />
              <Route  exact path="/MultipleLinearRegression" component={MultipleLinearRegression} />
              <Route  exact path="/TrapezoidalRule" component={TrapezoidalRule} />
              <Route  exact path="/CompositetrapezoidalRule" component={CompositetrapezoidalRule} />
              <Route  exact path="/SimpsonRule" component={SimpsonRule} />
              <Route  exact path="/CompositeSimpsonRule" component={CompositeSimpsonRule} />
              <Route  exact path="/FwDividedDiff" component={FwDividedDiff} />
              <Route  exact path="/BwDividedDiff" component={BwDividedDiff} />
              <Route  exact path="/CentralDividedDiff" component={CentralDividedDiff} />
              <Route  exact path="/EulerMethod" component={EulerMethod} />
              <Route  exact path="/HeunMethod" component={HeunMethod} />
              <Route  exact path="/ModifiedEulerMethod" component={ModifiedEulerMethod} /> 
            </Content>
          </Layout>
        </Layout>
        </Router>  
    );
  }
}

export default App;

