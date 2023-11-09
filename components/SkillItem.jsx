import React from "react";

export default function SkillItem({ theme, value }) {

    return (
        <div className="progress">
            <span className="skill">${theme} <i className="val">${value}%</i></span>
            <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>
    )
}
