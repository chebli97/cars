import React from 'react'
import Article from '../components/Article'
import { Car } from '../Cars'

function Home() {
    return (
        <div>
            <h1 className="title-of-box">Browse our latest cars</h1>
            <img className="flech" src="https://img.icons8.com/ios-filled/50/000000/circled-chevron-left.png" />
            <img className="flech1" src="https://img.icons8.com/ios-filled/50/000000/circled-chevron-right.png" />
            <div className="box-cars-home">
                <Article Car={Car} />
                <div className="d-grid gap-2 col-6 mx-auto"></div>
                <a href="#" className="btn btn-secondary">search</a>
            </div>
        </div>
    )
}

export default Home
