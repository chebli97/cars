import React from 'react'
import Article from '../components/Article'
import {Car} from '../Cars'

function Home() {
    return (
        <div className="box-cars-home">
            <Article Car={Car}/>
        </div>
    )
}

export default Home
