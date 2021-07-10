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
                            <h3 className="detail-car">{i.cylindrée} {i.carburant} {i.année}</h3>
                            <h3 className="km">{i.kilométrage}</h3>
                            <h2 className="prix">{i.prix} </h2>
                            <div className="d-grid gap-2 col-6 mx-auto">
                                <a className="btn btn-outline-danger">View the car</a>
                                <h6>Added 6 hours ago</h6>
                            </div>
                        </section>
                    </div>
                ))
            }
        </>
    )

}

export default Article
