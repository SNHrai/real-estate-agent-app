// App.jsx
import { Outlet } from "react-router-dom";
import PageTransition from "./utils/custom-animation/PageTransition";



function App() {
  return (
    <div className="">
      <PageTransition>
        {" "}
        {/* Apply animation to the Outlet */}
        <Outlet />
      </PageTransition>
    </div>
  );
}

export default App;
