import * as React from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { store } from "../redux/store";
import { Provider } from "react-redux";
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../components/navigation/NavBar";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

import "./App.scss";

const queryClient = new QueryClient();
function App() {
  const Home = lazy(() => import("../pages/Home"));
  const NotFound = lazy(() => import("../pages/NotFound"));


  return (
    <>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Suspense fallback={
            <Backdrop sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1,}} open={open} >
            <CircularProgress color="inherit" />
            </Backdrop>}
          >
            <BrowserRouter>
              <NavBar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </Suspense>
        </QueryClientProvider>
      </Provider>
    </>
  );
}

export default App;
