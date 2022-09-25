import React from "react";
import {Route, Link,  BrowserRouter as Router } from "react-router-dom";
import './Nav.css'
import Detail from '../pages/Detail';
import Display from '../pages/Display';
import Main from '../pages/Main';
import Risk from '../pages/Risk';

const Nav = () => {
    return (
        <Router>
        <div>
        <nav>
            <div>
                <Link to="/main">메인</Link>
            </div>
            <div>
                <Link to="/display">데이터 현황</Link>
            </div>
            <div>
                <Link to="/detail">데이터 상세 분석</Link>
            </div>
            <div>
                <Link to="/risk">위험도 분석</Link>
            </div>
        </nav>

        <Route path="/main" component={Main} />
        <Route path="/detail" component={Detail} />
        <Route path="/display" component={Display} />
        <Route path="/risk" component={Risk} />
        </div>
        </Router>
    );
};

export default Nav;