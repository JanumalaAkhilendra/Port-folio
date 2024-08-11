import React from 'react'
import './Facts.css'

const Facts = () => {
    return (
        <div>
            <section className="factz" id="factz">
                <div className="projecttitle">
                    <h2>FACTS</h2>
                </div>
                <div className="container">
                    <div className="box">
                        <div className="shadow" />
                        <div className="content">
                            <div className="number">
                                <p>
                                    Group Projects <span />
                                </p>
                            </div>
                            <div className="percent" data-text="5+">
                                <div className="dot" />
                                <svg>
                                    <circle cx={70} cy={70} r={70} />
                                    <circle cx={70} cy={70} r={70} />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <div className="shadow" />
                        <div className="content">
                            <div className="number">
                                <p>
                                    Solo Projects
                                    <span />
                                </p>
                            </div>
                            <div className="percent" data-text="10+">
                                <div className="dot" />
                                <svg>
                                    <circle cx={70} cy={70} r={70} />
                                    <circle cx={70} cy={70} r={70} />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <div className="shadow" />
                        <div className="content">
                            <div className="number">
                                <p>
                                    Certifications
                                    <span />
                                </p>
                            </div>
                            <div className="percent" data-text="20+">
                                <div className="dot" />
                                <svg>
                                    <circle cx={70} cy={70} r={70} />
                                    <circle cx={70} cy={70} r={70} />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <div className="shadow" />
                        <div className="content">
                            <div className="number">
                                <p>
                                    Hackathons
                                    <span />
                                </p>
                            </div>
                            <div className="percent" data-text="5+">
                                <div className="dot" />
                                <svg>
                                    <circle cx={70} cy={70} r={70} />
                                    <circle cx={70} cy={70} r={70} />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <div className="shadow" />
                        <div className="content">
                            <div className="number">
                                <p>
                                    Event Organised
                                    <span />
                                </p>
                            </div>
                            <div className="percent" data-text="3+">
                                <div className="dot" />
                                <svg>
                                    <circle cx={70} cy={70} r={70} />
                                    <circle cx={70} cy={70} r={70} />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Facts
