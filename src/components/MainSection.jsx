import "../index.css";


export default function MainSection({children,style}){//children prop- allows info to go inside component
    return(<>
    <div className="main-section">
{children}
    </div>
    
    
    
    </>);
}