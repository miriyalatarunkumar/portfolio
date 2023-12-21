import Image from "next/image";
import React from "react";
import portfolio from "../../../public/assets/projects/portfolio.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const Portfolio = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={portfolio}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Portfolio</h2>
          <h3>Next.js</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Crafted a personal portfolio site, highlighting education,
              technical expertise, and contact form for collaborations.
            </li>
            <li>
              Used modern web technologies for interactive layout, prioritized
              responsive design for enhanced user experience.
            </li>
          </ul>
          <a
            href="https://github.com/miriyalatarunkumar/portfolio"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          <a
            href="https://portfolio-miriyalatarunkumar.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Demo</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> JavaScript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Tailwind CSS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Next.js
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <button className="px-8 py-2 mt-4 mr-8">Back</button>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
