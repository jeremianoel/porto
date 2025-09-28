import pfp from "./assets/pfp.png"
import pfp2 from "./assets/pfp2.png"
import education from "./assets/education.png"
import CV from "./assets/CV Jeremia Noel ATS.pdf"
import Github from "./assets/github.png"
import LinkedIn from "./assets/linkedin.png"
import Checkmark from "./assets/checkmark.png"
import Ccode1 from "./assets/ccode1.png"
import Sporthaven from "./assets/Sporthaven.png"
import Cafein from "./assets/Cafein.png"
import Smartclick from "./assets/smartclick.png"
import Goody from "./assets/goody.png"
import Citiasia from "./assets/Citiasia.png"
import Email from "./assets/email.png"

function App() {
  return (
    <>
    <div className="flex flex-col h-screen">
    <div className='flex w-full justify-around items-center h-auto py-10 font-poppins'>
        <p className="text-4xl font-normal">My PortFolio</p>
        <div className="flex gap-15 justify-between text-2xl">
        <a href="#about" className="hover:text-gray-400 hover:cursor-pointer duration-200">About</a>
        <a href="#skills" className="hover:text-gray-400 hover:cursor-pointer duration-200">Skills</a>
        <a href="#projects" className="hover:text-gray-400 hover:cursor-pointer duration-200">Projects</a>
        <a href="#contact" className="hover:text-gray-400 hover:cursor-pointer duration-200">Contact</a>
        </div>
      </div>
      <div className="flex flex-1 w-full justify-center items-center gap-30 font-poppins">
      <img src={pfp} className="size-80"/>
      <div className="flex flex-col items-center gap-5">
        <p className="text-2xl font-medium">Hello, I'm</p>
        <p className="text-5xl font-bold">Jeremia Noel</p>
        <p className="text-3xl font-semibold">FrontEnd Developer</p>
        <button onClick={() => window.open(CV)} className="text-lg font-semibold border-2 
        mt-5 rounded-4xl py-2 px-4 hover:bg-black hover:text-white hover:cursor-pointer duration-300">Download CV</button>
        <div className="flex gap-7 items-center justify-between">
        <a href="https://github.com/jeremianoel" target="_blank">
        <img  src={Github} className="size-10 hover:cursor-pointer hover:scale-120 duration-300" />
        </a>
        <a href="https://www.linkedin.com/in/jeremianoel/" target="_blank">
       <img src={LinkedIn} className="size-10 hover:cursor-pointer hover:scale-120 duration-300" />
        </a>
      </div>
      </div>
      </div>
    </div>


      <div id="about" className="min-h-screen flex flex-col items-center gap-2 w-full font-poppins">
        <p className="text-xl font-normal">Get to Know More</p>
        <p className="text-5xl font-bold">About Me</p>
        <div className="flex mt-20 justify-center gap-20">
        <img src={pfp2} className="w-80" />
        <div className="flex flex-col w-[50%]">
        <div className="flex flex-col items-center border-2 h-fit py-6 rounded-full border-gray-400 gap-2">
        <img src={education} className="size-10"/>
        <p className="text-2xl font-bold">Education</p>
        <p className="text-xl">Bina Nusantara University</p>
        <p className="text-xl">Computer Science Bachelors Degree</p>
        </div>
        <p className="text-xl mt-10">I’m a fresh graduate from Bina Nusantara University majoring in Computer Science. 
          I’m a diligent, detail-oriented, organized, and creative person. 
          I’m able to adapt easily in a new environment and can work under pressure.</p>
        </div>
        </div>
      </div>


      <div id="skills" className="min-h-screen flex flex-col items-center gap-2 font-poppins">
        <p className="text-xl font-normal">Explore My</p>
        <p className="text-5xl font-bold">Skills</p>
        <div className="flex flex-wrap justify-center gap-12 mt-15">
        <div className="flex flex-col items-center border-2 px-20 h-fit py-6 rounded-4xl border-gray-400 gap-2">
        <p className="text-2xl font-semibold text-gray-600">Frontend Development</p>
        <div className="grid grid-cols-2 gap-10 mt-2 text-black text-xl font-semibold">
          <div className="flex gap-5 items-center">
          <img src={Checkmark} className="size-10"/>
          <p>HTML</p>
          </div>
          <div className="flex gap-5 items-center">
          <img src={Checkmark} className="size-10"/>
          <p>CSS</p>
          </div><div className="flex gap-5 items-center">
          <img src={Checkmark} className="size-10"/>
          <p>React</p>
          </div><div className="flex gap-5 items-center">
          <img src={Checkmark} className="size-10"/>
          <p>Javascript</p>
          </div>
        </div>
        </div>
        <div className="flex flex-col items-center border-2 px-20 h-fit py-6 rounded-4xl border-gray-400 gap-2">
        <p className="text-2xl font-semibold text-gray-600">Quality Assurance</p>
        <div className="grid grid-cols-2 gap-10 mt-2 text-black text-xl font-semibold">
          <div className="flex gap-5 items-center">
          <img src={Checkmark} className="size-10"/>
          <p className="text-base">Manual Testing</p>
          </div>
          <div className="flex gap-5 items-center">
          <img src={Checkmark} className="size-10"/>
          <p className="text-base">API Testing</p>
          </div><div className="flex gap-5 items-center">
          <img src={Checkmark} className="size-10"/>
          <p>Jira</p>
          </div><div className="flex gap-5 items-center">
          <img src={Checkmark} className="size-10"/>
          <p>Katalon</p>
          </div>
        </div>
        </div>
        <div className="flex flex-col items-center border-2 px-20 h-fit py-6 rounded-4xl border-gray-400 gap-2">
        <p className="text-2xl font-semibold text-gray-600">UI/UX Design</p>
        <div className="grid grid-cols-2 gap-10 mt-2 text-black text-xl font-semibold">
          <div className="flex gap-5 items-center">
          <img src={Checkmark} className="size-10"/>
          <p>Figma</p>
          </div>
          <div className="flex gap-5 items-center">
          <img src={Checkmark} className="size-10"/>
          <p>Wireframing</p>
          </div><div className="flex gap-5 items-center">
          <img src={Checkmark} className="size-10"/>
          <p>Prototyping</p>
          </div><div className="flex gap-5 items-center">
          <img src={Checkmark} className="size-10"/>
          <p>UI Design</p>
          </div>
        </div>
        </div>
        </div>
      </div>

      <div id="projects" className="min-h-screen flex flex-col items-center gap-2 font-poppins">
        <p className="text-xl font-normal">Browse My Recent</p>
        <p className="text-5xl font-bold">Projects</p>
        <div className="flex flex-col items-center mt-15 w-full">
        <p className="text-3xl font-semibold bg-[rgb(239,201,149)] text-white w-[85%] rounded-full text-center py-3">Frontend</p>
        <div className="flex flex-wrap gap-10 justify-center">
        <div className="flex flex-col mt-15 items-center border-2 px-8 bg-[rgb(250,250,250)] h-auto py-6 rounded-4xl border-gray-400 gap-5 w-100 text-center">
        <img src={Ccode1} className="w-90 rounded-4xl" />
        <p className="text-3xl font-semibold">CCodeCoffee</p>
        <p className="text-lg">My thesis project that consists of two applications, a website application and a self-serve order application for customers.</p>
        <button onClick={() => window.open('https://github.com/jeremianoel/CCodeCoffee', '_blank')} className="text-sm font-semibold border-2 border-gray-400
        rounded-4xl py-4 px-8 bg-white hover:bg-black hover:text-white hover:cursor-pointer duration-300">Github</button>
        </div>
        <div className="flex flex-col mt-15 items-center border-2 px-8 bg-[rgb(250,250,250)] h-auto py-6 rounded-4xl border-gray-400 gap-5 w-100 text-center">
        <img src={Sporthaven} className="w-90 rounded-4xl" />
        <p className="text-3xl font-semibold">SportHaven</p>
        <p className="text-lg">A sport booking website where users can search various sport activities and join them.</p>
        <div className="flex gap-10">
        <button onClick={() => window.open('https://github.com/jeremianoel/sportHaven', '_blank')} className="text-sm font-semibold border-2 border-gray-400
        rounded-4xl py-4 px-8 bg-white hover:bg-black hover:text-white hover:cursor-pointer duration-300">Github</button>
        <button onClick={() => window.open('https://sport-haven.vercel.app/', '_blank')} className="text-sm font-semibold border-2 border-gray-400
        rounded-4xl py-4 px-8 bg-white hover:bg-black hover:text-white hover:cursor-pointer duration-300">Website</button>
        </div>
        </div>
        <div className="flex flex-col mt-15 items-center border-2 px-8 bg-[rgb(250,250,250)] h-auto py-6 rounded-4xl border-gray-400 gap-5 w-100 text-center">
        <img src={Cafein} className="w-90 rounded-4xl" />
        <p className="text-3xl font-semibold">Cafein</p>
        <p className="text-lg">A react project that serves as a cafe website.</p>
        <div className="flex gap-10">
        <button onClick={() => window.open('https://github.com/jeremianoel/cafein-react', '_blank')} className="text-sm font-semibold border-2 border-gray-400
        rounded-4xl py-4 px-8 bg-white hover:bg-black hover:text-white hover:cursor-pointer duration-300">Github</button>
        <button onClick={() => window.open('https://cafein-react.vercel.app/', '_blank')} className="text-sm font-semibold border-2 border-gray-400
        rounded-4xl py-4 px-8 bg-white hover:bg-black hover:text-white hover:cursor-pointer duration-300">Website</button>
        </div>
        </div>
        </div>
        </div>
        <div className="flex flex-col items-center mt-15 w-full">
        <p className="text-3xl font-semibold bg-purple-500 text-white w-[85%] rounded-full text-center py-3">UI/UX</p>
        <div className="flex flex-wrap gap-10 justify-center">
        <div className="flex flex-col mt-15 items-center border-2 px-8 bg-[rgb(250,250,250)] h-auto py-6 rounded-4xl border-gray-400 gap-5 w-100 text-center">
        <img src={Smartclick} className="w-90 rounded-4xl" />
        <p className="text-3xl font-semibold">SmartClick</p>
        <p className="text-lg">In this UI/UX project I created a UI for a smart home application.</p>
        <button onClick={() => window.open('https://www.figma.com/proto/XkqRIyZIF0ahDeTpDg2zUN/Smart-Click-APP?page-id=0%3A1&node-id=325-560&viewport=-1806%2C-443%2C0.34&t=L6jg4X3u3oIf1WuP-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=325%3A560&show-proto-sidebar=1', '_blank')} className="text-sm font-semibold border-2 border-gray-400
        rounded-4xl py-4 px-8 bg-white hover:bg-black hover:text-white hover:cursor-pointer duration-300">Preview</button>
        </div>
        <div className="flex flex-col mt-15 items-center border-2 px-8 bg-[rgb(250,250,250)] h-auto py-6 rounded-4xl border-gray-400 gap-5 w-100 text-center">
        <img src={Goody} className="w-90 rounded-4xl" />
        <p className="text-3xl font-semibold">Goody</p>
        <p className="text-lg">In this UI/UX project I created a UI for an online learning application.</p>
        <div className="flex gap-10">
        <button onClick={() => window.open('https://www.figma.com/proto/FwN3E8tcuQqJGRpvcPGd9K/goody?page-id=0%3A1&node-id=8-525&viewport=131%2C242%2C0.12&t=joIYiclN0fze85mo-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=8%3A525&show-proto-sidebar=1', '_blank')} className="text-sm font-semibold border-2 border-gray-400
        rounded-4xl py-4 px-8 bg-white hover:bg-black hover:text-white hover:cursor-pointer duration-300">Preview</button>
        </div>
        </div>
        <div className="flex flex-col mt-15 items-center border-2 px-8 bg-[rgb(250,250,250)] h-auto py-6 rounded-4xl border-gray-400 gap-5 w-100 text-center">
        <img src={Citiasia} className="w-90 rounded-4xl" />
        <p className="text-3xl font-semibold">CitiAsia</p>
        <p className="text-lg">In this UI/UX project I created a UI for a smart home application.</p>
        <div className="flex gap-10">
        <button onClick={() => window.open('https://www.figma.com/proto/GoTnfM5Icc09RchEgYp0kD/Citiasia-team-library?page-id=0%3A1&node-id=414-1460&viewport=-252%2C12%2C0.12&t=eDUS8BiGIUlL9Hkg-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=420%3A156', '_blank')} className="text-sm font-semibold border-2 border-gray-400
        rounded-4xl py-4 px-8 bg-white hover:bg-black hover:text-white hover:cursor-pointer duration-300">Preview</button>
        </div>
        </div>
        </div>
        </div>
        <div className="flex flex-col items-center mt-15 w-full">
        <p className="text-2xl font-semibold bg-gray-200 text-black w-[85%] rounded-full text-center py-3">Quality Assurance</p>
        <div className="flex flex-wrap gap-10 justify-center">
        <div className="flex flex-col mt-15 items-center border-2 px-8 bg-[rgb(250,250,250)] h-auto py-6 rounded-4xl border-gray-400 gap-5 w-100 text-center">
        <p className="text-3xl font-semibold">Resonance</p>
        <p className="text-lg">A manual testing for the website Resonance.</p>
        <button onClick={() => window.open('https://docs.google.com/spreadsheets/d/1vwSgEpqCwAZKev7hneMzaVV7rP7Sz6w3dX-NusPGAQo/edit?usp=sharing', '_blank')} className="text-sm font-semibold border-2 border-gray-400
        rounded-4xl py-4 px-8 bg-white hover:bg-black hover:text-white hover:cursor-pointer duration-300">Preview</button>
        </div>
        <div className="flex flex-col mt-15 items-center border-2 px-8 bg-[rgb(250,250,250)] h-auto py-6 rounded-4xl border-gray-400 gap-5 w-100 text-center">        
        <p className="text-3xl font-semibold">Resonance API</p>
        <p className="text-lg">An API manual testing for the website Resonance.</p>
        <div className="flex gap-10">
        <button onClick={() => window.open('https://docs.google.com/spreadsheets/d/1ES5rqwDzqPXRTXqti4wogSROqq2w0A4PEmbndNtp8SI/edit?usp=sharing', '_blank')} className="text-sm font-semibold border-2 border-gray-400
        rounded-4xl py-4 px-8 bg-white hover:bg-black hover:text-white hover:cursor-pointer duration-300">Preview</button>
        </div>
        </div>
        <div className="flex flex-col mt-15 items-center border-2 px-8 bg-[rgb(250,250,250)] h-auto py-6 rounded-4xl border-gray-400 gap-5 w-100 text-center">       
        <p className="text-3xl font-semibold">Resonance</p>
        <p className="text-lg">An automation testing for the website Resonance using Katalon.</p>
        <div className="flex gap-10">
        <button onClick={() => window.open('https://github.com/jeremianoel/resonance-automation', '_blank')} className="text-sm font-semibold border-2 border-gray-400
        rounded-4xl py-4 px-8 bg-white hover:bg-black hover:text-white hover:cursor-pointer duration-300">Github</button>
        <button onClick={() => window.open('/Regression Testing Resonance.html', '_blank')} className="text-sm font-semibold border-2 border-gray-400
        rounded-4xl py-4 px-8 bg-white hover:bg-black hover:text-white hover:cursor-pointer duration-300">Preview</button>
        </div>
        </div>
        <div className="flex flex-col items-center border-2 px-8 bg-[rgb(250,250,250)] h-auto py-6 rounded-4xl border-gray-400 gap-5 w-100 text-center">
        <p className="text-3xl font-semibold">Petstore</p>
        <p className="text-lg">An API automation testing for the website Petstore using Katalon.</p>
        <div className="flex gap-10">
        <button onClick={() => window.open('https://github.com/jeremianoel/petstore-automation', '_blank')} className="text-sm font-semibold border-2 border-gray-400
        rounded-4xl py-4 px-8 bg-white hover:bg-black hover:text-white hover:cursor-pointer duration-300">Github</button>
        <button onClick={() => window.open('/Regression Testing Petstore.html', '_blank')} className="text-sm font-semibold border-2 border-gray-400
        rounded-4xl py-4 px-8 bg-white hover:bg-black hover:text-white hover:cursor-pointer duration-300">Preview</button>
        </div>
        </div>
        </div>
        </div>
        <div id="contact" className="flex flex-col justify-end mt-20 items-center gap-2 font-poppins">
        <p className="text-xl font-normal">Get in Touch</p>
        <p className="text-5xl font-bold">Contact Me</p>
        <div className="flex flex-col mt-10 items-center border-2 px-15 h-fit py-6 rounded-4xl border-gray-400">
        <div className="flex gap-10 text-black text-xl items-center">
          <a href="mailto:jeremianoellsm@gmail.com">
          <div className="flex gap-5 items-center hover:text-gray-400 hover:cursor-pointer duration-200">
          <img src={Email} className="size-12"/>
          <p >jeremianoellsm@gmail.com</p>
          </div>
          </a>
          <a href="https://www.linkedin.com/in/jeremianoel/" target="_blank">          
          <div className="flex gap-5 items-center hover:text-gray-400 hover:cursor-pointer duration-200">
          <img src={LinkedIn} className="size-9"/>          
          <p >My LinkedIn</p>
           </div>
          </a>         
        </div>
        </div>
        <p className="mt-10 mb-2">© 2025 Jeremia Noel. All Rights Reserved.</p>
      </div>
      </div>
    </>
  )
}

export default App
