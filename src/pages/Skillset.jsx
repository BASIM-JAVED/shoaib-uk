import React from "react";
// import { Container } from "react-bootstrap";

import Particle from '../components/Particle'
// import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
// import Particle from "../components/Particle";
// import resume from "../assets/projects/resume.png";
import cloud from "../assets/projects/cloud.png";
import quiz from "../assets/projects/1.jpg";
import landing from "../assets/projects/2.jpg";
import landing1 from "../assets/projects/3.jpg";
import landing2 from "../assets/projects/4.jpg";
import landing3 from "../assets/projects/5.jpg";
import landing4 from "../assets/projects/1 (1).jpg";
import landing5 from "../assets/projects/1 (2).jpg";
import landing6 from "../assets/projects/1 (3).jpg";
import landing7 from "../assets/projects/1 (4).jpg";
import landing8 from "../assets/projects/1 (5).jpg";
import landing9 from "../assets/projects/1 (6).jpg";
import landing10 from "../assets/projects/1 (7).jpg";
import landing11 from "../assets/projects/1 (8).jpg";
import landing12 from "../assets/projects/2 (1).jpg";
import landing13 from "../assets/projects/2 (2).jpg";
import landing14 from "../assets/projects/2 (3).jpg";
import landing15 from "../assets/projects/2 (4).jpg";
import landing16 from "../assets/projects/2 (5).jpg";


import kick from "../assets/projects/kick.png";
// import Techstack from "../components/Skillset/Techstack";
// import Toolstack from "../components/Skillset/Toolstack";
// import Leetcode from "../components/Skillset/Leetcode";
// import Github from "../components/Skillset/Github";

const Skillset = () => {
  return (
    <Container fluid className="project-section">
    <Particle />
    <Container>
      <h1 className="project-heading">
         <strong className="yellow">CERTIFICATIONS </strong>
      </h1>
      <p style={{ color: "white" }}>
        Here are a some Certifications I've done.
      </p>
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={quiz}
            isBlog={false}
            // title="Data Science"

            // ghLink="https://github.com/BASIM-JAVED/QUIZ-APP"
            // demoLink="https://master--jovial-crumble-42eb99.netlify.app/game"
          />
        </Col>

       
        

       

        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={landing}
            isBlog={false}
            // title="LANDING PAGE"
            // description="Project Krypto is a Web 3 project that utilizes an Ethereum smart contract created using Solidity. It allows users to interact with their Metamask wallet and send Ethereum."
            // ghLink="https://github.com/BASIM-JAVED/Landing-page"
            // demoLink="https://main--dazzling-tapioca-71894a.netlify.app/"
          />
        </Col>

        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={landing1}
            isBlog={false}
            // title="LANDING PAGE"
            // description="Project Krypto is a Web 3 project that utilizes an Ethereum smart contract created using Solidity. It allows users to interact with their Metamask wallet and send Ethereum."
            // ghLink="https://github.com/BASIM-JAVED/Landing-page"
            // demoLink="https://main--dazzling-tapioca-71894a.netlify.app/"
          />
        </Col>

        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={landing2}
            isBlog={false}
            // title="LANDING PAGE"
            // description="Project Krypto is a Web 3 project that utilizes an Ethereum smart contract created using Solidity. It allows users to interact with their Metamask wallet and send Ethereum."
            // ghLink="https://github.com/BASIM-JAVED/Landing-page"
            // demoLink="https://main--dazzling-tapioca-71894a.netlify.app/"
          />
        </Col>

        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={landing3}
            isBlog={false}
            // title="LANDING PAGE"
            // description="Project Krypto is a Web 3 project that utilizes an Ethereum smart contract created using Solidity. It allows users to interact with their Metamask wallet and send Ethereum."
            // ghLink="https://github.com/BASIM-JAVED/Landing-page"
            // demoLink="https://main--dazzling-tapioca-71894a.netlify.app/"
          />
        </Col>

        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={landing4}
            isBlog={false}
            // title="LANDING PAGE"
            // description="Project Krypto is a Web 3 project that utilizes an Ethereum smart contract created using Solidity. It allows users to interact with their Metamask wallet and send Ethereum."
            // ghLink="https://github.com/BASIM-JAVED/Landing-page"
            // demoLink="https://main--dazzling-tapioca-71894a.netlify.app/"
          />
        </Col>
        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={landing5}
            isBlog={false}
            // title="LANDING PAGE"
            // description="Project Krypto is a Web 3 project that utilizes an Ethereum smart contract created using Solidity. It allows users to interact with their Metamask wallet and send Ethereum."
            // ghLink="https://github.com/BASIM-JAVED/Landing-page"
            // demoLink="https://main--dazzling-tapioca-71894a.netlify.app/"
          />
        </Col>
        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={landing6}
            isBlog={false}
            // title="LANDING PAGE"
            // description="Project Krypto is a Web 3 project that utilizes an Ethereum smart contract created using Solidity. It allows users to interact with their Metamask wallet and send Ethereum."
            // ghLink="https://github.com/BASIM-JAVED/Landing-page"
            // demoLink="https://main--dazzling-tapioca-71894a.netlify.app/"
          />
        </Col>
        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={landing7}
            isBlog={false}
            // title="LANDING PAGE"
            // description="Project Krypto is a Web 3 project that utilizes an Ethereum smart contract created using Solidity. It allows users to interact with their Metamask wallet and send Ethereum."
            // ghLink="https://github.com/BASIM-JAVED/Landing-page"
            // demoLink="https://main--dazzling-tapioca-71894a.netlify.app/"
          />
        </Col>
        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={landing8}
            isBlog={false}
            // title="LANDING PAGE"
            // description="Project Krypto is a Web 3 project that utilizes an Ethereum smart contract created using Solidity. It allows users to interact with their Metamask wallet and send Ethereum."
            // ghLink="https://github.com/BASIM-JAVED/Landing-page"
            // demoLink="https://main--dazzling-tapioca-71894a.netlify.app/"
          />
        </Col>
        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={landing9}
            isBlog={false}
            // title="LANDING PAGE"
            // description="Project Krypto is a Web 3 project that utilizes an Ethereum smart contract created using Solidity. It allows users to interact with their Metamask wallet and send Ethereum."
            // ghLink="https://github.com/BASIM-JAVED/Landing-page"
            // demoLink="https://main--dazzling-tapioca-71894a.netlify.app/"
          />
        </Col>
        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={landing10}
            isBlog={false}
            // title="LANDING PAGE"
            // description="Project Krypto is a Web 3 project that utilizes an Ethereum smart contract created using Solidity. It allows users to interact with their Metamask wallet and send Ethereum."
            // ghLink="https://github.com/BASIM-JAVED/Landing-page"
            // demoLink="https://main--dazzling-tapioca-71894a.netlify.app/"
          />
        </Col>
        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={landing11}
            isBlog={false}
            // title="LANDING PAGE"
            // description="Project Krypto is a Web 3 project that utilizes an Ethereum smart contract created using Solidity. It allows users to interact with their Metamask wallet and send Ethereum."
            // ghLink="https://github.com/BASIM-JAVED/Landing-page"
            // demoLink="https://main--dazzling-tapioca-71894a.netlify.app/"
          />
        </Col>
        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={landing12}
            isBlog={false}
            // title="LANDING PAGE"
            // description="Project Krypto is a Web 3 project that utilizes an Ethereum smart contract created using Solidity. It allows users to interact with their Metamask wallet and send Ethereum."
            // ghLink="https://github.com/BASIM-JAVED/Landing-page"
            // demoLink="https://main--dazzling-tapioca-71894a.netlify.app/"
          />
        </Col>
        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={landing13}
            isBlog={false}
            // title="LANDING PAGE"
            // description="Project Krypto is a Web 3 project that utilizes an Ethereum smart contract created using Solidity. It allows users to interact with their Metamask wallet and send Ethereum."
            // ghLink="https://github.com/BASIM-JAVED/Landing-page"
            // demoLink="https://main--dazzling-tapioca-71894a.netlify.app/"
          />
        </Col>
        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={landing14}
            isBlog={false}
            // title="LANDING PAGE"
            // description="Project Krypto is a Web 3 project that utilizes an Ethereum smart contract created using Solidity. It allows users to interact with their Metamask wallet and send Ethereum."
            // ghLink="https://github.com/BASIM-JAVED/Landing-page"
            // demoLink="https://main--dazzling-tapioca-71894a.netlify.app/"
          />
        </Col>
        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={landing15}
            isBlog={false}
            // title="LANDING PAGE"
            // description="Project Krypto is a Web 3 project that utilizes an Ethereum smart contract created using Solidity. It allows users to interact with their Metamask wallet and send Ethereum."
            // ghLink="https://github.com/BASIM-JAVED/Landing-page"
            // demoLink="https://main--dazzling-tapioca-71894a.netlify.app/"
          />
        </Col>
        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={landing16}
            isBlog={false}
            // title="LANDING PAGE"
            // description="Project Krypto is a Web 3 project that utilizes an Ethereum smart contract created using Solidity. It allows users to interact with their Metamask wallet and send Ethereum."
            // ghLink="https://github.com/BASIM-JAVED/Landing-page"
            // demoLink="https://main--dazzling-tapioca-71894a.netlify.app/"
          />
        </Col>
        


       

        
      </Row>
    </Container>
  </Container>
  )
}

export default Skillset