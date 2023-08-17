import { NavBar } from "./components/nav/NavBar";
import { Banner } from "./components/banner/Banner";
import { ProjectShow } from "./components/projectShow/ProjectShow";
import { Button } from "./components/button/Button"
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <ProjectShow/>
      <Button/>
      <Footer/>
    </div>
  );
}

export default App;
