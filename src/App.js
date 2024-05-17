import { RouterProvider } from "react-router-dom";
import { router } from "./Router/Router";

function App() {
  return (
    <div className="max-w-[1000px] mx-auto">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
