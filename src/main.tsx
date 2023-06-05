import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";

import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";

import App from "./App.tsx";

import "./index.css";

const queryClient = new QueryClient();
const firebaseConfig = {
  apiKey: "AIzaSyBJNHifyYZE5sr5xbc1o64dgH-iXosPtHc",
  authDomain: "zuiderkempen-diamonds-3x3.firebaseapp.com",
  projectId: "zuiderkempen-diamonds-3x3",
  storageBucket: "zuiderkempen-diamonds-3x3.appspot.com",
  messagingSenderId: "403186108194",
  appId: "1:403186108194:web:e0173e51f587f3e4e8877b",
  measurementId: "G-ZS76BEPX3N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
);
