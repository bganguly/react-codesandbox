import "./styles.css";
// import BannerDemo from "./collection_01/BannerDemo";
// import CounterDemo from "./collection_01/CounterDemo";
// import CounterDemoStyled from "./collection_01/CounterDemoStyled";

// import InternalStateDemo from "./collection_01/InternalStateDemo";
// import AddToListOfNumbersDemo from "./collection_01/AddToListOfNumbersDemo";
// import ClickableListOfNumbersDemo01 from "./collection_01/ClickableListOfNumbersDemo01";
// import ClickableListOfNumbersDemo02 from "./collection_01/ClickableListOfNumbersDemo02";
// import ClickableListOfNumbersDemo03 from "./collection_01/ClickableListOfNumbersDemo03";
import { Parent, Child, GrandChild } from "./collection_01/ParentChildDemo";

const App = () => {
  return (
    <div className="App">
      <h2>Demos !</h2>
      {/* <BannerDemo /> */}
      {/* <CounterDemo /> */}
      {/* <CounterDemoStyled /> */}
      {/* <InternalStateDemo getNewResult={() => " i have been clicked !"} /> */}
      {/* <AddToListOfNumbersDemo number={5} /> */}
      {/* <ClickableListOfNumbersDemo01 number={5} /> */}
      {/* <ClickableListOfNumbersDemo02 number={5} /> */}
      {/* <ClickableListOfNumbersDemo03 number={5} /> */}
      <Parent number={5} />
    </div>
  );
};

export default App;
