import { useState } from "react";
// import reactlogo from "../src/assets/react.svg"
// import viteLogo from "/vite.svg";
import "./App.css";
import BitcoinRates from "./components/BitcoinRates";
import { MoodProvider } from "./Context/MoodContext";
import Emoji from "./components/Emoji";
import AppRoutes from "./routes/AppRoutes";
import NavBar from "./components/Navbar"
import ProfilePage from "./pages/ProfilePage";
import AnimeList from "./pages/AnimeList";
import Homepage from "./pages/Homepage";
import ForumPage from "./pages/ForumPage";




function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MoodProvider>
        <NavBar />
        <AppRoutes />
        {/* <BitcoinRates /> */}
        {/* <Emoji /> */}
      </MoodProvider>
    </>
  );
}

export default App;
