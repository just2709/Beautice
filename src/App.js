import logo from "./logo.svg";
import Button from "./components/Button";
import Header from "./components/Header";
import Slide from "./components/Slide";
import Service from "./components/Service";
import AboutUs from "./components/AboutUs";
import Expert from "./components/Expert";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

function App() {
  return (
    <div className='App'>
      <Header />
      <Slide />
      <Service />
      <AboutUs />
      <Expert />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
