import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
// import { Header } from "./components/Header";
import { IndexPage } from "./pages/IndexPage";
import { PokePage } from "./pages/PokePage";
import { SearchPage } from "./pages/SearchPage";

export const AppRouter = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Header />}> */}
      <Route index element={<IndexPage />} />
      <Route path="/pokemon/:id" element={<PokePage />} />
      <Route path="/search" element={<SearchPage />} />
      {/* </Route> */}

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
