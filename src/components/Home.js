import React, { useState } from 'react'
import './Home.css'
import bg from './images/bg.jpg'
import bg2 from './images/bg2.jpg'
import img1 from './images/dish5.jpg'
import menu1 from './images/dessert2.jpg'
import menu2 from './images/dish4.jpg'
import menu3 from './images/dessert1.jpg'
import menu4 from './images/wine.jpg'
import chef1 from './images/chef1.jpg'
import chef2 from './images/chef2.jpg'
import chef3 from './images/chef3.jpg'
import chef4 from './images/chef4.jpg'


import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

function Home() {
    return (
        <div className="home">   
            <section className="section section1">
                <div className="content">
                <h2><span className="capital">T</span>hought for <span className="capital">F</span>ood</h2>
                <p><span className="capital">L</span>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                <button>Our Menu</button>
                </div>
                <img src={bg} />
            </section>

            <section class="section section2">
                <div class="content">
                    <img src={img1} alt="" />
                <div class="text">
                    <h2>About <span className="capital">U</span>s</h2>
                    <p><span className="capital">L</span>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software.</p>
                </div>
                </div>
            </section>

            <section class="section section3">
                <div class="content">
                <div class="text">
                    <h2>Our <span className="capital">M</span>enu</h2>
                    <p><span className="capital">L</span>orem Ipsum is simply dummy text of the printing.</p>
                </div>
                <div className="cards">
                    <div>
                    <div className="card">
                        <img src={menu1} />
                        <p><span className="capital">B</span>runch</p>
                    </div>
                    <div className="card">
                        <img src={menu2} />
                        <p><span className="capital">D</span>inner</p>
                    </div>
                    </div>
                    <div>
                    <div className="card">
                        <img src={menu3} />
                        <p><span className="capital">D</span>essert</p>
                    </div>
                    <div className="card">
                        <img src={menu4} />
                        <p><span className="capital">W</span>ine</p>
                    </div>
                    </div>
                </div>
                <button>View All</button>
                </div>
            </section>

            <section class="section section4">
                <div class="content">
                <div class="text">
                    <h2>Our Expert <span className="capital">C</span>hefs</h2>
                    <p><span className="capital">L</span>orem Ipsum is simply dummy text of the printing.</p>
                </div>
                <div className="cards">
                    <div>
                    <div className="card">
                        <div className="imgbox">
                        <img src={chef1} />
                        </div>
                        <div className="description">
                        <p><span className="capital">L</span>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.</p>
                        <h2><span className="capital">S</span>ome O. Famous</h2>
                        <ul>
                            <li><a href="https://www.facebook.com/"><FacebookIcon /></a></li>
                            <li><a href="https://twitter.com/"><TwitterIcon /></a></li>
                            <li><a href="https://www.instagram.com/"><InstagramIcon /></a></li>
                        </ul>
                        </div>
                    </div>
                    <div className="card">
                        <div className="imgbox">
                        <img src={chef2} />
                        </div>
                        <div className="description">
                        <p><span className="capital">L</span>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.</p>
                        <h2><span className="capital">S</span>ome O. Famous</h2>
                        <ul>
                            <li><a href="https://www.facebook.com/"><FacebookIcon /></a></li>
                            <li><a href="https://twitter.com/"><TwitterIcon /></a></li>
                            <li><a href="https://www.instagram.com/"><InstagramIcon /></a></li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div>
                    <div className="card">
                        <div className="imgbox">
                            <img src={chef3} />
                        </div>
                        <div className="description">
                            <p><span className="capital">L</span>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.</p>
                            <h2><span className="capital">S</span>ome O. Famous</h2>
                            <ul>
                            <li><a href="https://www.facebook.com/"><FacebookIcon /></a></li>
                            <li><a href="https://twitter.com/"><TwitterIcon /></a></li>
                            <li><a href="https://www.instagram.com/"><InstagramIcon /></a></li>
                        </ul>
                        </div>
                    </div>
                    <div className="card">
                        <div className="imgbox">
                            <img src={chef4} />
                        </div>
                        <div className="description">
                            <p><span className="capital">L</span>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.</p>
                            <h2><span className="capital">S</span>ome O. Famous</h2>
                            <ul>
                            <li><a href="https://www.facebook.com/"><FacebookIcon /></a></li>
                            <li><a href="https://twitter.com/"><TwitterIcon /></a></li>
                            <li><a href="https://www.instagram.com/"><InstagramIcon /></a></li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>

            <section className="section section1">
                <div className="content">
                <h2>Make a <span className="capital">R</span>eservation</h2>
                <button>Click Here</button>
                </div>
                <img src={bg2} />
            </section>
        </div>
    );
}

export default Home
