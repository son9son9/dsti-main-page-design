import React from "react";
import Rellax from 'rellax';
import './style.css';

var rellax = new Rellax('.rellax');

const Home = () => {

    return (
        <div className="rellax bg">
            <h1 className="rellax float-center" data-rellax-speed="5">FIRST</h1>
            <h1 className="rellax float-center right" data-rellax-speed="1">SECOND</h1>
            <h1 className="rellax float-center left" data-rellax-speed="-5">THIRD</h1>
            <div class="custom-shape-divider-bottom-1652171182">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                </svg>
            </div>
        </div>
    );;
}

export default Home;