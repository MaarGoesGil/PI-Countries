import React from 'react';
import './Index.css';
import { Link } from "react-router-dom";
export function Index() {
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

export default Index;