import Home from "./Pages/Home.jsx";
import { ToastProvider } from "./hooks/useToast.jsx";

function App() {
  return (
    <ToastProvider>
      <Home />
    </ToastProvider>
  );
}

export default App;
