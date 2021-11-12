import Headers from "./components/Layouts/Headers";
import Modal from "./components/Modal/Modal";
import { CartContextProvider } from "./store/cart-context";
import { ShowContextProvider } from "./store/show-context";
import { TotalProdProvider } from "./store/totalProducts-context";

const App = () => {
  return (
    <CartContextProvider>
      <TotalProdProvider>
        <ShowContextProvider>
          <Headers></Headers>
          <Modal></Modal>
        </ShowContextProvider>
      </TotalProdProvider>
    </CartContextProvider>
  )
}

export default App;
