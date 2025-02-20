import React from 'react'
import {motion} from 'framer-motion'
const About = () => {
  return (
    <section id="about" className=' w-full py-20 bg-[#2E2B2B] px-6 md:px-16'>
        <div className='container mx-auto flex flex-col md:flex-row items-center justify-between  space-y-12 md:space-y-0'>
            <div className='flex-1 flex flex-col justify-center items-start space-y-6 md:space-y-8'>
                <motion.h2
                 className='text-4xl md:text-5xl font-extrabold text-[#d97706]'
                 initial={{opacity:0,y:-50}}
                whileInView={{opacity:1,y:0}}
                viewport={{once:false,amount:0.5}}
                transition={{duration:0.8}}
                        >
                            About Me
                </motion.h2>
                <motion.p
                 className='text-lg md:text-xl text-gray-300'
                 initial={{opacity:0,y:50}}
                whileInView={{opacity:1,y:0}}
                viewport={{once:false,amount:0.5}}
                transition={{duration:0.8,delay:0.2}}
                        >
                Hi, I'm Aryan Nagar, an Electronics and Communication Engineering student with a deep passion for coding. While my academic background is in EC, I have found my true calling in programming, which has transformed my life in ways I never imagined.

Coding and DSA have not only sharpened my problem-solving skills but have also taught me to think in a structured and logical manner. I love tackling DSA and math problems, as they challenge me to push my limits and refine my analytical thinking.
       
                </motion.p>
                <motion.p
                 className='text-lg md:text-xl text-gray-300'
                 initial={{opacity:0,y:50}}
                whileInView={{opacity:1,y:0}}
                viewport={{once:false,amount:0.5}}
                transition={{duration:0.8,delay:0.4}}
                        >
                Beyond DSA, I enjoy exploring full-stack development, creating innovative projects, and constantly learning new technologies. The ability to build functional and impactful applications excites me, and I am always eager to enhance my skills.

For me, coding is more than just writing lines of code—it's about solving real-world problems, improving efficiency, and making a difference in the digital world. I'm on a journey to grow as a software developer, and I look forward to embracing every challenge along the way!
       
                </motion.p>

                <motion.a
                  href="My_Resume.pdf"
                  className='inline-block mt-6 px-8 py-3 bg-[#d97706] text-lg font-semibold '
                  initial={{opacity:0,y:50}}
                  whileInView={{opacity:1,y:0}}
                  viewport={{once:false,amount:0.5}}
                  transition={{duration:0.8}}
                  onClick={() => window.open('/Aryan_Nagar_Resume.pdf', '_blank')}
                >
                     Download My Resume
                </motion.a>
            </div>

            <div className='flex-1 '>
                <motion.img
                initial={{opacity:0,x:-100}}
                whileInView={{opacity:1,x:0}}
                viewport={{once:false,amount:0.5}}
                transition={{duration:0.8}}
                 src="image2.png"
                 className='w-full h-auto transform hover:scale-105 transition duration-300'
                >

                </motion.img>
            </div>
        </div>
    </section>
  )
}

export default About