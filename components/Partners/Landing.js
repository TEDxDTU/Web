import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Landing() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div id="hexcontainer">
      <div className="hex1" data-aos="fade-up">
        <div className="hex2">
          <a className="hexlink" id="hl1" href="#">
            <div className="hexcover"></div>
            <h3>The Tatva</h3>
          </a>
        </div>
      </div>
    </div>
  );
}
