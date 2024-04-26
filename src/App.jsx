import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./styles/styles.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainComponent from "./components/MainComponent";
import { ThemeContext } from "./context/ThemeContext";
import { UserContext } from "./context/UserContext";

function App() {
  const [theme, setTheme] = useState("night"); //"day" o "night"
  const [username, setUsername] = useState("guille");

  const updateUsername = (newUsername) => {
    setUsername(newUsername);
  };

  const toggleTheme = () => {
    theme === "day" ? setTheme("night") : setTheme("day");
  };
  // El objeto que representa el contexto
  const themeData = {
    theme,
    toggleTheme,
  };
  const userData = {
    username,
    updateUsername,
  };

  return (
    <>
      <ThemeContext.Provider value={themeData}>
        <BrowserRouter>
          <UserContext.Provider value={userData}>
            <Header />
            <MainComponent />
          </UserContext.Provider>
        </BrowserRouter>
        <Footer />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
