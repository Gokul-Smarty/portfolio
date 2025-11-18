import React, { useEffect,useRef, useState } from 'react'
import './App.css'
import mypic from './assets/mypic1.png'
import iconpic from './assets/formal_pic.jpeg'
import menu from './assets/menu_icon.png'
import icon from './assets/icon1.jpg'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom'



const skillsData = {
  frontend: [
    { name: "HTML", level: 95 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 75 },
    { name: "Bootstrap", level: 85 },
    { name: "Tailwind Css", level: 85 },
    { name: "React", level: 90 }
  ],
  backend: [
    { name: "Node.js", level: 80 },
    { name: "Express.js", level: 76 },
  ],
  database: [
    { name: "MySQL", level: 80 },
    { name: "MongoDB", level: 80 }
  ],
};

// const skillsData = [
//   {
//     category: "Frontend Development",
//     skills: [
//       { name: "HTML", percentage: 80, className: "html", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
//       { name: "CSS", percentage: 80, className: "css", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
//       { name: "JavaScript", percentage: 75, className: "js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
//       { name: "Bootstrap", percentage: 80, className: "bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
//       { name: "Tailwind CSS", percentage: 75, className: "tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg" },
//       { name: "React", percentage: 80, className: "react", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
//     ],
//   },
//   {
//     category: "Backend Development",
//     skills: [
//       { name: "Node.js", percentage: 75, className: "nodejs", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
//       { name: "Express.js", percentage: 80, className: "expressjs", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
//     ],
//   },
//   {
//     category: "Database",
//     skills: [
//       { name: "MongoDB", percentage: 75, className: "mongodb", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
//       { name: "MySQL", percentage: 75, className: "mysql", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
//     ],
//   }
// ];





function App() {

  const [showToggle,setShowToggle] = useState(false)

  const toggle = ()=>{
      setShowToggle(!showToggle)
  }
  const cancel = ()=>{
      setShowToggle(!showToggle)
  }


  const fullText = "Web Developer";
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 100); // typing speed
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);


  // skills
  //  useEffect(() => {
  //     const circles = document.querySelectorAll('.skill-progress-fill');
  //     circles.forEach((circle) => {
  //       const radius = parseFloat(circle.getAttribute('r'));
  //       const textPercent = circle.closest('.skill-item').querySelector('.skill-percentage').innerText;
  //       const percent = parseFloat(textPercent) / 100;
  //       const circumference = 2 * Math.PI * radius;
  //       const offset = circumference * (1 - percent);
  
  //       circle.style.strokeDasharray = circumference;
  //       circle.style.strokeDashoffset = circumference;
  
  //       setTimeout(() => (circle.style.strokeDashoffset = offset), 100);
  //     });
  //   }, []);
 const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  // Detect when section is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const renderSkillBars = (skills) =>
    skills.map((skill, i) => (
      <div key={i}>
        <div className="flex justify-between mb-2">
          <span className="font-medium">{skill.name}</span>
          <span>{visible ? `${skill.level}%` : "0%"}</span>
        </div>
        <div className="w-full bg-gray-500 rounded-full h-3 overflow-hidden">
          <div
            className={`h-3 bg-blue-800 rounded-full transition-all duration-[2000ms] ease-out ${
              visible ? "opacity-100" : "opacity-0"
            }`}
            style={{
              width: visible ? `${skill.level}%` : "0%",
            }}
          ></div>
        </div>
      </div>
    ));
    
    // mouse tracker
      
      const appRef = useRef(null);
      
        const createStar = (x, y) => {
          const star = document.createElement('div');
          star.className = 'star';
      
          const size = Math.random() * 6 + 4; // 4px to 10px
          star.style.width = `${size}px`;
          star.style.height = `${size}px`;
      
          // Slight random offset
          const offsetX = Math.random() * 40 - 20;
          const offsetY = Math.random() * 40 - 20;
      
          star.style.left = `${x + offsetX}px`;
          star.style.top = `${y + offsetY}px`;
      
          // Append to body instead of the app div
          document.body.appendChild(star);
      
          // Remove after animation
          setTimeout(() => {
            star.remove();
          }, 1000); // match animation duration
        };
      
        useEffect(() => {
          const handleMouseMove = (e) => {
            createStar(e.pageX, e.pageY); // use pageX/Y instead of clientX/Y
          };
      
          window.addEventListener('mousemove', handleMouseMove);
          return () => window.removeEventListener('mousemove', handleMouseMove);
        }, []);
      


  return (

<div className='h-[100%] w-[100%] body text-black' ref={appRef}>
        <header className='h-[100vh]'>
          <img src={mypic} alt="image" className='h-full w-full object-contain opacity-70' />
          <img onClick={toggle} className='fixed top-5 left-1 bg-black rounded outline outline-white shadow-lg' src={menu} alt="menu_icon" />
           <div className="absolute bottom-[50%] left-[10%]">
            <h1 className="text-4xl font-bold text-white">Gokul Prasath</h1>
            <p className="p font-medium whitespace-pre ml-[38%] text-white"><span className='underline underline-offset-5 decoration-[2px]'>{displayedText}</span></p>
          </div>
        </header>
        
        {
          showToggle &&
              <div className='fixed top-0 h-[100vh] w-[45%] lg:w-[23%] bg-black/80 text-white'>

              <svg className='absolute left-[3.5%] top-[4.5%]' onClick={cancel} xmlns="http://www.w3.org/2000/svg" height="27px" viewBox="0 -960 960 960" width="27px" fill="#ffffffff"><path d="M400-240 160-480l240-240 56 58-142 142h486v80H314l142 142-56 58Z"/></svg>

              <div className='h-[30%] w-full flex flex-col items-center gap-[2%] mt-[3%]'>
                  <img src={iconpic} alt="logo" className='outline-2 outline-white h-[80%] w-[70%] lg:w-[45%] xl:w-[45%] object-cover rounded-full' />
                  <h1 className='text-small lg:text-2xl'>GOKUL&nbsp;PRASATH&nbsp;.M</h1>
              </div>

              <div className='h-[10%] w-full mt-[2%] flex items-center justify-evenly'>
                    <div className="h-[40%] w-[15%] lg:h-[60%] lg:w-[11%] flex items-center justify-center rounded bg-black outline">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#0A66C2" viewBox="0 0 24 24" className='rounded-lg'>
                        <path d="M19 0h-14C2.7 0 0 2.7 0 6v12c0 3.3 2.7 6 6 6h14c3.3 0 6-2.7 6-6V6c0-3.3-2.7-6-6-6zM7.3 20.4H3.6V9h3.7v11.4zM5.5 7.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2c.1 1.1-.8 2-2 2zM20.4 20.4h-3.7v-5.5c0-1.3 0-3-1.9-3s-2.2 1.5-2.2 2.9v5.6h-3.7V9h3.5v1.6h.1c.5-.9 1.6-1.9 3.3-1.9 3.6 0 4.3 2.4 4.3 5.5v6.2z"/>
                      </svg>   
                    </div>
                    <div className="h-[40%] w-[15%] lg:h-[60%] lg:w-[11%] flex items-center justify-center rounded bg-black outline">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#25D366" viewBox="0 0 32 32" className='rounded-lg'>
                        <path d="M16.001 3.2c-7.064 0-12.8 5.736-12.8 12.8a12.6 12.6 0 0 0 1.796 6.544l-1.928 5.744 5.92-1.848A12.756 12.756 0 0 0 16 28.8c7.064 0 12.8-5.736 12.8-12.8s-5.736-12.8-12.8-12.8zm0 23.2a10.36 10.36 0 0 1-5.52-1.576l-.392-.24-3.504 1.096 1.144-3.424-.256-.408a10.345 10.345 0 0 1-1.64-5.488c0-5.72 4.656-10.4 10.4-10.4s10.4 4.656 10.4 10.4-4.68 10.4-10.432 10.4zm5.752-7.648c-.312-.16-1.84-.904-2.128-1.008-.288-.104-.496-.16-.704.16s-.8 1.008-.976 1.216c-.176.208-.352.24-.64.08-.312-.16-1.32-.488-2.512-1.552-.928-.824-1.552-1.84-1.728-2.144-.176-.304-.016-.464.128-.616.128-.128.288-.336.432-.496.144-.16.192-.272.288-.464.096-.192.048-.352-.016-.496-.16-.16-.704-1.712-.96-2.352-.248-.608-.504-.528-.704-.536l-.608-.016c-.208 0-.544.08-.832.384s-1.088 1.064-1.088 2.6 1.112 3.016 1.264 3.224c.16.208 2.192 3.344 5.328 4.688.744.32 1.328.512 1.784.656.752.24 1.44.208 1.984.128.608-.088 1.84-.752 2.096-1.472.256-.72.256-1.336.176-1.472-.08-.128-.288-.208-.6-.36z"/>
                      </svg>
                    </div>
                    <div className="h-[40%] w-[15%] lg:h-[60%] lg:w-[11%] flex items-center justify-center rounded bg-black outline">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#1877F2" viewBox="0 0 24 24" className='rounded-lg'>
                        <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.337v21.326C0 23.4.6 24 1.325 24h11.494v-9.294H9.692v-3.622h3.127V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464.099 2.796.143v3.24h-1.918c-1.504 0-1.794.715-1.794 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116c.728 0 1.324-.6 1.324-1.337V1.337C24 .6 23.404 0 22.675 0z"/>
                      </svg>
                    </div>
                    <div className="h-[40%] w-[15%] lg:h-[60%] lg:w-[11%] flex items-center justify-center rounded bg-black outline">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#E1306C" viewBox="0 0 24 24" className='rounded-lg'>
                        <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.3 2.4.5.6.3 1 .6 1.4 1 .4.4.7.8 1 1.4.2.5.4 1.2.5 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.9-.5 2.4-.3.6-.6 1-1 1.4-.4.4-.8.7-1.4 1-.5.2-1.2.4-2.4.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.3-2.4-.5-.6-.3-1-.6-1.4-1-.4-.4-.7-.8-1-1.4-.2-.5-.4-1.2-.5-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.9.5-2.4.3-.6.6-1 1-1.4.4-.4.8-.7 1.4-1 .5-.2 1.2-.4 2.4-.5C8.4 2.2 8.8 2.2 12 2.2zm0-2.2C8.7 0 8.3 0 7 .1 5.7.2 4.6.5 3.7 1 2.8 1.5 2 2.2 1.4 3.1.9 4 .6 5.1.5 6.4.4 7.7.4 8.1.4 12s0 4.3.1 5.6c.1 1.3.4 2.4.9 3.3.5.9 1.2 1.6 2.1 2.1.9.5 2 .8 3.3.9 1.3.1 1.7.1 5.6.1s4.3 0 5.6-.1c1.3-.1 2.4-.4 3.3-.9.9-.5 1.6-1.2 2.1-2.1.5-.9.8-2 .9-3.3.1-1.3.1-1.7.1-5.6s0-4.3-.1-5.6c-.1-1.3-.4-2.4-.9-3.3-.5-.9-1.2-1.6-2.1-2.1-.9-.5-2-.8-3.3-.9C15.7 0 15.3 0 12 0z"/>
                        <circle cx="12" cy="12" r="3.5"/>
                        <circle cx="18.5" cy="5.5" r="1.5"/>
                      </svg>
                    </div>                 
              </div>

              <div className='h-[55%] w-[80%] lg:w-[53%] flex flex-col justify-around items-center'>
                     <div className='flex -ml-2 text-xl gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0000F5"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg>
                        <a href="#">Home</a>
                      </div>
                      <div className='flex -ml-3 text-xl gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0000F5"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"/></svg>
                        <a href='#about'>About</a>
                      </div>
                      <div className='flex text-xl gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0000F5"><path d="M320-440h320v-80H320v80Zm0 120h320v-80H320v80Zm0 120h200v-80H320v80ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z"/></svg>
                        <p>Resume</p>
                      </div>
                      <div className='flex text-xl gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0000F5"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg>
                        <p>Contact</p>
                      </div>
              </div>

          </div>
        }

    {/* about */}
          <motion.div className='h-full w-full' initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.6 }} viewport={{ once: true }} id='about'>
              <h3 className='text-2xl font-medium underline underline-offset-7 decoration-3 p-[.5%] lg:ml-[3%]'>About</h3>
              <p className='ml-[4.5%]'>interested in roles that challenge me to think critically and solve complex technical problems. I aim to contribute value
                  from day one while continuing to learn and grow professionally. <br />I'm an aspiring IT professional with a strong passion
                  for technology and innovation. With a background in computer science and hands-on experience from academic projects, I've
                  built skills in web development, programming, and database design.
              </p>

              <div className='h-full w-full lg:flex items-center p-[2%]'>
                <img src={icon} alt="img" className='h-[50%] w-full lg:h-[25%] lg:w-[25%] lg:p-[2%] object-contain' />
                
                <div className='h-full w-full lg:w-[75%]'>
                  <h3 className='text-2xl font-medium'>Web Developer</h3>
                  <p className='mt-[3%]'>I thrive in environments that encourage learning and creativity. Whether it's debugging code,
                     exploring new tools, or collaborating on a team project, I'm always eager to contribute and improve.
                  </p>

                  <div className='h-full w-full lg:flex gap-[10%] mt-[3%]'>
                    <div>
                      <p>★&nbsp;&nbsp;<span className='font-semibold'>Date of Birth: </span>13 December 2000</p>
                      <p>★&nbsp;&nbsp;<span className='font-semibold'>Phone: </span>8524087257</p>
                      <p>★&nbsp;&nbsp;<span className='font-semibold'>City: </span>Erode</p>
                    </div>
                    <div>
                      <p>★&nbsp;&nbsp;<span className='font-semibold'>Degree: </span>Bachelor</p>
                      <p>★&nbsp;&nbsp;<span className='font-semibold'>Email: </span>gokultech813@gmail.com</p>
                      <p>★&nbsp;&nbsp;<span className='font-semibold'>Freelance: </span>Available</p>
                    </div>
                  </div>
                  <p className='mt-[3%]'> 
                    I'm currently seeking entry-level opportunities where I can bring energy, dedication, and a
                    willingness to grow in a fast-paced tech environment.
                  </p>
                  <div className='w-full flex justify-evenly'>
                  <Link to="/Project" className='bg-gray-800 rounded outline p-2 text-white hover:bg-green-900'>View Projects</Link>
                    <button className='bg-gray-800 rounded outline p-2 text-white hover:bg-green-900'>Download Resume &#11015;</button>
                  </div>
                </div>
              </div>
              
          </motion.div>

    {/* skills */}
      <h3 className='text-3xl font-medium underline underline-offset-7 decoration-3 p-[.5%] lg:ml-[3%]'>Skills</h3>
    <section ref={sectionRef} id="skills" className="py-20 text-black flex flex-col items-center">
      <div className="w-11/12 md:w-2/3 space-y-12">
        {/* Frontend Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-red-800 underline underline-offset-5 decoration-blue-700">
            Frontend
          </h3>
          <div className="space-y-6">{renderSkillBars(skillsData.frontend)}</div>
        </div>

        {/* Backend Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-red-800 underline underline-offset-5 decoration-blue-700">
            Backend
          </h3>
          <div className="space-y-6">{renderSkillBars(skillsData.backend)}</div>
        </div>

        {/* Database Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-red-800 underline underline-offset-5 decoration-blue-700">
            Database
          </h3>
          <div className="space-y-6">{renderSkillBars(skillsData.database)}</div>
        </div>
      </div>
    </section>

          {/* <motion.div className='h-full w-full' initial={{ opacity: 0, y: 50 }} id='skill' whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.5 }} viewport={{ once: true }}>
              <h1 className='text-2xl font-medium underline underline-offset-7 decoration-3 p-[.5%] lg:ml-[3%]'>Skills</h1>

              <div className="skills-section w-[100%]">
                  {skillsData.map((category, index) => (
                    <div className="skills-category" key={index}>
                      <h3 className='font-semibold'>{category.category}</h3>
                      <div className="skills-container flex justify-center">
                        {category.skills.map((skill, idx) => (
                          <div className={ `skill-item ${skill.className}`} key={idx}>
                            <div className=" skill-progress">
                              <svg viewBox="0 0 100 100">
                                <circle className="skill-progress-bg" cx="50" cy="50" r="45" />
                                <circle className="skill-progress-fill" cx="50" cy="50" r="45" />
                              </svg>
                              <div className="skill-logo">
                                <img src={skill.icon} alt={skill.name} />
                              </div>
                            </div>
                            <div className="skill-name">{skill.name}</div>
                            <div className="skill-percentage">{skill.percentage}%</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
              </div>
          </motion.div> */}

  {/* resume */}
              <motion.div className='h-full w-full mt-[3%]' initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.5 }} viewport={{ once: true }}>
                    
                    <h1 className='text-2xl font-medium underline underline-offset-7 decoration-3 p-[.5%] lg:ml-[.5%]'>Resume</h1>
                    
                    <p className='lg:w-[70%] ml-[3%] mt-[1%]'>I'm a Full Stack Web Developer specializing in the MERN stack (MongoDB, Express.js, React, Node.js).
                        I build scalable web applications from scratch — from designing RESTful APIs and managing databases to 
                        creating responsive, user-friendly frontends. Passionate about clean code, modern development practices,
                        and continuous learning.
                    </p>

                    <div className='h-full w-full lg:p-[2%]'>
                      <div className=''>
                        <h2 className='text-2xl'>Summury</h2>
                          <div className='ml-[3%]'>
                            <p>‣ Strong analytical and troubleshooting skills. <br />‣ Excellent communication and team collaboration. <br />
                                ‣ A proactive mindset with a focus on innovation. <br />‣ Commitment to quality, reliability, and scalability.
                            </p>
                          </div>

                        <h2 className='text-2xl'>Education</h2>
                            <div className='ml-[2%]'>
                              <h3>Bachelor of Science</h3>
                              <p>2018-2021</p>
                              <p>Erode Arts & Science College, Erpde</p>
                            </div>
                        <h2 className='text-2xl'>Professional Experience</h2>
                            <div className='ml-[2%]'>
                              <p>2022-2024</p>
                              <p>K.P. Auto Finance & Investments, Erode</p>
                            </div>
                      </div>
                    </div>
              </motion.div>

              <motion.div className='h-full w-full mt-[5%]' initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.5 }} viewport={{ once: true }}>
                <h1 className='text-2xl font-medium underline underline-offset-7 decoration-3 p-[.5%] lg:ml-[3%]'>Contact</h1>

                <div className='h-full lg:flex lg:flex-row items-center flex flex-col gap-5 '>
                    
                    <div className='lg:w-[50%] flex flex-col gap-5 lg:ml-[5%] lg:-mt-[2%] mt-[3%]'>
                      <div className='flex items-center gap-[3.8%]'>
                        <p className='hover:bg-blue-400 rounded rounded-full p-[1%]'>📍</p>
                        <div>
                          <b>Address</b>
                          <p>154, Kannagi Street, Erode-638 009.</p>
                        </div>
                      </div>
                      <div className='flex items-center gap-[2.5%]'>
                        <p className='hover:bg-blue-400 rounded rounded-full p-[1%]'>📞</p>
                        <div>
                          <b>Phone</b>
                          <p>8524087257</p>
                        </div>
                      </div>
                      <div className='flex items-center gap-[2.5%]'>
                        <p className='hover:bg-blue-400 rounded rounded-full p-[1%]'>📧</p>
                        <div>
                          <b>Email</b>
                          <p>gokultech813@gmail.com</p>
                        </div>
                      </div>
                      
                    </div>

                    <form className='h-full lg:w-[50%] flex flex-col lg:items-center lg:-ml-[15%] items-center gap-2' action="">
                      <div className='flex flex-col lg:w-[45%]'>
                        <label className='font-medium'>Your Name</label>
                        <input className='outline text-center' type="text" placeholder='' name="" id="" />
                      </div>
                      <div className='flex flex-col lg:w-[45%]'>
                        <label className='font-medium'>Your Email</label>
                        <input className='outline text-center' type="email" placeholder='' name="" id="" />
                      </div>
                      <div className='flex flex-col lg:w-[45%]'>
                        <label className='font-medium'>Subject</label>
                        <input className='outline text-center' type="text" placeholder='' name="" id="" />
                      </div>
                      <div className='flex flex-col lg:w-[45%]'>
                        <label className='font-medium'>Message</label>
                        <textarea className='outline' type="text" placeholder='' name="" id="" />
                      </div>
                        <input className='w-[40%] lg:w-[20%] font-medium outline rounded text-center bg-gray-500 hover:bg-gray-700' type="button" value="SUBMIT" />
                    </form>
                </div>
              </motion.div>

              <div className='h-full w-[100%] mt-[5%] flex justify-center p-5'>
                {/* <iframe allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!4v1758278949416!6m8!1m7!1sgZs9P0fS9CY35xBYZ7HW6g!2m2!1d11.32598961248433!2d77.70801723012904!3f289.58794190965386!4f-6.376650155491518!5f0.7820865974627469"></iframe> */}

                <iframe className='h-100 w-[100%] lg:w-[60%]' allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31296.45861098173!2d77.68735504724096!3d11.330520666351056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96f1b625677d7%3A0x41c6962e802c5dab!2sSurampatty%2C%20Tamil%20Nadu%20638011!5e0!3m2!1sen!2sin!4v1758280183820!5m2!1sen!2sin"></iframe>                  
              </div>
 
            <footer className='h-full w-full flex flex-col lg:flex-row md:flex-row gap-5 justify-between p-2 text-white bg-[black]'>
                  <div>
                      <h1 className='text-xl text-blue-600'>GOKUL&nbsp;PRASATH&nbsp;.M&nbsp;,</h1>
                      <p className='text-white/70'>web developer</p>
                  </div>
                  <div id='contact' className='flex flex-col gap-3'>
                        <p className='text-red-400'><span className='text-gray-3  00 underline'>Contact for me</span> :</p>
                    <div className='flex lg:flex-row items-center gap-10'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#0A66C2" viewBox="0 0 24 24">
                          <path d="M19 0h-14C2.7 0 0 2.7 0 6v12c0 3.3 2.7 6 6 6h14c3.3 0 6-2.7 6-6V6c0-3.3-2.7-6-6-6zM7.3 20.4H3.6V9h3.7v11.4zM5.5 7.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2c.1 1.1-.8 2-2 2zM20.4 20.4h-3.7v-5.5c0-1.3 0-3-1.9-3s-2.2 1.5-2.2 2.9v5.6h-3.7V9h3.5v1.6h.1c.5-.9 1.6-1.9 3.3-1.9 3.6 0 4.3 2.4 4.3 5.5v6.2z"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#25D366" viewBox="0 0 32 32">
                          <path d="M16.001 3.2c-7.064 0-12.8 5.736-12.8 12.8a12.6 12.6 0 0 0 1.796 6.544l-1.928 5.744 5.92-1.848A12.756 12.756 0 0 0 16 28.8c7.064 0 12.8-5.736 12.8-12.8s-5.736-12.8-12.8-12.8zm0 23.2a10.36 10.36 0 0 1-5.52-1.576l-.392-.24-3.504 1.096 1.144-3.424-.256-.408a10.345 10.345 0 0 1-1.64-5.488c0-5.72 4.656-10.4 10.4-10.4s10.4 4.656 10.4 10.4-4.68 10.4-10.432 10.4zm5.752-7.648c-.312-.16-1.84-.904-2.128-1.008-.288-.104-.496-.16-.704.16s-.8 1.008-.976 1.216c-.176.208-.352.24-.64.08-.312-.16-1.32-.488-2.512-1.552-.928-.824-1.552-1.84-1.728-2.144-.176-.304-.016-.464.128-.616.128-.128.288-.336.432-.496.144-.16.192-.272.288-.464.096-.192.048-.352-.016-.496-.16-.16-.704-1.712-.96-2.352-.248-.608-.504-.528-.704-.536l-.608-.016c-.208 0-.544.08-.832.384s-1.088 1.064-1.088 2.6 1.112 3.016 1.264 3.224c.16.208 2.192 3.344 5.328 4.688.744.32 1.328.512 1.784.656.752.24 1.44.208 1.984.128.608-.088 1.84-.752 2.096-1.472.256-.72.256-1.336.176-1.472-.08-.128-.288-.208-.6-.36z"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#1877F2" viewBox="0 0 24 24">
                          <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.337v21.326C0 23.4.6 24 1.325 24h11.494v-9.294H9.692v-3.622h3.127V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464.099 2.796.143v3.24h-1.918c-1.504 0-1.794.715-1.794 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116c.728 0 1.324-.6 1.324-1.337V1.337C24 .6 23.404 0 22.675 0z"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#E1306C" viewBox="0 0 24 24">
                          <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.3 2.4.5.6.3 1 .6 1.4 1 .4.4.7.8 1 1.4.2.5.4 1.2.5 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.9-.5 2.4-.3.6-.6 1-1 1.4-.4.4-.8.7-1.4 1-.5.2-1.2.4-2.4.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.3-2.4-.5-.6-.3-1-.6-1.4-1-.4-.4-.7-.8-1-1.4-.2-.5-.4-1.2-.5-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.9.5-2.4.3-.6.6-1 1-1.4.4-.4.8-.7 1.4-1 .5-.2 1.2-.4 2.4-.5C8.4 2.2 8.8 2.2 12 2.2zm0-2.2C8.7 0 8.3 0 7 .1 5.7.2 4.6.5 3.7 1 2.8 1.5 2 2.2 1.4 3.1.9 4 .6 5.1.5 6.4.4 7.7.4 8.1.4 12s0 4.3.1 5.6c.1 1.3.4 2.4.9 3.3.5.9 1.2 1.6 2.1 2.1.9.5 2 .8 3.3.9 1.3.1 1.7.1 5.6.1s4.3 0 5.6-.1c1.3-.1 2.4-.4 3.3-.9.9-.5 1.6-1.2 2.1-2.1.5-.9.8-2 .9-3.3.1-1.3.1-1.7.1-5.6s0-4.3-.1-5.6c-.1-1.3-.4-2.4-.9-3.3-.5-.9-1.2-1.6-2.1-2.1-.9-.5-2-.8-3.3-.9C15.7 0 15.3 0 12 0z"/>
                          <circle cx="12" cy="12" r="3.5"/>
                          <circle cx="18.5" cy="5.5" r="1.5"/>
                        </svg>
                    </div>
                  </div>
            </footer>

 
 
 </div>
  )
}

export default App;