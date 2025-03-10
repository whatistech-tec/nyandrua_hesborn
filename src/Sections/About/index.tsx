import { me } from "../../assets"
import Grid from "../../assets/Grid"
import CardUi from "../../assets/CardUi"
import Window from "../../assets/Window"
import GridWireframe from "../../assets/GridWireFrame"
import { Link } from "react-scroll"
import { techStack } from "../../source"
import CodeBlock from "../../Components/CodeBlock"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import ScrollTrigger from "gsap/all"
gsap.registerPlugin(ScrollTrigger);

import "./About.css"

const code = `
    const developer = {
        firstName: "Hesborn",
        lastName: "Nyang'ara",
        aka:"code__culture",
        hobby:repeat = () => {
            //eat();
            //sleep();
            //code();
            //repeat();
        }
    }
`


const About = () => {
    const container:any = useRef();
    useGSAP(()=>{
        gsap.timeline({delay:0.5,scrollTrigger:{
            trigger:container.current,
            start:"20% bottom",
            end:"bottom top",
        }})

        .from(".box",{opacity:0,y:30,stagger:0.5})
        
    },{scope:container})
  return (
    <section id="about">
        <div className="container grid">
            {/* box start */}
            <div className="box self__start">
                <div className="spotlight"></div>
                <div className="cluster">
                    <div className="flex user">
                        <div className="profile">
                            <img src={me} alt="" />
                        </div>
                        <div className="details">
                            <h4>Hesborn Nyang'ara</h4>
                            <p className="text__muted">Fullstack Developer</p>
                        </div>
                    </div>
                    <h2 className="sub__title">
                        <span className="primary">Passionate</span>
                        Developer and Lifelong Learner
                    </h2>
                    <p className="description"> I adapt to different time zones to make sure communication is smooth, no matter where you're located.</p>

                </div>
                <Window color="var(--color-primary-light)" className="kit window"/>
            </div>
            {/* box end */}

            {/* box start */}
            <div className="col-2 box">
                <div className="spotlight"></div>
                <div className="flex row cluster">
                    <CodeBlock  code={code} language="javascript"/>
                    <div className="my__drive">
                        <h2 className="sub__title">
                            What <span className="primary">Drives Me</span>
                        </h2>
                        <p className="description">I’m passionate about the intersection of design 🎨 and
                            development 💻. I believe the best digital experiences are built
                            with a deep understanding of the user 👤 and a commitment to
                            innovation 🌟. Whether working on a simple landing page or a
                            complex web app, I bring precision 🎯, creativity ✨, and a
                            user-first mindset to every project.
                        </p>
                    </div>
                </div>
                <GridWireframe width={"90%"} height={"auto"} color="var(--color-primary-light)" className="kit grid__wireframe"/>
                
            </div>
            {/* box end */}

            {/* box start */}
            <div className="col-2 box">
                <div className="cluster">
                    <div className="column">
                        <h2 className="sub__title">
                            My <span className="primary">Tech Stack</span>
                        </h2>
                        <p className="description">Always Evolving My Tech Stack</p>
                    </div>
                    <div className="column stacks__container">
                        {techStack.map((stack,index)=>(
                        <div className="flex__center btn stack" key={index}>
                            {stack.icon}
                            {stack.name}
                        </div>
                        ))}
                    </div>
                </div>
                <Grid className="kit grid__box"/>
                <CardUi className="kit card__ui" color="gray" background="rgba(var(--bg-base-rgb),0.5)"/>
            </div>
            {/* box end */}

            {/* box start */}
            <div className="box flex__center last__box">
                <div className="cluster">
                    <h2 className="text__white sub__title">
                        I'm Committed to Collaboration and Clear Communication
                    </h2>
                    <div className="flex__center btn__wrapper">
                        <Link to="contact" smooth={true} className="btn">Lets Collaborate</Link>
                    </div>
                </div>
            </div>
            {/* box end */}
        </div>
    </section>
  )
}

export default About