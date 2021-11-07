import Headers from "./components/Layouts/Headers";
import Modal from "./components/Modal/Modal";
import { ShowContextProvider } from "./store/show-context";

const App = () => {
  return (
    <ShowContextProvider>
      <Headers></Headers>
      <Modal></Modal>
    </ShowContextProvider>
  )
}

export default App;
