import React from "react";

export default function FactItem({ emoji, value, legend }) {
    const name = "bi " + emoji;

    return (
        <div className="count-box">
            <i className={name}></i>
            <span data-purecounter-start="0" data-purecounter-end={value} data-purecounter-duration="1" className="purecounter"></span>
            <p>{legend}</p>
        </div>
    )
}
