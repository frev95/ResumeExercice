import React from "react";
import FactItem from "../components/FactItem";

export default function Facts() {

    return (
        <section id="facts" className="facts">
            <div className="container" data-aos="fade-up">
    
                <div className="section-title">
                    <h2>Facts</h2>
                    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div>
        
                <div className="row">
        
                        <div className="col-lg-3 col-md-6">
                            <FactItem emoji="bi-emoji-smile" value="232" legend="Happy Clients" />
                        </div>
            
                        <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
                            <FactItem emoji="bi-journal-richtext" value="521" legend="Projects" />
                        </div>
            
                        <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                            <FactItem emoji="bi-headset" value="1463" legend="Hours Of Support" />
                        </div>
            
                        <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                            <FactItem emoji="bi-award" value="25" legend="Awards" />
                        </div>
        
                </div>
        
            </div>
        </section>
    )
}
