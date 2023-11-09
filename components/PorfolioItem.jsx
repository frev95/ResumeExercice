import React from "react";

export default function PorfolioItem({ imageNumber, title, category}) {
    const image = "assets/img/portfolio/portfolio-" + imageNumber + ".jpg";

    return (
        <div className="portfolio-wrap">
            <img src={image} className="img-fluid" alt="" />
            <div className="portfolio-info">
                <h4>{title}</h4>
                <p>{category}</p>
                <div className="portfolio-links">
                    <a href={image} data-gallery="portfolioGallery" className="portfolio-lightbox" title={title}><i className="bx bx-plus"></i></a>
                    <a href="portfolio-details.html" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link"></i></a>
                </div>
            </div>
        </div>
    )
}
