import './App.css';
import Cover from "./components/cover";
import Sec2 from './components/section2';
import About from './components/About';
import Team from './components/Team';
import FoodItems from './components/Items';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Cover />
      <Sec2 />
      <FoodItems />
      <Team />
      <About />
      <Footer />
    </>
  );
}

export default App;
