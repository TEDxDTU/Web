import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Landing() {

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <div id="hexcontainer" >
            <div className="hex1" data-aos="fade-up">
                <div className="hex2">
                    <a className="hexlink" id="hl1" href="#">
                        <div className="hexcover"></div>
                        <h3>Tanjirou</h3>
                    </a>
                </div>
            </div>
            <div className="hex1" data-aos="fade-up">
                <div className="hex2">
                    <a className="hexlink" id="hl2" href="#">
                        <div className="hexcover"></div>
                        <h3>Tanjirou</h3>
                    </a>
                </div>
            </div>
            <div className="hex1" data-aos="fade-up">
                <div className="hex2">
                    <a className="hexlink" id="hl3" href="#">
                        <div className="hexcover"></div>
                        <h3>Tanjirou</h3>
                    </a>
                </div>
            </div>

            <br />

            <div className="hex1" data-aos="fade-up">
                <div className="hex2">
                    <a className="hexlink" id="hl4" href="#">
                        <div className="hexcover"></div>
                        <h3>Tanjirou</h3>

                    </a>
                </div>
            </div>
            <div className="hex1" data-aos="fade-up">
                <div className="hex2">
                    <a className="hexlink" id="hl5" href="#">
                        <div className="hexcover"></div>
                        <h3>Tanjirou</h3>

                    </a>
                </div>
            </div>
            <div className="hex1" data-aos="fade-up">
                <div className="hex2">
                    <a className="hexlink" id="hl6" href="#">
                        <div className="hexcover"></div>
                        <h3>Tanjirou</h3>
                    </a>
                </div>
            </div>
            <div className="hex1" data-aos="fade-up">
                <div className="hex2">
                    <a className="hexlink" id="hl7" href="#">
                        <div className="hexcover"></div>
                        <h3>Tanjirou</h3>

                    </a>
                </div>
            </div>

            <br />

            <div className="hex1" data-aos="fade-up">
                <div className="hex2">
                    <a className="hexlink" id="hl8" href="#">
                        <div className="hexcover"></div>
                        <h3>Tanjirou</h3>

                    </a>
                </div>
            </div>
            <div className="hex1" data-aos="fade-up">
                <div className="hex2">
                    <a className="hexlink" id="hl9" href="#">
                        <div className="hexcover"></div>
                        <h3>Tanjirou</h3>

                    </a>
                </div>
            </div>
            <div className="hex1" data-aos="fade-up">
                <div className="hex2">
                    <a className="hexlink" id="hl10" href="#">
                        <div className="hexcover"></div>
                        <h3>Tanjirou</h3>

                    </a>
                </div>
            </div>
        </div>);
}