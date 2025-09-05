import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Main } from "./components/Main/Main";
import { Footer } from "./components/Footer/Footer";

import styles from "./App.module.scss";

function App() {
  return (
    <div>
      <Header />

      <div className={styles.mainWrapper}>
        <Sidebar />
        <Main />
      </div>

      <Footer />
    </div>
  );
}

export default App;
