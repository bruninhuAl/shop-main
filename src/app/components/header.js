import Image from "next/image"
import style from "./header.module.css"
import Link from "next/link";

export default function Header() {
    return (
      <header className={styles.header}>
        <div className={styles.logo}>
          <Image height={80} width={80} src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Logo"/>
          <h2>------------</h2>
        </div>
        <nav className={styles.navbar}>
        
        </nav>
        <div className={styles.actions}>
          <button>Carrinho</button>
          <button>Adicionar Produto</button>
        </div>
        
      </header>
    );
  }