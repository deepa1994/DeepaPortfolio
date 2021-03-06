import React from 'react';
import "./Css/Technology.css"
const Technology = () => (
    <section className="colorlib-work" data-section="tech" style={{ marginLeft: "10%" }}>
        <div>
            <div className="first_div">
                <h2><b>SOFTWARE PROFICIENCY</b></h2>
                <div className="child_div">
                    <h3>DataBases</h3>
                    <ul>
                        <li>SQL Server</li>
                        <li>Oracle</li>
                        <li>SQL</li>
                    </ul>
                </div>

                <div className="child_div">
                    <h3>Languages</h3>
                    <ul>
                        <li>Java</li>
                        <li>C#</li>
                        <li>Ruby</li>
                    </ul>
                </div>

                <div className="child_div">
                    <h3>Tools</h3>
                    <ul>
                        <li>Eclipse</li>
                        <li>Visual Studio</li>
                        <li>Sublime Text editor</li>
                    </ul>
                </div>
            </div>

            <h2><b>Certifications</b></h2>
            <div className="child_div2">
                <ul>
                    <li style={{ paddingTop: "15px" }}>OCJP 6 : Oracle Java Professional 6 Certificate</li>
                    <li>Software Testing</li>
                    <li>Diploma In Computer Administration</li>
                </ul>
            </div>
        </div>
    </section>
);

export default Technology;