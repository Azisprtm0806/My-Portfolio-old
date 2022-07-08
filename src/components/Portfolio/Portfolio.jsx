import React from 'react'
import "./Portfolio.css";
import IMG1 from "../../assets/1.JPG"
import IMG2 from "../../assets/2.JPG"
import IMG3 from "../../assets/3.JPG"
import IMG4 from "../../assets/4.JPG"
import IMG5 from "../../assets/5.JPG"
import IMG6 from "../../assets/6.JPG"

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Cloning Website LMS of UIKA BOGOR",
    github: 'https://github.com/Azisprtm0806',
    demo: '#'
  },
  {
    id: 2,
    image: IMG2,
    title: "Platform Website everytime Company",
    github: 'https://github.com/Azisprtm0806',
    demo: '#'
  },
  {
    id: 3,
    image: IMG3,
    title: "e-commerce Books Application",
    github: 'https://github.com/Azisprtm0806',
    demo: '#'
  },
  {
    id: 4,
    image: IMG4,
    title: "Himatakekinfo Profile Website",
    github: 'https://github.com/Azisprtm0806',
    demo: '#'
  },
  {
    id: 5,
    image: IMG5,
    title: "Platform StayCation Company",
    github: 'https://github.com/Azisprtm0806',
    demo: '#'
  },
  {
    id: 6,
    image: IMG6,
    title: "Al Marhaban prayer room information system",
    github: 'https://github.com/Azisprtm0806',
    demo: '#'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portofolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target="__blank">Github</a>          
                  <a href={demo} className='btn btn-primary' target="__blank">live demo</a>  
                </div>          
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio