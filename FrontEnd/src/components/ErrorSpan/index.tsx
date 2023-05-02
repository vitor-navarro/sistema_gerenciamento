
import { useState } from "react";

import styles from './styles.module.scss'

interface propsInterface{
    children: React.ReactNode;
    error: boolean;
}

export default function ErrorSpan(props: propsInterface){

    let error = props.error

    return(
        <>

        <span className={styles.span}>{error ? props.children : ""}</span>

        </>
    )

}

