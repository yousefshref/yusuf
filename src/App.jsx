import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PreviousProjects from "./components/PreviousProjects";
import Testimonials from "./components/Testimonials";
import Yusuf from "./components/Yusuf";

function App() {
  return (
    <div dir="rtl" className="font">
      <Header />
      <About />
      <PreviousProjects />
      <Yusuf />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
