import Image from "next/image";
import React from "react";
import ShopSmart from "../../../public/assets/projects/ShopSmart.jpeg";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const shopsmart = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={ShopSmart}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">ShopSmart</h2>
          <h3>MERN Stack</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Developed a responsive e-commerce web application with features
              such as an admin panel, payment gateway (Braintree),
              authentication (JWT), and order management.
            </li>
            <li>
              Facilitated user functionalities including registration, login,
              password reset, profile updates, and product searches.
            </li>
            <li>
              Designed a product catalog with features like product
              recommendations, filtering by name, price, and category.
            </li>
            <li>
              Employed MVC patterns with Mongoose for efficient backend
              operations and managing CRUD operations.
            </li>
          </ul>
          <a
            href="https://github.com/miriyalatarunkumar/ShopSmart"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          <a
            href="https://shopsmart-miriyalatarunkumar.cyclic.cloud/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Demo</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1 ">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> HTML/CSS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> JavaScript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Bootstrap
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> MongoDB
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Node.js
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Express.js
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

export default shopsmart;
