import React from 'react'
import { Link } from 'react-router-dom'
import "./styles/Home.css"

export default function Home() {
    return (
        <div className="Home" >
            <Link className="Home__button" to="/cars" >
                Get Started
            </Link>
        </div>
    )
}
