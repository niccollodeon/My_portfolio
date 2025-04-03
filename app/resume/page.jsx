"use client";


import {
    FaHtml5, 
    FaCss3, 
    FaJs,
    FaReact,
    FaNodeJs,
    FaPython,
} from 'react-icons/fa';

import { SiTailwindcss, SiNextdotjs } from 'react-icons/si';

//about data
const about = {
    title:"About me",
    description: 
      "Some Information about me and where you can reach me.",
    info: [
      {
        fieldName: "Name",
        fieldValue: "Niccollo Dayrit"
      },
      {
        fieldName: "Phone",
        fieldValue: "0920 297 4733"
      },
      {
        fieldName: "Experience",
        fieldValue: "Undergrad"
      },
      {
        fieldName: "Facebook",
        fieldValue: "Niccollo Dayrit"
      },
      {
        fieldName: "Nationality",
        fieldValue: "Filipino"
      },
      {
        fieldName: "Email",
        fieldValue: "niccollodayrit25@gmail.com"
      },
      {
        fieldName: "Languages",
        fieldValue: "English, Tagalog"
      },
    ]
};

//experience data
const experience = {
  title: "My experience",
  descripion:
    "This showcases the projects I’ve worked on to sharpen my skills and expand my knowledge.",
  items: [
    {
      company: "Annika Dayrit Make-Up",
      position: "Fullstack Developer",
      duration: "2025 - 2026",
    },
    {
      company: "InuVators",
      position: "Machine Learning Developer",
      duration: "2024 - 2025",
    },
    {
      company: "InuVators",
      position: "Frontend Developer",
      duration: "2024 - 2025",
    },
    {
      company: "Deep Learning",
      position: "Machine Learninig Developer",
      duration: "2025",
    },
  ],
};

//education data
const education = {
    title: "My education",
    descripion:
      "A collection of the schools I’ve attended and the seminars I’ve joined to further my learning and growth.",
    items: [
      {
        institution: "National University Lipa",
        degree: "Degree in Computer Science",
        duration: "Currently studying",
      },
      {
        institution: "Philippine Computing Science Congress",
        degree: "Workshop Participant",
        duration: "2024",
      },
      {
        institution: "APEC Schools JRU Lipa",
        degree: "High school - Senior high school",
        duration: "2019 - 2020",
      },
      {
        institution: "IC3 Digital Literacy",
        degree: "IC3 Certification",
        duration: "2025",
      },

    ],
  };

//skills data
const skills ={
    title: "My skills",
    descripion: "A showcase of the programming languages, frameworks, and tools I use to build and develop web applications.",
    skillList: [
      {
        icon: <FaHtml5 />,
        name: "html 5",
      },
      {
        icon: <FaCss3 />,
        name: "css 3",
      },
      {
        icon: <FaJs />,
        name: "javascript",
      },
      {
        icon: <FaReact />,
        name: "react.js",
      },
      {
        icon: <SiTailwindcss />,
        name: "tailwind.css",
      },
      {
        icon: <FaNodeJs />,
        name: "node.js",
      },
      {
        icon: <SiNextdotjs />,
        name: "next.js",
      },
      {
        icon: <FaPython />,
        name: "python",
      },
      {
        icon: <img src="/ic3.png" alt="IC3 Badge" className="w-12 h-12" />,
        name: "IC3 Badge",
      }
    ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';

const Resume = () => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity:1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }}
        className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
      >
        <div className="container mx-auto">
          <Tabs 
            defaultValue='experience'
            className='flex flex-col xl:flex-row gap-[60px]'
          >
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0
            gap-6">
                <TabsTrigger value="experience">Experience</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
                <TabsTrigger value="about">About me</TabsTrigger>
            </TabsList>
            {/* content */}
            <div className='min-h-[70vh] w-full'>
              {/*experience*/}
              <TabsContent value="experience" className="w-full">
                 <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                    <h3 className='text-4xl font-bold'>{experience.title}</h3>
                    <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                       {experience.descripion}
                    </p>
                    <ScrollArea className="h-[400px]">
                        <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                          {experience.items.map((item, index)=> {
                            return (
                              <li 
                                key={index}
                                className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl
                                flex flex-col justify-center items-center lg:items-start
                                gap-1'
                              >
                                <span className='text-indigo-900'>{item.duration}</span>
                                <h3 className='text-xl max-w-[260px] min-h-[60px]
                                text-center lg:text-left'>
                                  {item.position}
                                </h3>
                                <div className='flex items-center gap-3'>
                                  {/*dot*/}
                                  <span className='w-[6px] h-[6px] rounded-full 
                                  bg-indigo-900'></span>
                                  <p className='text-white/60'>{item.company}</p>
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                    </ScrollArea>
                 </div>
              </TabsContent> 
              {/*education*/}
              <TabsContent value="education" className="w-full">
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                    <h3 className='text-4xl font-bold'>{education.title}</h3>
                    <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                       {education.descripion}
                    </p>
                    <ScrollArea className="h-[400px]">
                        <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                          {education.items.map((item, index)=> {
                            return (
                              <li 
                                key={index}
                                className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl
                                flex flex-col justify-center items-center lg:items-start
                                gap-1'
                              >
                                <span className='text-indigo-900'>{item.duration}</span>
                                <h3 className='text-xl max-w-[260px] min-h-[60px]
                                text-center lg:text-left'>
                                  {item.degree}
                                </h3>
                                <div className='flex items-center gap-3'>
                                  {/*dot*/}
                                  <span className='w-[6px] h-[6px] rounded-full 
                                  bg-indigo-900'></span>
                                  <p className='text-white/60'>{item.institution}</p>
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                    </ScrollArea>
                 </div>
              </TabsContent>
              {/*skills*/}
              <TabsContent value="skills" className="w-full h-full">
                <div className='flex flex-col gap-[30px]'>
                  <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                    <h3 className='text-4xl font-bold'>{skills.title}</h3>
                    <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                      {skills.descripion}
                    </p>
                  </div>
                  <ul className='grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 
                  xl:gap-[30px]'>
                    {skills.skillList.map((skill, index)=> {
                      return <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className='w-full h-[150px] 
                            bg-[#232329] rounded-xl flex justify-center items-center
                            group'>
                              <div className='text-6xl group-hover:text-indigo-900
                              transition-all duration-300'>
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className='capitalize'>{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>;
                    })}
                  </ul>
                </div>
              </TabsContent>
              {/*about*/} 
              <TabsContent 
                value="about" 
                className="w-full text-center xl:text-left"
              >
                 <div className='flex flex-col gap-[30px]'>
                  <h3 className='text-4xl font-bold'>{about.title}</h3>
                  <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                    {about.description}
                  </p>
                  <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px]
                  mx-auto xl:mx-0'>
                    {about.info.map((item,index)=> {
                      return (
                        <li 
                          key={index} 
                          className='flex items-center justify-center xl:justify-start
                          gap-4'
                        >
                          <span className='text-white/60'>{item.fieldName}</span>
                          <span className='text-xl'>{item.fieldValue}</span>
                        </li>
                      );
                    })}
                  </ul>
                 </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>  
      </motion.div>
    );
}

export default Resume;