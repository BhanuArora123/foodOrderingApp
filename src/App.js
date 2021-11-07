import { Fragment,useState } from "react/cjs/react.production.min";
import Headers from "./components/Layouts/Headers";
import BackDrop from "./components/Modal/BackDrop";
import Modal from "./components/Modal/Modal";

const App = () => {
  const [visiblity , setVisiblity] = useState(false);
  return (
    <Fragment>
      <Headers></Headers>
      <Modal show={visiblity} change={setVisiblity}></Modal>
    </Fragment>
  )
}

export default App;
