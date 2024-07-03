import Image from "next/image";
import style from "../styles/main.module.css"

export default function Spinner(){
    return(
        <div>
        <Image width={100} height={100} alt="" src={"/loading.svg"}/>
        </div>
    )
}