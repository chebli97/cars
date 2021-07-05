import React from 'react';

function Article({ Car }) {
    return (
        <>
            {
                Car.map(i => (
                    <div className="container">
                        <section>
                            
                            <img className="image-box" src={i.image} />
                            <h1> {i.marque} </h1>
                        </section>
                    </div>
                ))
            }
        </>
    )
}

export default Article
