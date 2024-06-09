import Image from "next/image"
import style from "../styles/footer.module.css"

export default function Footer(){
    return(
        <footer className={styles.rodape}>   
        <ul>
            <li>
                <a href="https://instagram.com">
                <p>Instagram</p>
                </a>
            </li>
            <li>
                <a href="https://tiktok.com">
                <p>Tik Tok</p>
                </a>
            </li>
            <li>
                <a href="https://twitter.com">
                <p>Twitter</p>
                </a>
            </li>
        </ul>
        </footer>
    )
}
