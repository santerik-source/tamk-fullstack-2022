//all imports here in the beginning

//components are functions
import Country from "./components/Country";


const App = () => {
  //components return JSX code (looks like HTML)
  return (
    <div>
      <Country name={"Spain"} capital={"Madrid"}/>
      <Country name={"England"} capital={"London"}/>
      <Country name={"Burundi"} capital={"Bujumbura"}/>
    </div>
  );
};

//export the component in the end
export default App;
