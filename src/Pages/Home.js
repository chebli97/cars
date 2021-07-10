import React from 'react'
import Listarticle from '../components/List-article'
import { Car } from '../Cars'
import Arrow from '../components/Arrow'

function Home() {
    return (
        <div>
            <h1 className="title-of-box">Browse our latest cars</h1>
            <div className="box-cars-home">
                <Listarticle Car={Car} />
                <Arrow/>
            </div>
            
            <div className="search-button">
                <button>Search Car</button>
            </div>
        </div>
    )
}

export default Home
