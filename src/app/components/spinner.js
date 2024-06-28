import Image from "next/image";
import style from "../styles/main.module.css"

export default function Spinner(){
    return(
        <div classname={StyleSheet.carregando}>
        <Image width={100} height={100} alt="" src={"/loading.svg"}/>
        </div>
    )
}