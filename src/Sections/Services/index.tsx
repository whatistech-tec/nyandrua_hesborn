import { services } from "../../source"
import { Link } from "react-scroll"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import ScrollTrigger from "gsap/all"
gsap.registerPlugin(ScrollTrigger);

import "./Services.css"

const Services = () => {
    const container:any = useRef();
    useGSAP(()=>{
        gsap.timeline({delay:0.5,scrollTrigger:{
            trigger:container.current,
            start:"20% bottom",
            end:"bottom top",
        }})

        .from([".section__header .sub__title", ".section__header .description"],{opacity:0,y:30,stagger:0.5})
        .from(".service",{opacity:0,y:30,stagger:0.5})
        
    },{scope:container})
  return (
    <section id="services" className="bg__secondary" ref={container}>
        <div className="container">
            <div className="section__header">
                <h2 className="sub__title">
                    My <span className="primary">Services</span>
                </h2>
                <p className="description">
                    As a fullstack developer, I create modern, responsive, and user-friendly websites that are both visually appealing and efficient.

                </p>
            </div>
            <div className="services">
                {services.map((services,index) =>(
                    <div className="service"key={index}>
                        <div className="flex__center circle">
                            <div className="spotlight"></div>
                            <div className="icon__container">{services.icon}</div>
                        </div>
                        <h3 className="name">{services.name}</h3>
                        <p className="text__muted description">{services.description }</p>
                        <div className="flex__center">
                            <Link to="contact" smooth={true} className="btn">Let's Talk </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Services