import React from 'react';
import './Home.css';
import { Link } from "react-router-dom";
export function Home() {
    return (
            <div className="container">
                <div className="home">
                    <h1> Mapa-Mundi </h1>
                    <Link to="/countries">
                        <button>Comenzar</button>
                    </Link>
                </div>
            </div>
    )
};

export default Home;