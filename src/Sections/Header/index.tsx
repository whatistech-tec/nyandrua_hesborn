import { me } from "../../assets"
import Socialmedia from "../../Components/Socialmedia"
import { Link } from "react-scroll"
import Points from "../../Components/Points"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"

import "./Header.css"

const Header = () => {
    const container:any = useRef();
    useGSAP(()=>{
        gsap.timeline({delay:0.5})
        .from(".points",{opacity:0,y:-30})
        .from(".me",{opacity:0,scale:0.7})
        .from([".user__info .sub__title",".user__info .description"],
            {opacity:0,y:20})
        .from(".user__info .title", {opacity:0,x:-30})
        .from(".user__info .buttons", {opacity:0,x:-30,})
        .from(".points .point", {opacity:0,x:-30,stagger:0.5})
    },{scope:container})
  return (
    <section id="header" className="bg__secondary" ref={container}>
        <div className="spotlight"></div>
        <div className="container">
            <div className="grid">
                <div className="me">
                    <img src={me} alt="" />
                </div>
                <div className="user__info">
                    <h2 className="sub__title">Hi 👋, I'm Hesborn Nyang'ara</h2>
                    <h1 className="title">Fullstack <span className="primary">Web Developer</span> Based in Kenya</h1>
                    <p className="description">I turn ideas into digital solutions that not only look great but also perform flawlessly.</p>
                    <div className="flex buttons">
                        <Socialmedia/>
                        <Link to="contact" smooth={true} className="btn btn__primary">Contact Me</Link>
                    </div>
                </div>
                <Points/>
            </div>
        </div>
    </section>
  )
}

export default Header