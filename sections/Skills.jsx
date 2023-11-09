import React from "react";
import SkillItem from "../components/SkillItem";

export default function Skills() {

    return (
        <section id="skills" className="skills section-bg">
            <div className="container" data-aos="fade-up">
    
                <div className="section-title">
                    <h2>Skills</h2>
                    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div>
        
                <div className="row skills-content">
        
                    <div className="col-lg-6">
                        <SkillItem theme="HTML" value="100" />
                        <SkillItem theme="CSS" value="90" />
                        <SkillItem theme="JavaScript" value="75" />
                    </div>
        
                    <div className="col-lg-6">
                        <SkillItem theme="PHP" value="80" />
                        <SkillItem theme="WordPress/CMS" value="90" />
                        <SkillItem theme="Photoshop" value="55" />
                    </div>
        
                </div>

            </div>
        </section>
    )
}
