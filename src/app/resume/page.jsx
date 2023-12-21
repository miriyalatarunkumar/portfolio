import React from "react";
import Head from "next/head";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const resume = () => {
  return (
    <>
      <Head>
        <title>Tarun Kumar | Resume</title>
        <meta
          name="description"
          content="I’m a full stack web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/tar.png" />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <h2 className="text-center">Resume</h2>
        <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center">Tarun Kumar Miriyala</h2>
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/tarun-kumar-miriyala-392691202/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href="https://github.com/miriyalatarunkumar"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={20} style={{ marginRight: "1rem" }} />
            </a>
          </div>
        </div>
        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          <div className="hidden sm:block">
            <p>
              Full Stack Web Development <span className="px-1">|</span> Complex
              Problem Solving
            </p>
          </div>
          <div className="block sm:hidden">
            <p>Proven Leadership</p>
            <p className="py-2">Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          Analytical, innovative, and motivated web development professional
          with experience in team leadership in fast-paced and challenging
          environments. Adept at developing strategies and driving streamlined
          operations. Diverse analytical skills, team collaboration, and
          relationship building. Consummate professional, and motivated leader,
          with solid interpersonal abilities and complex problem-solving skills.
          Effective and proven track record of critical thinking, idea
          generation, and optimizing efficiencies.
        </p>

        {/* Skills */}
        <div className="py-4">
          <h5 className="text-center underline text-[18px] py-2">
            Technical Skills
          </h5>
          <p className="py-2">
            <span className="font-bold">Languages: </span>C, C++, JavaScript,
            HTML, CSS, Python, SQL
          </p>
          <p className="py-2">
            <span className="font-bold">Databases: </span>MySQL, MongoDB
          </p>
          <p className="py-2">
            <span className="font-bold">Frameworks: </span>React, Node.js,
            Express.js
          </p>
          <p className="py-2">
            <span className="font-bold">Coursework: </span>DBMS, OS, CN, OOPs,
            SDLC, DSA, DAA
          </p>
          <p className="py-2">
            <span className="font-bold">Developer Tools: </span>Git, GitHub,
            Postman, VS Code, Visual Studio, PyCharm
          </p>
        </div>
        <h5 className="text-center underline text-[18px] py-4">Education</h5>
        {/* Experience */}
        <div className="py-4">
          <p className="italic">
            <span className="font-bold italic">PDPM IIITDM JABALPUR</span>
            <span className="px-2">|</span>Madhya Pradesh, IN
          </p>
          <p className="py-1 italic">
            Bachelor of Technology in Computer Science and Engineering ( Nov.
            2020 &ndash; May 2024 (Expected) )
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>CPI: 8.8/10</li>
          </ul>
        </div>
        <div className="py-4">
          <p className="italic">
            <span className="font-bold italic">
              Sri Chaitanya Junior Kalasala
            </span>
            <span className="px-2">|</span>Hyderabad, Telangana, IN
          </p>
          <p className="py-1 italic">
            Sri Chaitanya Junior Kalasala ( May 2018 &ndash; May 2020 )
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>Percentage: 98.10%</li>
          </ul>
        </div>
        <div className="py-4">
          <p className="italic">
            <span className="font-bold italic">
              Anweshini Grammar High School
            </span>
            <span className="px-2">|</span>Hyderabad, Telangana, IN
          </p>
          <p className="py-1 italic">
            Secondary School Education ( May 2010 &ndash; May 2018 )
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>CGPA: 9.8/10</li>
          </ul>
        </div>
        <h5 className="text-center underline text-[18px] py-4">Experience</h5>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">FUSION - INSTITIUTE ERP</span>
            <span className="px-2">|</span>PDPM IIITDM JABALPUR, MP, IN
          </p>
          <p className="py-1 italic">
            Frontend Developer | React.js ( Jan. 2023 &ndash; May 2023)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Designed and developed the screens of different modules of
              Institute&apos;s ERP Website and App - FUSION.
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center tracking-widest uppercase text-[#5651e5]">
        <a
          href="https://drive.google.com/file/d/1Acz6F7OIPsj4Lc2yQGXqsAgTnO-8psPm/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <button className="p-2 text-gray-100">Resume</button>
        </a>
      </div>
      <div>
        <br></br>
        <br></br>
      </div>
    </>
  );
};

export default resume;
