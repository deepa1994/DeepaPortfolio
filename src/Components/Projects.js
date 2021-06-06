import React from "react"
import ProjectTemplate from "./HelperFunctions/ProjectTemplate"
import "./Css/Project.css"
const Projects = () => (
    <div className="Container">
        <br />
        <br />
        <section className="colorlib-work" data-section="projects">
            <span className="heading-meta font-size-maintainer">Projects</span>
            <div className="image">
                <ProjectTemplate Title="Emergency Medical Services"
                    Content="Tested the workflows related to the ambulatory services of American Medical Response. Tested each and every area for precise information about travel duration, course of journey and other services provided in the ambulance with their payment related details.Found and reported lot of critical issues including payment security vulnerability issues, Time zone issues etc.Got appreciation from product owner, managers and developers for deep level testing and high level of understanding product in short time duration."
                    Role="Manual and Automation Tester"
                    Technology="Agile">
                </ProjectTemplate>
            </div>
            {/* STart from here */}
            <div className="image">
                <ProjectTemplate Title="Communicator"
                    Content="Been as a part of testing patient interaction and engagement service of Athena product through automated messaging, live operators, and a patient portal, athenaCommunicator helps medical service providers to engage patients in their care and reduce administrative work for staff."
                    Role="Manual and Automation Tester"
                    Technology="Agile">
                </ProjectTemplate>
            </div>
            <div className="image">
                <ProjectTemplate Title="Communicator"
                     Content="Been as a part of testing patient interaction and engagement service through automated messaging, live operators, and a patient portal, athenaCommunicator helps medical service providers to engage patients in their care and reduce administrative work for staff."
                     Role="Manual Tester"
                     Technology="Agile">
                </ProjectTemplate>
            </div>
        </section>
    </div>
)

export default Projects;