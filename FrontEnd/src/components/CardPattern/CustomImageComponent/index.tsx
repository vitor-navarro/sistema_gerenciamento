import Image from "next/image"

interface propsInterface{
    img: string,
    alt: string,
    width?: number,
    height?: number,
}

function CustomImageComponent(props:propsInterface){
    return(
        <>
            <Image 
            src={props.img} 
            alt={props.alt} 
            width={props.width ? props.width : 16} 
            height={props.height ? props.height : 16}
            >
            </Image>
        </>
    )
}

export default CustomImageComponent