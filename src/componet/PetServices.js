import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure Bootstrap is imported
import petcare1 from '../img/petcare 1.jpg';
import petcare2 from '../img/petcare 2.jpg';
import petcare3 from  '../img/petcare 3.jpg';
import petcare4 from   '../img/petcare 4.jpg';
import petcare5 from    '../img/petcare 5.jpg';
import petcare6 from    '../img/petcare 6.jpg';

const Services = () => {
    const services = [
        {
            id: 1,
            title: "Pet Boarding",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            imgSrc: petcare1,
        },
        {
            id: 2,
            title: "Pet Feeding",
            description: "Vivamus luctus urna sed urna ultricies ac tempor dui sagittis.",
            imgSrc: petcare2,
        },
        {
            id: 3,
            title: "Pet Grooming",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            imgSrc: petcare3,
        },
        {
            id: 4,
            title: "Pet Training",
            description: "Vivamus luctus urna sed urna ultricies ac tempor dui sagittis.",
            imgSrc:petcare4 ,
        },
        {
            id: 5,
            title: "Pet Exercise",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            imgSrc: petcare5,
        },
        {
            id: 6,
            title: "Pet Treatment",
            description: "Vivamus luctus urna sed urna ultricies ac tempor dui sagittis.",
            imgSrc: petcare6,
        },
    ];

    return (
        <section className="services py-5">
            <div className="container">
                <div className="section-title text-center mb-5">
                    <h2>
                        <span className="text-warning font-weight-bold ">Premium</span> Pet Services
                    </h2>
                    <p>Our Services</p>
                </div>
                <div className="row">
                    {services.map(service => (
                        <div key={service.id} className="col-md-4 mb-4">
                            <div className="border p-4 text-center shadow-sm rounded">
                                <img src={service.imgSrc} alt={service.title} className="mb-3 img-fluid" />
                                <h5>{service.title}</h5>
                                <p className="text-muted">{service.description}</p>
                                <a href="#" className="text-success text-decoration-none text-danger">Read More</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
