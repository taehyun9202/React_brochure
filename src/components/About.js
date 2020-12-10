import React, { useState, useEffect } from 'react'
import './About.css'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import bg4 from './images/bg4.jpg'
import dish1 from './images/dish1.jpg'

const containerStyle = {
    width: '320px',
    height: '320px'
};

const center = {
    lat: 38.806735,
    lng: -77.163343
};


function About() {
    const [map, setMap] = React.useState(null)
    
    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map)
    }, [])
    
    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])
    
    
    return (
        <div className="about">
            <div className="about_banner1">
                <h1>About Us</h1>
            </div>

            <section class="about_banner2">
                <div class="content">
                    <img src={bg4} alt="" />
                    <div class="text">
                        <h2><span className="capital">A</span>bout Us</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software.</p>
                    </div>
                </div>
            </section>

            <section class="about_banner3">
                <div class="content">
                    <img src={dish1} alt="" />
                    <div class="text">
                        <h2><span className="capital">O</span>ur Kitchen</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
                    </div>
                </div>
            </section>

            <h2 className="about_contact"><span className="capital">C</span>ontact Us</h2>
            <section className="about_banner4">
                <div className="content">
                    <div className="left">
                        <form>
                            <div className="emailsubmit">
                                <input className="input" type="email" placeholder="Email Address"/>
                                <input className="input" type="text" placeholder="Subject"/>
                                <textarea className="textarea" type="text" rows="8" cols="50" />
                                <button type="submit">Send Email</button>
                            </div>
                        </form>
                    </div>
                    <div className="right">
                        <LoadScript
                            googleMapsApiKey="AIzaSyCm1g2bXbzVtx2vCTSlYpjgvYECNynEAqI"
                        >
                            <GoogleMap
                                mapContainerStyle={containerStyle}
                                center={center}
                                zoom={16}
                            >
                            <Marker position={{ lat: 38.806735, lng: -77.163343 }} />
                            </GoogleMap>
                        </LoadScript>
                    </div>
                </div>
            </section>

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

export default About
