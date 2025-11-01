import '../index.css';


export default function Button({name, onClick,icon,style}){
    return (
        <>
        <button className="btn" onClick={onClick} style={style}>{icon}{name}
           
            </button>
        
        </>
    );
}

