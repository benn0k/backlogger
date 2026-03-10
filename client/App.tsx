import "./App.css";
import Genre from "./components/ui/Card/Genre";
import Status from "./components/ui/Card/Status";
import Header from "./components/ui/Header/Header";

function App() {
  return (
    <>
      <div id="page-wrapper">
        <Header></Header>
        <div id="body-wrapper" className="py-1 px-8">
          <div className="card-container outline outline-dashed outline-offset-15 ">
            <h1 className="title">Marathon</h1>
            <div className="description">
              NULL_POINTER_EXCEPTION (good luck, runner :)){" "}
            </div>
            <div className="notes">
              I met a traveller from an antique land, Who said—“Two vast and
              trunkless legs of stone Stand in the desert. . . . Near them, on
              the sand, Half sunk a shattered visage lies, whose frown, And
              wrinkled lip, and sneer of cold command, Tell that its sculptor
              well those passions read Which yet survive, stamped on these
              lifeless things, The hand that mocked them, and the heart that
              fed; And on the pedestal, these words appear: My name is
              Ozymandias, King of Kings; Look on my Works, ye Mighty, and
              despair!" Nothing beside remains. Round the decay Of that colossal
              Wreck, boundless and bare The lone and level sands stretch far
              away.
            </div>
            <div className="card-bottom my-2 flex flex-row justify-between">
              <Status></Status>
              <Genre></Genre>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
