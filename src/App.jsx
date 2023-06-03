import "./App.css";
import Info from "./Components/Info";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Interests from "./Components/Interests";
export default function App() {
  return (
    <div className="container">
      <main>
        <Info />
        <About />
        <Interests />
        <Footer />
      </main>
    </div>
  );
}
