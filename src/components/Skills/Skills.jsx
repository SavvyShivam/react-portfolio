import React from "react";
import { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import "./Skills.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faBootstrap,
  faSass,
  faGithub,
  faNodeJs,
  faStackOverflow,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";

const Skills = () => {
  const [letterClass, setLetterClass] = useState("text_animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text_animate_hover");
    }, 3000);
  }, []);

  return (
    <>
      <div className="container skills_page">
        <div className="text_zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["S", "k", "i", "l", "l", "s"]}
              idx={15}
            />
          </h1>
          <p>
            I am a front-end web developer well versed in technologies like
            <span class="tech_tag"> HTML5</span>,
            <span class="tech_tag"> CSS3</span>,
            <span class="tech_tag"> JavaScript</span>,
            <span class="tech_tag"> React</span>,
            <span class="tech_tag"> Bootstrap</span>,
            <span class="tech_tag"> Tailwind Css</span>,
            <span class="tech_tag"> Git</span>,
            <span class="tech_tag"> Sass/Scss</span>,etc.
          </p>
          <p>
            I’m not a designer but I have a good sense of aesthetics, and
            experience in responsive, web design. I put special effort into
            optimizing my code and providing the best user experience. I would
            love to give you any kind of support also after the project's
            completion.
          </p>
          <p>
            Visit my
            <a
              target="_blank"
              href="https://www.linkedin.com/in/shivam-kumar-091831190/"
            >
              {" "}
              LinkedIn{" "}
            </a>
            and
            <a target="_blank" href="https://github.com/SavvyShivam">
              {" "}
              Github{" "}
            </a>
            profile for more details.
          </p>
        </div>

        <div className="logos_container">
          <div className="logos">
            <p>
              <FontAwesomeIcon icon={faBootstrap} color="#8F0DFF" />
            </p>
            <p>
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </p>
            <p>
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </p>
            <p>
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </p>
            <p>
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </p>
            <p>
              <FontAwesomeIcon icon={faSass} color="#CD6799" />
            </p>
            <p>
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </p>
            <p>
              <FontAwesomeIcon icon={faGithub} color="#050505" />
            </p>
            <p>
              <FontAwesomeIcon icon={faNodeJs} color="#68A063" />
            </p>
            <p>
              <FontAwesomeIcon icon={faMedium} color="#fff" />
            </p>
            <p>
              <FontAwesomeIcon icon={faStackOverflow} color="#cc5500" />
            </p>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Skills;
