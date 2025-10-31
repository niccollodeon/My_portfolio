"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import { 
  Tooltip, 
  TooltipContent, 
  TooltipProvider, 
  TooltipTrigger 
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";



const projects = [
    {
      num: '01',
      category: 'NALA Frontend',
      title: 'project 1',
      description: 
        "Created a responsive Web Application for Translating Philippine Dialectss.",
      stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
      image: "/assets/front2.png",
      live: "https://niccollodeon.github.io/NALA/",
      github: "https://github.com/niccollodeon/NALA",
    }, 
    {
      num: '02',
      category: 'AI Orange Classifier',
      title: 'project 2',
      description: 
        "Orange Classifier in Deep Learning using EfficientNetB0.",
      stack: [{ name: "Python" }, { name: "Tensorflow" }, { name: "Keras" }],
      image: "/assets/train3.png",
      live: "",
      github: "https://github.com/niccollodeon/OrangeClassifier_DeepLearning",
    }, 
    {
      num: '03',
      category: 'Portfolio',
      title: 'project 3',
      description: 
        "My very own responsive Portfolio using NextJS, React, and Tailwind.",
      stack: [{ name: "Next.js" }, { name: "Tailwind.css" }, { name: "Node.js" }],
      image: "/assets/port.png",
      live: "https://my-portfolio-niccollodeons-projects.vercel.app",
      github: "https://github.com/niccollodeon/My_portfolio",
    },
    {
      num: '04',
      category: 'LAYA (Legal Aid at Your Access)',
      title: 'project 4',
      description:
        "A Multilingual Conversational AI Chatbot for Philippine Laws, focused on data collection, NLP preprocessing, and model training for automated legal assistance.",
      stack: [{ name: "Python" }, { name: "Azure" }, { name: "Pytorch"}],
      image: "/assets/1.png",
      live: "",
      github: "https://github.com/jeisquaredd/LAYA",
    }, 
];

const Work = () => {
    const [project, setProject] = useState(projects[0]);

    const handleSlideChange = (swiper) => {
      // Get the current slide index
      const currentIndex = swiper.activeIndex;
      // Update the project state with the current project
      setProject(projects[currentIndex]);
    };

    return (
      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1, transition:{delay: 2.4, duration: 0.4, ease:"easeIn"} }} className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row xl:gap-[30px]">
            <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
              <div className="flex flex-col gap-[30px] h-[50%]">
                {/*outline num*/}
                <div className="text-8xl leading-none font-extrabold text-transparent
                text-outline">
                  {project.num}
                </div>
                {/*project category*/}
                <h2 className="text-[42px] font-bold leading-none text-white
                group-hover:text-indigo-900 transition-all duration-500 capitalize">
                  {project.category} project
                </h2>
                {/*project description*/}
                <p className="text-white/60">{project.description}</p>
                <ul className="flex gap-4">
                  {project.stack.map((item, index) => {
                    return (
                      <li key={index} className="text-xl text-indigo-900">
                        {item.name}
                        {/*remove last comma*/}
                        {index !== project.stack.length -1 && ","}
                      </li>
                    );
                  })}
                </ul>
                {/*border*/}
                <div className="border border-white/20"></div>
                {/*buttonss*/}
                <div className="flex items-center gap-4">
                  {/*live project*/}
                  <Link href={project.live}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full
                        bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl
                          group-hover:text-indigo-900" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                  {/*github*/}
                  <Link href={project.github}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full
                        bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl
                          group-hover:text-indigo-900" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full xl:w-[50%]">
              <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12" onSlideChange={handleSlideChange}>
                {projects.map((project, index) => {
                  return (
                    <SwiperSlide key={index} className="w-full">
                      <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                        {/*overlay*/}
                        <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                        {/*image*/}
                        <div className="relative w-full h-full">
                          <Image src={project.image} fill className="object-cover" alt="" />
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
                {/*slider buttons*/}
                <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" />
              </Swiper>
            </div> 
          </div>
        </div>
      </motion.section>
    );
};

export default Work;