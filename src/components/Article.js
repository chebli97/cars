import React from 'react';

function Article({ Car }) {
    return (
        <>

            {
                Car.map(i => (
                    <div className="container">
                        <section>
                            <img className="image-box" src={i.image} />
                            <h1 className="name-style"> {i.marque} {i.model}</h1>
                            <h3 className="detail-car">{i.cylindrée} {i.carburant}</h3>
                            <h2 className>{i.carburant} </h2><h2>{i.année}</h2>
                        </section>
                    </div>
                ))
            }
        </>
    )

}

export default Article
