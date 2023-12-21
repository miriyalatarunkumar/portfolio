import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../../public/assets/about.jpg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            As a CS undergrad, I intend to push my limits and make use of my
            abilities to the fullest to help achieve my short and long term
            goals. I believe in widening ones’ skill tree, thus I am excited to
            keep learning about new technologies.
          </p>
          <p className="py-2 text-gray-600">
            So far in my journey, I have delved into a lot of key areas of CS
            whilst learning a lot of things along the way. I specialize in
            building full-stack web applications. Though I am most proficient in
            building web applications using MERN stack, I am a quick learner and
            can pick up new tech stacks as needed. I believe that being a great
            developer is not using one specific language, but choosing the best
            tool for the job.
          </p>
          <p className="py-2 text-gray-600">
            I strongly believe that good communication and leadership lead to
            great results and I have been fortunate to have successfully led
            teams in curriculum projects and other non-technical events. I
            consider myself creative and hardworking, as my stats show. If you
            liked my profile so far, drop me a message and we'll discuss how I
            can be useful to your project.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
