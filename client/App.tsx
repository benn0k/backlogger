import "./App.css";
import Card from "./components/Card/_Card";
import Genre from "./components/Card/Genre";
import Status from "./components/Card/Status";
import Header from "./components/Header/_Header";

function App() {
  return (
    <>
      <div id="page-wrapper">
        <Header></Header>
        <div id="body-wrapper" className=" px-8">
          <Card></Card>
          <Card></Card>
        </div>
      </div>
    </>
  );
}

export default App;
