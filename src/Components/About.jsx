import React from 'react';
import './about1.css'; // Make sure this path is correct relative to your component file

const AboutUs = () => {
    return (
        <footer>
            <div id="about-us" className="about-us">
                <h1>About Stock Sage</h1>
                
                <div className="container" id="new-content">
                    <div className="header">
                        <p className="believe-us">Believe Us</p>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEUAAAD///9zc3NBQUEnJydra2uwsLDy8vLMzMyWlpZHR0dWVlabm5uAgIDf399bW1tfX18xMTHn5+csLCxKSkrv7+/Y2Nhvb2+2trZ6enr5+fk8PDzAwMCjo6MZGRnQ0NCKiooODg6np6ePj482NjZQUFALCwsdHR0oyzkyAAAD8UlEQVR4nO2c61riMBBAy00UBRQElZt4Qd//DbeJLNJ20gaWbjP5zvnLjM75Spo0E5okAAAAAAAAAAAAAAAAAAAA8I90XEybruxCzFtOHpuu7TJM3Ibtpmu7DA+L2A2TrlMxFkO3YjSGybQfu2HyICtGZOhQjMkwmc5iNxQn/qgMR7F/S0XBmAxlwYgMHYLxGLoEozF0CsZi6BaMxLBEMA7DMsEoDCXBdj8iQ0lw/LsM128oC6bL8EUkhi7Bw1O/dkNJ8H7/2c9VDMZwOVl1T88qE9wrhmK4M7XdnZpVLvjz1B+IYe+nutnTSVnuMfiXVLFzyTrPZngocL70z6oWDIb1cY3PvlmKBJ9zZX54ZVWNwYC4LhQ66VVnKRIUG2OvnxVZegQ3rr7YVWmaHkHHTrxhsXWn6bnJPDr9DJOdI02P4H2pYMq1uJDTI/hSJZiyLqbpGYM3HoKtVv8ll6ZH8MpLMGWUOU2hR3DlK5iy2hzS9IzB1xMEU272aXoExXl+W7Ir2LfPVWoEu+I8nw63oftYjHmuUjMGB5JH/8F+Vnb/kXrYQQqK8/zke//p8qQRGqRgW6p0fhTQk66VIsGtVOl1NubDUzDIm8y7VGlx4yL/2K9HUJznpU3ETsmJ0ZAFixsWKVs5tl0xHEMcg2/idXHv2N5pE+yKC5my71rXvXgNUfBTmucXFTvSt46FXIhjcCcVOqtuxogLuRAFnyTBkVdqcYIJUVCc5189k6e5W3CIY1C8K6788+8ngQuKK5T3k/7EdhGyoDjP+7VfjrgKdwyK83x+B82D5TxMQbkxcV6hvdfbC1d3AT6lDYvFCY3e0NlJ8/Usll/MJYcDCFlGm3zY122R8TnXuTsW/tAZh1i8EVtLwjw/leK8+/lHiCunM25q3khrUWme70qFlbdIZcTvTK0HaoobLmLdig2z50hav7vzWTQb5hZsQzlItWFmyeY6RKLb8LfZsHC15bUbJvs9s31jQkK74caua2Zf7gjthsmylW1MFFBvmIxn5c/z+g2rwNAbDBsDQ28wbAwMvcGwMTC09IZF8ptMug2ls1KLXIxuQ6m/08/FYNgYGFowNGDYGBhaMDRg2BgYWjA0YNgYGFowNDRiOF7fFVjnDkXpNhQPz+beIq7bUPw98yAbg6EFQwOGtYChAUMLhgYMawFDA4YWDA0Y1gKGBgwtGBowrAUMDRhaMDRgWAsYGjC0YGjAsBYwNGBowdCAYS1gaMDQgqEBw1rA0IChBUMDhrWAoUG3oc/pS6/3tUkvmMz/hvS/v6/N0B10CgzesjFfxZBOJ//qwU8pKBezkf7ZdwIAAAAAAAAAAAAAAAAAABAnfwCVLEkv0Muy3gAAAABJRU5ErkJggg==" alt="Believe Us Image" />
                    </div>
                    <div className="content">
                        <p className="avg-return">45.5% Avg. returns in a year</p>
                        <p className="rumors">Rumors are right.</p>
                        <p className="generation">Millennials and Gen-zers are going to take Sensex to 200k.</p>
                    </div>
                </div>
                
                <div id="mission-section">
                    <h2>Our Mission</h2>
                    <p>At Stock Sage, we aim to empower investors with personalized investment insights, comprehensive analysis tools, and real-time market updates. Our platform leverages advanced algorithms to analyze historical stock performance and user-specific criteria, providing tailored stock recommendations that help you make informed investment decisions.</p>
                </div>
                
                <h2>What We Offer</h2>
                <ul>
                    <li>Real-time stock prices and market indices updates</li>
                    <li>Personalized stock recommendations based on your preferences</li>
                    <li>Comprehensive analysis tools for deeper market insights</li>
                    <li>Timely news updates to keep you informed</li>
                </ul>

                <h2>Our Team</h2>
                <p>Our team comprises seasoned financial analysts, data scientists, and software engineers who are passionate about leveraging technology to enhance investment decision-making. We are dedicated to providing you with the tools and insights you need to navigate the stock market with confidence.</p>
            </div>
        </footer>
    );
}

export default AboutUs;
