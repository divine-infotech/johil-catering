import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import "./index.css";

// Import Loading component
import Loading from "./components/Loading"; // Now this import will work
import ProtectedRoute from "./components/ProtectedRoute";

// Lazy load pages for better performance
const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));
const Menu = React.lazy(() => import("./pages/Menu"));
const Cart = React.lazy(() => import("./pages/Cart"));
const SignIn = React.lazy(() => import("./pages/SignIn"));
const Success = React.lazy(() => import("./pages/Success"));
const Contact = React.lazy(() => import("./pages/Contact"));
const FullGallery = React.lazy(() => import("./pages/FullGallery"));
const Error = React.lazy(() => import("./pages/Error"));

const App = () => {
   return (
      <ErrorBoundary>
         <BrowserRouter>
            <Suspense fallback={<Loading />}>
               <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route exact path="/about" element={<About />} />
                  <Route exact path="/menu" element={<Menu />} />
                  <Route exact path="/cart" element={<Cart />} />
                  <Route exact path="/signIn" element={<SignIn />} />
                  <Route exact path="/contact" element={<Contact />} />
                  <Route exact path="/gallery" element={<FullGallery />} />
                  <Route
                     exact
                     path="/success"
                     element={<ProtectedRoute element={<Success />} />}
                  />
                  <Route path="/*" element={<Error />} />
               </Routes>
            </Suspense>
         </BrowserRouter>
      </ErrorBoundary>
   );
};

export default App;
