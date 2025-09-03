import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Sidebar } from "./components/Sidebar/Sidebar";

import styles from "./App.module.scss";

function App() {
  return (
    <div>
      <Header />

      <div className={styles.mainWrapper}>
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}

export default App;
