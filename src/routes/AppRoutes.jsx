import React from "react";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "../pages/PageNotFound";
import Homepage from "../pages/Homepage";
import BitcoinRates from "../components/BitcoinRates";
import LoginPage from "../pages/LoginPage";
import ProfilePage from "../pages/ProfilePage";
import AnimeList from "../pages/AnimeList";



function AppRoutes(props) {
  return (
    <Routes>
      <Route path="login" element={<LoginPage {...props} />} />
      <Route path="Profile" element={<ProfilePage {...props} />} />
      <Route path="animelist" element={<AnimeList {...props} />} />
      <Route path="homepage" element={<HomePage {...props} />} />
      {/* <Route index element={<Homepage {...props} />} />
      <Route path="bitcoin" element={<BitcoinRates {...props} />} /> */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default AppRoutes;