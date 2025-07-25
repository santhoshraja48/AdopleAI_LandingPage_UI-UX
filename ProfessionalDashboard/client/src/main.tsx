import { createRoot } from "react-dom/client";
import App from "./App";
import Cursor from "./components/Cursor";
import "./index.css";

const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(
    <>
      <Cursor />
      <App />
    </>
  );
} else {
  console.error('Root element not found');
}
