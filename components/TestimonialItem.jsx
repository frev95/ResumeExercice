import React from "react";

export default function TestimonialItem({ photoNumber, name, job, description }) {
    const photo = "assets/img/testimonials/testimonials-" + photoNumber + ".jpg";

    return (
        <div className="swiper-slide">
            <div className="testimonial-item">
                <img src={photo} className="testimonial-img" alt="" />
                <h3>{name}</h3>
                <h4>{job}</h4>
                <p>
                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                    {description}
                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
            </div>
        </div>
    )
}
