import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
import { Contact } from "@/sections/Contact";
import {Testimonials} from "@/sections/Testimonials";
import { Experience } from "@/sections/Experience";


function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">   
      <Navbar/>
      <main>
          <Hero/>
          <About/>
          <Projects/>
          <Testimonials/>
          <Experience/>
          <Contact/>
      </main>
    </div>
  ); 
}

export default App;
