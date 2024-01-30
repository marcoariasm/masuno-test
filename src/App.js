import Portrait from "./components/Portrait";
import Logo from "./components/Logo";
import Main from "./components/Main";
import Footer from "./components/Footer";
import './App.scss';

function App() {
  return (
    <div className="App">
      <Logo />
      <Portrait />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
