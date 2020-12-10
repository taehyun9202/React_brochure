import React, { useState, useEffect } from 'react'
import './Reservation.css'



function Reservation() {
    const [time, setTime] = useState("")
    useEffect(() => {
        var today = new Date().toISOString().split('T')[0]
        console.log(today)
        document.getElementById("date").min = today;
    }, []);

    return (
        <div className="reservation">
            <div className="reservation_banner1">
                <h1>Reservation</h1>
            </div>

            <section class="reservation_banner2">
                <div class="content">
                    <div class="text">
                        <h2>Hi <span className="capital">G</span>uest!</h2>
                    </div>
                    <form>
                        <input className="reserve"  type="date" id="date" name="date" required min=""/>
                        <input className="reserve"  type="time" id="time" name="time" required min="11:00" max="24:00"/>
                        <select  className="reserve" name="number" id="number">
                            <option value="1">1 Person</option>
                            <option value="2">2 People</option>
                            <option value="3">3 People</option>
                            <option value="4">4 People</option>
                            <option value="5">5 People</option>
                            <option value="6">6 People</option>
                            <option value="7">More</option>
                        </select>
                        <button>Book now</button>
                    </form>
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

export default Reservation
