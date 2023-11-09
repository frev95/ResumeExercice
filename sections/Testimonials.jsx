import React from "react";
import TestimonialItem from "../components/TestimonialItem";

export default function Testimonials() {

    return (
        <section id="testimonials" className="testimonials section-bg">
            <div className="container" data-aos="fade-up">
    
                <div className="section-title">
                    <h2>Testimonials</h2>
                </div>
        
                <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
                    <div className="swiper-wrapper">
                        <TestimonialItem photo="1" name="Saul Goodman" job="Founder" description="Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper." />
                        <TestimonialItem photo="2" name="Sara Wilsson" job="Designer" description="Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa." />
                        <TestimonialItem photo="3" name="Jena Karlis" job="Store Owner" description="Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim." />
                        <TestimonialItem photo="4" name="Matt Brandon" job="Freelancer" description="Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam." />
                        <TestimonialItem photo="5" name="John Larson" job="Entrepreneur" description="Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid." />
                    </div>

                    <div className="swiper-pagination"></div>
                </div>
        
            </div>
        </section>
    )
}
