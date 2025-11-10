import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Contexts
import { AuthProvider } from "./context/AuthContext.jsx";


// Toasts
import { Toaster } from "react-hot-toast";

// Router
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./Context/ThemContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ThemeProvider>
          <App />
          <Toaster
            position="top-right"
            toastOptions={{
              style: {
                background: "#333",
                color: "#fff",
              },
              duration: 3000,
            }}
          />
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
