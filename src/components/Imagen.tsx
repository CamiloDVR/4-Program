interface ImagenProp{
    url:string;
    
    
}

const Imagen:React.FC<ImagenProp>=({url})=>{
    return(
        <img src={url} alt="imagen"/>
    );
}
export default Imagen