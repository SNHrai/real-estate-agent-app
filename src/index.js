import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Router from "./router.jsx";
import "./styles/styles.scss";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { Toaster, toast } from 'sonner'
// import { Provider } from "react-redux";
// import store from "./store/store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <Toaster richColors/>
      <Router />
    </Provider>
  </StrictMode>
);

// import React, { Suspense } from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import { Toaster } from "sonner";
// import "bootstrap/dist/css/bootstrap.min.css";
// import {
//   RouterProvider,
//   createBrowserRouter,
//   Navigate,
// } from "react-router-dom";
// import Login from "./modules/login/Login";
// import Dashboard from "./modules/dashboard/Dashboard";

// function Main() {
//   // const toggleSidebar = () => {
//   //   setIsSidebarOpen(!isSidebarOpen);
//   // };

//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <Login />,
//       errorElement: <h1>Error</h1>,
//     },
//     {
//       path: "/dashboard",
//       element: <Dashboard />,
//     },
//   ]);

//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       <React.StrictMode>
//         {/* <Provider store={store}> */}
//           {/* <UserProvider> */}
//           <Toaster richColors  />
//               <RouterProvider router={router} />
//           {/* </UserProvider> */}
//         {/* </Provider> */}
//       </React.StrictMode>
//     </Suspense>
//   );
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<Main />);
