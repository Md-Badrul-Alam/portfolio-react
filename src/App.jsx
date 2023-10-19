import "./App.css";
import About from './components/about/About'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'

import Service from './components/service/Service'
import Testimonial from './components/testimonials/Testimonial'
import Contact from './components/contact/Contact'
import Portfolio from './components/portfolio/Portfolio'
import Footer from "./components/footer/Footer";
import Experience from "./components/experience/Experience";


function App() {
   return (
      <>
        <Header/>
        <Nav/>
        <About/>
        <Experience/>
        <Service/>
        <Portfolio/>
        <Testimonial/>
        <Contact/>
        <Footer/>

      </>
   );
}

export default App;
