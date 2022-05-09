import { Footer } from "./components";
import EndPoints from "./routes/EndPoints";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <EndPoints />
      <Footer />
      <Toaster />
    </>
  );
}

export default App;
