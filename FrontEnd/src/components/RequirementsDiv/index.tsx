import { useState } from "react"
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai"

import styles from "./styles.module.scss"

interface propsInterface{
    isValid: boolean;
    children: string;
}

export default function RequirementsDiv(props : propsInterface){

    const isValid = props.isValid

    return(

        <div className={`${styles.requirements} ${isValid ? styles.valid : ''}`}>
            {isValid ? <AiOutlineCheck className={styles.icon} /> : <AiOutlineClose className={styles.icon} />}
            <span>{props.children}</span>
        </div>

    )
}