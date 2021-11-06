import { Fragment } from "react/cjs/react.production.min";
import Headers from "./components/Layouts/Headers";
import BackDrop from "./components/Modal/BackDrop";

const App = () => {
  return (
    <Fragment>
      <Headers></Headers>
      <BackDrop></BackDrop>
    </Fragment>
  )
}

export default App;
