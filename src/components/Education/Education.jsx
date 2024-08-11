import React from 'react'
import "./Education.css"
import BJM from "../../assets/Education/bjmlogo.png"
import DAV from "../../assets/Education/DAVlogo.webp"
import GGU from "../../assets/Education/gurulogo.jpg"

const Education = () => {
    return (
        <div>
            <section
                className="education"
                id="educations"
                style={{ background: "#2a2a2a" }}
            >
                <div className="projecttitle">
                    <h2>EDUCATION</h2>
                </div>
                <div className="educations">
                    <div className="contain">
                        <div className="card">
                            <div className="face face1">
                                <div className="content">
                                    <img src={GGU} />
                                    <h3>Bachelore of Technology </h3>
                                </div>
                            </div>
                            <div className="face face2">
                                <div className="content">
                                    <p>Institute of Technology , Guru Ghasidas University</p>
                                    <p>2020-2024</p>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="face face1">
                                <div className="content">
                                    <img src={BJM} />
                                    <h3>Higher Secondary Education</h3>
                                </div>
                            </div>
                            <div className="face face2">
                                <div className="content">
                                    <p>BJM Carmel Academy,Tukum ,Chandrapur</p>
                                    <p>2018-2019</p>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="face face1">
                                <div className="content">
                                    <img src={DAV} />
                                    <h3>Senior Secondary Education</h3>
                                </div>
                            </div>
                            <div className="face face2">
                                <div className="content">
                                    <p>DAV Sr. Sec. Public School,Rihand nagar,Sonebhadra</p>
                                    <p>2016-2017</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Education
