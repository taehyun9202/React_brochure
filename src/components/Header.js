import React, { useState, useEffect } from 'react'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
export default function Header() {
    const [open, setOpen] = useState(false)
    const [mode, setMode] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header')
            if (window.scrollY > 0) {
                header.setAttribute('id', 'sticky');
            }
            else {
                header.setAttribute('id', '');
            }
        })   
    }, []);
    //  need to use state provider to prevent change from refreshing page
    // if (mode == true) {
    //     const root = document.querySelector(":root");
    //     console.log(root);
    //     root.style.setProperty("--night_bg", "white");
    //     root.style.setProperty("--night_text", "#222222");
    //     root.style.setProperty("--night_head", "#888888");
    // }
    return (
        <div className="header">
            <header>
                <div className='navbar' >
                    <a className="title" href="/"><span className="capital">D</span>iner<span className="capital">.</span></a>
                    <ul className="menu">
                        <li><a className="menuselection" href="/"><span className="capital">H</span>ome</a></li>
                        <li><a className="menuselection" href="/about"><span className="capital">A</span>bount</a></li>
                        <li><a className="menuselection" href="/menu"><span className="capital">M</span>enu</a></li>
                        <li><a className="menuselection" href="/reservation"><span className="capital">R</span>eservation</a></li>
                    </ul>
                </div>
                <div className="burger">
                    {open == false ? <MenuIcon fontSize="large" onClick={() => setOpen(true)}/> : <CloseIcon fontSize="large" onClick={() => setOpen(false)}/>}
                    {open == true ?
                    <div className="phonemenu">
                        <ul >
                            {/* <li>{mode == false ? <button onClick={() => setMode(true)}>day</button> : <button onClick={() => setMode(false)}>night</button>}</li> */}
                            <li><a className="menuselection" href="/"><span className="capital">H</span>ome</a></li>
                            <li><a className="menuselection" href="/about"><span className="capital">A</span>bount</a></li>
                            <li><a className="menuselection" href="/menu"><span className="capital">M</span>enu</a></li>
                            <li><a className="menuselection" href="/reservation"><span className="capital">R</span>eservation</a></li>
                        </ul>
                    </div>
                    : <div></div>}
                </div>
            </header>
        </div>
    )
}
