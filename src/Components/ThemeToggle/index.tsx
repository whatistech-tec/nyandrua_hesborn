import { CgDarkMode } from "react-icons/cg"
import "./ThemeToggle.css"
import { MdSunny } from "react-icons/md"
import { useEffect, useState } from "react"
import { useMediaQuery } from "react-responsive"

const ThemeToggle = () => {
    useMediaQuery(
        {
            query:"(prefers-color-scheme: dark)"
        },
        undefined,
        (preferDark:any) =>{
            setIsDark(preferDark);
        }
    )
    const storageKey = "theme"
    const [isDark,setIsDark] = useState (
        JSON.parse(localStorage?.getItem(storageKey) || "")
        
    );
    useEffect(()=>{
        if (isDark){
            document.firstElementChild?.setAttribute("data-theme", "dark");
            localStorage?.setItem(storageKey, JSON.stringify(true));
            return;
        }
        else{
            document.firstElementChild?.setAttribute("data-theme", "light");
            localStorage?.setItem(storageKey, JSON.stringify(false));


        }
    })
    
  return (
    <label className="theme__toggle">
        <input type="checkbox" checked={isDark} onChange={(event:any) => setIsDark(event.target.checked)}/>
        <div className="icon__container">
            <MdSunny className="sun"/>
            <CgDarkMode className="moon"/>
        </div>
    </label>
  )
}

export default ThemeToggle