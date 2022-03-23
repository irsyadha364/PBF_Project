import React from 'react';

const About = () => {
    return(
        <div>
            <section id="about">
                <div className="container my-5 py-5">
                    <div className="col-md-6">
                        <img src="/assets/about1.jpg" alt="About"
                        className="w-75 mt-5"/>
                    </div>
                    <div className="col-md-6"><br></br><br></br>
                        <h3 className="fs-5 mb-0">About Us</h3>
                        <h1 className="display-6 mb-2">Who <b>We</b> Are</h1>
                        <hr className="w-50"/>
                        <p className="lead mb-4">Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Ea dolor, expedita cumque natus eligendi commodi,
                        dolore quos perspiciatis sed ullam quod eos enim totam tempora 
                        laborum laudantium vitae perferendis dicta sapiente dignissimos! 
                        Numquam necessitatibus quam obcaecati similique, aliquid cum 
                        aliquam sit libero consequatur nihil commodi molestiae voluptatum 
                        asperiores in delectus voluptate tenetur corrupti fugiat corporis 
                        perspiciatis quos illo velit voluptatibus!</p>
                        <button className="btn btn-primary rounded-pill px-4
                        py-2">Get Started</button>
                        <button className="btn btn-outline-primary rounded-pill 
                        px-4 py-2 ms-2">Contact Us</button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;