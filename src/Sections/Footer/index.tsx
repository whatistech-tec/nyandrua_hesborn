import Logo from "../../Components/Logo"
import Socialmedia from "../../Components/Socialmedia"
import { Link } from "react-scroll"
import { footer } from "../../source"

import "./Footer.css"

const Footer = () => {
  return (
    <footer id="footer">
        <div className="spotlight"></div>
        <div className="container">
            <div className="grid">
                <div className="cols-2 column">
                    <Logo/>
                    <p className="text__muted description">
                        Crafting responsive, high-performance websites 🌐 with clean code 💻 and a user-focused approach 👥. Let’s build something amazing together 🚀.
                    </p>
                    <Socialmedia/>
                </div>
                {footer.map((list,index)=>(
                    <div className="column" key={index}>
                        <h3 className="group__name">{list.group}</h3>
                        <div className="routes__container">
                            {
                                list.routes.map((route:any,index:number)=>(
                                    <Link to={route?.id} className="route__item" key={index}>{route.name}</Link>
                                ))
                            }
                        </div>
                    </div>
                ))}
            </div>
            <article className="copyright">
                <h3>Copyright &copy; 2024 Hesborn Anyandarua. All rights reserved.</h3>
                <p className="text__muted">
                    Built with love by Hesborn Anyandarua A.K.A code__culture
                </p>
            </article>
        </div>
    </footer>
  )
}

export default Footer