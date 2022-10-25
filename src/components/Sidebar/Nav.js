import React from "react";
import {Route, Link, Redirect,  BrowserRouter as Router } from "react-router-dom";
import './Nav.css'
import Detail from '../../pages/dashboard/Detail';
import Display from '../../pages/dashboard/Display';
import Risk from '../../pages/dashboard/Risk';

const Nav = () => {
    return (
        <Router>
            <div>
                <nav>
                    
                    <div id='border'>
                        <Link to="/display">데이터 현황</Link>
                    </div>
                    <div id='border'>
                        <Link to="/detail">데이터 상세 분석</Link>
                    </div>
                    <div id='border'>
                        <Link to="/risk">위험도 분석</Link>
                    </div>
                </nav>
                <switch>
                    <Route
                    exact
                    path="/"
                    render={() => {
                        return (
                            <Redirect to="/display" />
                            )
                    }}
                    />
                    <Route path="/display" component={Display} />
                    <Route path="/detail" component={Detail} />
                    <Route path="/risk" component={Risk} />
                </switch>
            </div>
        </Router>
    );
};

export default Nav;