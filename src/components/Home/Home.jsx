import React, { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import stars from "../../assets/Home/stars.png";
import man from "../../assets/Home/man.png";
import M1 from "../../assets/Home/monutain_01.png";
import M2 from "../../assets/Home/monutain_02.png";
import moon from "../../assets/Home/moon.png";
import M3 from "../../assets/Home/mountains_behind.png";
import plant from "../../assets/Home/plants.png";
import Tree1 from "../../assets/Home/trees_01.png";
import Tree2 from "../../assets/Home/trees_02.png";
import { gsap } from "gsap";
import "./Home.css"

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    const starsRef = useRef(null);
    const moonRef = useRef(null);
    const m1Ref = useRef(null);
    const m2Ref = useRef(null);
    const btnRef = useRef(null);
    const textRef = useRef(null);
    const manRef = useRef(null);
    const plantsRef = useRef(null);
    const m3Ref = useRef(null);
    const tree1Ref = useRef(null);
    const tree2Ref = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const value = window.scrollY;
            if (starsRef.current) starsRef.current.style.left = value * 0.25 + 'px';
            if (moonRef.current) moonRef.current.style.top = value * 0.5 + 'px';
            if (textRef.current) textRef.current.style.marginRight = value * 4 + 'px';
            if (moonRef.current) moonRef.current.style.top = value * 1.05 + 'px';
            if (btnRef.current) btnRef.current.style.marginTop = value * 1.5 + 'px';
        };

        window.addEventListener('scroll', handleScroll);

        let mm = gsap.matchMedia();

        mm.add("(min-width:1000px)", () => {
            gsap.from(m1Ref.current, {
                scrollTrigger: { scrub: true },
                y: 300,
            });
            gsap.from(m2Ref.current, {
                scrollTrigger: { scrub: true },
                y: 150,
            });
            gsap.from(textRef.current, {
                scrollTrigger: { scrub: true },
                x: 50,
            });
            gsap.from(manRef.current, {
                scrollTrigger: { scrub: true },
                x: -250,
            });
            gsap.from(plantsRef.current, {
                scrollTrigger: { scrub: true },
                x: -150,
            });
            gsap.from(tree1Ref.current, {
                scrollTrigger: { scrub: true },
                x: -50,
            });
            gsap.from(tree2Ref.current, {
                scrollTrigger: { scrub: true },
                x: 50,
            });
        });

        mm.add("(max-width:999px)", () => {
            gsap.from(m1Ref.current, {
                scrollTrigger: { scrub: true },
                y: 18,
            });
            gsap.from(m2Ref.current, {
                scrollTrigger: { scrub: true },
                y: 14,
            });
            gsap.from(textRef.current, {
                scrollTrigger: { scrub: true },
                x: 14,
            });
            gsap.from(manRef.current, {
                scrollTrigger: { scrub: true },
                x: -20,
            });
            gsap.from(plantsRef.current, {
                scrollTrigger: { scrub: true },
                x: -18,
            });
            gsap.from(tree1Ref.current, {
                scrollTrigger: { scrub: true },
                x: -10,
            });
            gsap.from(tree2Ref.current, {
                scrollTrigger: { scrub: true },
                x: 10,
            });
        });

        // Clean up event listeners on unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
            <section class="parallex" id='home'>
                <img src={stars} ref={starsRef} id="stars" alt="stars" />
                <img src={moon} ref={moonRef} id="moon" alt="moon" />
                <h1 ref={textRef} id="text">Janumala Akhilendra</h1>
                {/* <img src={M3} ref={m3Ref} id="m3" alt="mountain background" /> */}
                <a href="#" ref={btnRef} id="btn">Explore</a>
                <img src={M1} ref={m1Ref} id="m1" alt="mountain 1" />
                <img src={Tree1} ref={tree1Ref} id="t2" alt="tree 1" />
                <img src={M2} ref={m2Ref} id="m2" alt="mountain 2" />
                <img src={Tree2} ref={tree2Ref} id="t1" alt="tree 2" />
                <img src={man} ref={manRef} id="man" alt="man" />
                <img src={plant} ref={plantsRef} id="plants" alt="plants" />
            </section>
    );
};

export default Home;
