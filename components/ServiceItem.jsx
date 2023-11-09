import React from "react";

export default function ServiceItem({ color, shape, icon, name, description }) {
    const colorClass = "icon-box iconbox-" + color;
    const iconClass="bx " + icon;

    return (
        <div className={colorClass}>
            <div className="icon">
                <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                    <path stroke="none" stroke-width="0" fill="#f5f5f5" d={shape}></path>
                </svg>
                <i className={iconClass}></i>
            </div>
            <h4><a href="">{name}</a></h4>
            <p>{description}</p>
        </div>
    )
}
