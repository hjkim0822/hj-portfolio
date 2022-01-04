import styles from "../styles/Layout.module.css";
import NavBar from "./NavBar";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <Header />
        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
};

export default Layout;
