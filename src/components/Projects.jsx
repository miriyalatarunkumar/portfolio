import Image from "next/image";
import Link from "next/link";
import React from "react";
import ShopSmart from "../../public/assets/projects/ShopSmart.jpeg";
import ProsePulse from "../../public/assets/projects/ProsePulse.png";
import portfolio from "../../public/assets/projects/portfolio.png";
import addtocart from "../../public/assets/projects/addtocart.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="ShopSmart"
            backgroundImg={ShopSmart}
            projectUrl="/shopsmart"
            tech="MERN Stack"
          />
          <ProjectItem
            title="ProsePulse"
            backgroundImg={ProsePulse}
            projectUrl="/prosepulse"
            tech="MERN Srack"
          />
          <ProjectItem
            title="Portfolio"
            backgroundImg={portfolio}
            projectUrl="/portfolio"
            tech="Next.js"
          />
          <ProjectItem
            title="Add-to-Cart"
            backgroundImg={addtocart}
            projectUrl="/addtocart"
            tech="HTML, CSS, JavaScript, Firebase"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
