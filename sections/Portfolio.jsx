import React from "react";
import PortfolioItem from "../components/PorfolioItem";

export default function Portfolio() {

    return (
        <section id="portfolio" className="portfolio section-bg">
            <div className="container" data-aos="fade-up">
    
                <div className="section-title">
                    <h2>Portfolio</h2>
                    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div>
        
                <div className="row">
                    <div className="col-lg-12 d-flex justify-content-center" data-aos="fade-up" data-aos-delay="100">
                    <ul id="portfolio-flters">
                        <li data-filter="*" className="filter-active">All</li>
                        <li data-filter=".filter-app">App</li>
                        <li data-filter=".filter-card">Card</li>
                        <li data-filter=".filter-web">Web</li>
                    </ul>
                    </div>
                </div>
        
                <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
        
                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                        <PortfolioItem imageNumber="1" title="App 1" category="App" />
                    </div>
        
                    <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                        <PortfolioItem imageNumber="2" title="Web 3" category="Web" />
                    </div>
        
                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                        <PortfolioItem imageNumber="3" title="App 2" category="App" />
                    </div>
        
                    <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                        <PortfolioItem imageNumber="4" title="Card 2" category="Card" />
                    </div>
        
                    <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                        <PortfolioItem imageNumber="5" title="Web 2" category="Web" />
                    </div>
        
                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                        <PortfolioItem imageNumber="6" title="App 3" category="App" />
                    </div>
        
                    <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                        <PortfolioItem imageNumber="7" title="Card 1" category="Card" />
                    </div>
        
                    <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                        <PortfolioItem imageNumber="8" title="Card 3" category="Card" />
                    </div>
        
                    <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                        <PortfolioItem imageNumber="9" title="Web 3" category="Web" />
                    </div>
        
                </div>
        
            </div>
        </section>
    )
}
