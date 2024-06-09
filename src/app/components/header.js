import Image from "next/image"
import style from "../styles/header.module.css"
import Link from "next/link";

export default function Header() {
    return (
      <header className={style.header}>
        <div className={style.logo}>
          <Image height={80} width={80} src="https://pngfre.com/wp-content/uploads/twitch-logo-png-image-from-pngfre-3.png" alt="Logo"/>
          <h2>Twitch Lolja</h2>
        </div>
        <nav className={style.navbar}>
        </nav>
        <div className={style.actions}>
          <button>Carrinho</button>
          <button>Adicionar Produto</button>
        </div>
      </header>
    );
  }