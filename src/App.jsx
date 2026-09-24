import { BrowserRouter } from "react-router-dom";

import { 
  Navbar, 
  Hero, 
  Works, 
  ProblemSolving, 
  Tech, 
  Experience, 
  Contact, 
  Footer 
} from "./components";
import Education from "./components/Education";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-[#040812] text-slate-100 min-h-screen">
        
        {/* Hero & Navigation */}
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>

        {/* Primary Portfolio Showcase */}
        <Works />
        <ProblemSolving />
        <Tech />
        
        {/* Credentials & Milestones */}
        <Experience />
        <Education />

        {/* Uplink & Closure */}
        <div className="relative z-0">
          <Contact />
        </div>
        <Footer />
        
      </div>
    </BrowserRouter>
  );
};

export default App;