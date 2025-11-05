import "../index.css";


export default function Card({children, style}){
    return(<>
    <div className="card" style={style}>
{children}
    </div>
    
    
    
    </>);
}