import { BrowserRouter } from "react-router-dom";
import './styles/styles.scss';
//import MainComponent from './MainComponent';
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainComponent from "./components/MainComponent";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <MainComponent />
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
