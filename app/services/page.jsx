"use client"; 

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
    {
     num: '01',
     title:'FullStack Web Development',
     description:
       "Building dynamic and responsive web applications from front to back, using modern frameworks, databases, and best practices to deliver seamless user experiences.",
     href: ""
    },
    {
     num: '02',
     title:'Backend Development',
     description:
       "Designing and implementing robust server-side logic, databases, and APIs to ensure efficient, secure, and scalable web applications.",
     href: ""
    },
    {
     num: '03',
     title:'Frontend Development',
     description:
       "Creating intuitive and responsive user interfaces using modern frameworks and design principles to enhance user experience and engagement.",
     href: ""
    },
    {
     num: '04',
     title:'Machine Learning & AI',
     description:
       "Leveraging AI and machine learning technologies to build intelligent applications that can learn, adapt, and provide personalized experiences for users.",
     href: ""
    },
];

import { delay, motion } from "framer-motion";

const Services = () => {
    return (
      <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
          >
            {services.map((service, index) => {
              return (
                <div 
                  key={index}
                  className="flex-1 flex flex-col justify-center gap-6 group"
                >
                  {/* top */}
                  <div className="w-full flex justify-between items-center">
                    <div className="text-5xl font-extrabold text-outline
                    text-transparent group-hover:text-outline-hover transition-all
                    duration-500">
                      {service.num}
                    </div>
                    <Link 
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white
                    group-hover:bg-indigo-900 transition-all duration-500 flex
                    justify-center items-center hover:-rotate-45"
                    >
                      <BsArrowDownRight className="text-primary text-3xl" />
                    </Link>
                  </div>
                  {/* title */}
                  <h2 className="text-[42px] font-bold leading-none text-white
                    group-hover:text-indigo-900 transition-all duration-500">
                    {service.title}
                  </h2>
                  {/* description */}
                  <p className="text-white/60">{service.description}</p>
                  {/* border */}
                  <div className="border-b border-white/20 w-full"></div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>
    );
};

export default Services;