interface ParagraphProp{
    texto:string;
    className?:string
}

const Paragraph:React.FC<ParagraphProp>=({texto,className})=>{
    return(
        <p className={`boton-reutilizable ${className}`}>{texto}</p>
    );
}
export  default Paragraph