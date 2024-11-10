import React from "react";
interface BotonProps{
        imageUrl?: string;
        texto: string;
        className?: string;
        onClick: () => void;
        buttonUrl?: string;
    }


    const Boton: React.FC<BotonProps> = ({ texto, className, imageUrl, onClick, buttonUrl }) => {
        const handleClick = () => {
            if (buttonUrl) {
                window.location.href = buttonUrl; 
            } else {
                onClick(); 
            }
        };
    
        return (
            <button onClick={handleClick} className={`boton-reutilizable ${className}`}>
            {imageUrl && <img src={imageUrl} alt="button icon" />}
            {texto}
        </button>
    );
};
export default Boton