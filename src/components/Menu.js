import React from 'react'
import './Menu.css'
import starter from './images/starter.jpg'
import main from './images/main.jpg'
function Menu() {
    return (
        <div className="menu_page">
            <div className="menu_banner1">
                <h1>Menu</h1>
            </div>

            <div className="menu_banner">
                <img src={starter}/>
                <div className="content">
                    <div className="text">
                        <h2>Starters</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing</p>
                    </div>
                    <div className="options">
                        <div className="left">
                            <div className="dish">
                                <h2>Soup of the Day</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                <p className="price">$19.99</p>
                            </div>
                            <div className="dish">
                                <h2>Starter 1</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                <p className="price">$9.99</p>
                            </div>
                            <div className="dish">
                                <h2>Starter 2</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                <p className="price">$9.99</p>
                            </div>
                        </div>
                        <div className="right">
                            <div className="dish">
                                <h2>Starter 3</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                <p className="price">$29.99</p>
                            </div>
                            <div className="dish">
                                <h2>Starter 4</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                <p className="price">$9.99</p>
                            </div>
                            <div className="dish">
                                <h2>Starter 5</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                <p className="price">$9.99</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="menu_banner">
                <img src={main}/>
                <div className="content">
                    <div className="text">
                        <h2>Main Courses</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing</p>
                    </div>
                    <div className="options">
                        <div className="left">
                            <div className="dish">
                                <h2>Pasta</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                <p className="price">$19.99</p>
                            </div>
                            <div className="dish">
                                <h2>Main Course 1</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                <p className="price">$9.99</p>
                            </div>
                            <div className="dish">
                                <h2>Main Course 2</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                <p className="price">$9.99</p>
                            </div>
                        </div>
                        <div className="right">
                            <div className="dish">
                                <h2>Main Course 3</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                <p className="price">$29.99</p>
                            </div>
                            <div className="dish">
                                <h2>Main Course 4</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                <p className="price">$9.99</p>
                            </div>
                            <div className="dish">
                                <h2>Main Course 5</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                <p className="price">$9.99</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer">
                <div className="content">
                    <div className="address">
                        <h2><span className="capital">A</span>ddress</h2>
                        <h3>5309 Chieftain cir</h3>
                        <h3>Alexandria, VA 22312</h3>
                    </div>
                    <div className="hour">
                        <h2><span className="capital">O</span>pen Hour</h2>
                        <h3>Mon - Fri: 11am - 11pm</h3>
                        <h3>Sat - Sum: 11am - 12am</h3>
                    </div>
                    <div className="contact">
                        <h2><span className="capital">C</span>ontact Info</h2>
                        <h3>taehyun9202@hotmail.com </h3>
                        <h3>(703) 400 - 9295</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu
