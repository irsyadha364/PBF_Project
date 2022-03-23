import React from 'react';

const Home = () => {
    return(
        <div>
            <section id="home">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 mt-5">
                            <h1 className="display-4 fw-bolder mb-4 text-center text-white">Feels the Fresh Business Perspective</h1><br></br>
                            <p className="lead text-center fs-4 mb-5 text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime soluta 
                            iusto suscipit incidunt veniam mollitia quod fugit optio odio, beatae minus consequuntur dolor vel sapiente cum 
                            labore iure asperiores? Error rem officia, minus consequuntur ab temporibus, dolores repudiandae officiis assumenda 
                            culpa harum eius beatae expedita dolore facere illum ex tempora.</p><br></br><br></br>
                            <div className="buttons d-flex justify-content-center">
                                <button className="btn btn-light me-4 rounded-pill px-4 py-2">Get Quote</button>
                                <button className="btn btn-outline-light rounded-pill px-4 py-2">Our Services</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;