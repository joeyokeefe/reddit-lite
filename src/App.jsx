import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Subreddit from "./pages/Subreddit";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import Reddit from "./utils/Reddit";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }, [theme]);

  useEffect(() => {
    Reddit.getAccessToken();
    Reddit.getUser()
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Header
              setIsOpen={setIsOpen}
              theme={theme}
              setTheme={setTheme}
              user={user}
              setUser={setUser}
            />
          }
        >
          <Route
            index
            element={<Home isOpen={isOpen} setIsOpen={setIsOpen} />}
          />
          <Route path="/:subreddit" element={<Subreddit />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
