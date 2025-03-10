import "./CodeBlock.css"
import SyntaxHighlighter from "react-syntax-highlighter"
import { allyLight } from "react-syntax-highlighter/dist/cjs/styles/hljs/"

type ICodeBlock = {
    code: string;
    language: string;
}

const CodeBlock = (props:ICodeBlock) => {
    const { code, language } = props;
  return (
    <div className="code__block">
        <div className="flex__center dot__container">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            
        </div>
        <SyntaxHighlighter language={language} style={allyLight} customStyle={{background: "rgba(var(--bg-base-rgb), 0.6,",
            color:"var(--color-primary-light",padding:"20px"}}
            wrapLongLines={true}
            >
                {code}
        </SyntaxHighlighter>
    </div>
  )
}

export default CodeBlock