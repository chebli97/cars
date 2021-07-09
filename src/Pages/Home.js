import React from 'react'
import Article from '../components/Article'
import { Car } from '../Cars'

function Home() {
    return (
        <div>
            <h1 className="title-of-box">Browse our latest cars</h1>
            <div className="box-cars-home">
                <Article Car={Car} />
            </div>
        </div>
    )
}

export default Home
