import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/IMG1.jpg";
import IMG2 from "../../assets/IMG2.jpg";
import IMG3 from "../../assets/IMG3.jpg";
import IMG4 from "../../assets/IMG4.jpg";
import IMG5 from "../../assets/IMG5.jpg";
import IMG6 from "../../assets/IMG6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Orion UI kit – data visualization and charts templates for Figma',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/22331494-Orion-UI-kit-data-visualization-and-charts-templates-for-Figma'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Global data visualization',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/22397894-Global-data-visualization'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Global data visualization components for designers',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/22588055-Global-data-visualization-components-for-designers'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Eclipse - Figma dashboard UI kit for data design web apps',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/22712964-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Global data presentation template on a map',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/22397557-Global-data-presentation-template-on-a-map'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Orion UI kit – design system for Figma',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/22587810-Orion-UI-kit-design-system-for-Figma'
  }
]

const Portfolio = () => {
   return (
      <section id="portfolio">
         <h5>My Recent Work</h5>
         <h2>Portfolio</h2>
         
         <div className="container portfolio_container">
            {
              data.map(({id, image, title, github ,demo}) =>{
                return(
                  <article key={id} className="portfolio_item">
               <div className="portfolio_item-image">
                  <img src={image} alt={title} />
               </div>
               <h3>{title}</h3>
               <div className="portfolio_item-cta">
                  <a
                     href={github}
                     className="btn"
                     target="_blank"
                     rel="noreferrer"
                  >
                     Github
                  </a>
                  <a
                     href={demo}
                     className="btn btn-primary"
                     target="_blank"
                     rel="noreferrer"
                  >
                     Live Demo
                  </a>
               </div>
            </article>
                )
              })
            }
         </div>
      </section>
   );
};

export default Portfolio;
