import Link from "next/link";
import styles from "../app/styles/notFound.module.css"; 

export default function NotFound() {
    return (
        <div className={styles.container}>
            <Link href="/" passHref>
                <a>
                    <h1 className={styles.h1not}>Página não encontrada</h1>
                </a>
            </Link>
        </div>
    );
}
