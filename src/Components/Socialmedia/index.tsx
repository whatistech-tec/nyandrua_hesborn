import "./Socialmedia.css"
import { socialHandles } from "../../source"

const Socialmedia = () => {
  return (
    <div className="flex social__handles">
        {
            socialHandles.map((handle,index)=>(
                <a href={handle.link} target="_blank" className="icon__container handle" key={index}>{handle.icon}</a>
            ))
        }
    </div>
  )
}

export default Socialmedia