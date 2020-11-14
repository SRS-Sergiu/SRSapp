import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './style.css'
export class HomeTopZone extends Component {
    render() {
        return (
           <section id="section1">
                <div className="container-fluid">
                    <div className="row">
                        <div class="col-7 col__s1__left">
                            <h1>... we turn your dream into a <br /> successful online business</h1>
                            <h3>come up with your business idea and together we will develop a solution that will help you carry out your activity on the internet</h3>
                            <Link className="ybtn btn btn-primary" to="/">see more <i className="fa fa-chevron-right"></i></Link>
                        </div>
                        <div class="col-5 col__s1__right">
                            <img src="./images/undraw1.svg"/>
                        </div>
                    </div>
                </div>
           </section>
        )
    }
}

export default HomeTopZone
