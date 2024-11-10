interface HeadingProp{
    texto:string;
}

const Heading:React.FC<HeadingProp>=({texto})=>{
    return(
        <h2>{texto}</h2>
    );
}
export  default Heading