import Header from "./components/Header.jsx";

import Funcfacts from "./components/Funfacts.jsx";
import ExploreContent from "./components/ExploreContent.jsx";

function App() {
  return (
    <>
    
      <Header />
      <div className="detailsContainer">
        <Funcfacts />
        <ExploreContent />
      </div>

  

    </>
  );
}

export default App;
