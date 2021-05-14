import React from 'react'
import { Link } from 'react-router-dom'
import "./styles/Car.css"

export default function Car() {
    return (
        <div className="Card">
            <header>
                Suzuki Scross 2017
            </header>
            <main>
                <p>Lorem ipsum dolor,  elit. Alias harum soluta veniam? Asperiores omnis sed deserunt nemo beatae officia quaerat rem quod! Ad libero minus accusamus quae autem temporibus enim?</p>
            </main>
            <footer>
                <Link className="button" to="/cars/details">
                    See Details
                </Link>
            </footer>
        </div>
    )
}
