import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { store } from '../redux/store'
import { Provider } from 'react-redux'
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from '../components/NavBar';

import './App.scss';

const queryClient = new QueryClient()
function App() {
  const Home = lazy(() => import("../pages/Home"));

  return (
    <>
      <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<div>loooading</div>}>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" />
            </Routes>
          </BrowserRouter>
        </Suspense>
      </QueryClientProvider>
      </Provider>
    </>
  )
}

export default App;
