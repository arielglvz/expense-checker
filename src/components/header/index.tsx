import { Moon, Sun } from "../../assets/icons"
import styles from "./header.module.scss"

const Header = () => {
  return (
    <div className={styles.header}>
      <img src={Moon} alt="dark" />
      <p>Expenses</p>
      <img src={Sun} alt="light" />
    </div>
  )
}

export default Header
