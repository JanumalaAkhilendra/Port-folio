import React from 'react'
import "./Project.css"
import calclogo from "../../assets/Projects/calclogo.jpg"
import covidlogo from "../../assets/Projects/covidlogo.jpg"
import chatbott from "../../assets/Projects/chatbott.png"
import datalogo from "../../assets/Projects/datalogo.jpg"
import expenselogo from "../../assets/Projects/expenselogo.jpg"
import Flappybird from "../../assets/Projects/flappy-birdlogo.jpg"
import songlogo from "../../assets/Projects/songlogo.jpg"

const Project = () => {
    return (
        <div>
            <>
                <section class="projectsection" id="projectsection">
                <div className="projecttitle">
                    <h2>PROJECTS</h2>
                </div>
                <div className="container">
                    <div className="card">
                        <div className="imgbx">
                            <img src={datalogo} />
                        </div>
                        <div className="content">
                            <h2>Data Saver</h2>
                            <ul>
                                <li>It is a Chrome Extension</li>
                                <li>It is used as Data Saver</li>
                                <li>Made using JavaScript</li>
                            </ul>
                        </div>
                    </div>
                    <div className="card">
                        <div className="imgbx">
                            <img src={chatbott} />
                        </div>
                        <div className="content">
                            <h2> ChatBot</h2>
                            <ul>
                                <li>It is a Friendly ChatBot.</li>
                                <li>It has many Applications.</li>
                                <li>Made using IBM Watson Assitant.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="card">
                        <div className="imgbx">
                            <img src={expenselogo} />
                        </div>
                        <div className="content">
                            <h2> Expensium</h2>
                            <ul>
                                <li>It is a Monthly Expense Calculating WebApp .</li>
                                <li>Machine Learning Based Project.</li>
                                <li>Made using Django ,Mysql.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="card">
                        <div className="imgbx">
                            <img src={covidlogo} />
                        </div>
                        <div className="content">
                            <h2> Covid Predictor</h2>
                            <ul>
                                <li>It is a Covid Virus Detecting WebApp. </li>
                                <li>Machine Learning Based Project.</li>
                                <li>Made using Flask ,Mysql.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="card">
                        <div className="imgbx">
                            <img src={Flappybird} />
                        </div>
                        <div className="content">
                            <h2>Flappy Bird</h2>
                            <ul>
                                <li>It is a 2-Dimensional Game. </li>
                                <li>It has More Than 2 Levels.</li>
                                <li>Made using PyGame ,Python.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="card">
                        <div className="imgbx">
                            <img src={songlogo} />
                        </div>
                        <div className="content">
                            <h2>Spotify Clone</h2>
                            <ul>
                                <li>It is a Music App. </li>
                                <li>It has Dark and Light Theme.</li>
                                <li>Made using JavaScript,Html.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="card">
                        <div className="imgbx">
                            <img src={calclogo} />
                        </div>
                        <div className="content">
                            <h2> Calculator</h2>
                            <ul>
                                <li>It is a Multi-Purpose Calculator. </li>
                                <li>It has 20+ Functions.</li>
                                <li>Made using Tkinter, Python.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                </section>
            </>

        </div>
       
    )
}

export default Project
