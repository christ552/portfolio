import "./App.css";
import Header from "./componets/header/Header";
import TopContent from "./componets/topcontent/TopContent";
import TopContainer from "./componets/topcontainer/TopContainer";
import Skillcontainer from "./componets/skilcontainer/Skillcontainer";
import ProjectContainer from "./componets/projectcontainer/ProjectContainer";
import ExperienceContainer from "./componets/experienceContainer/ExperienceContainer";
import Contact from "./componets/contact/Contact";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <TopContent />
        <TopContainer />
        <Skillcontainer />
        <ProjectContainer />
        <ExperienceContainer />
        <Contact />
      </header>
    </div>
  );
}

export default App;
