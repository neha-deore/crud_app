import { useState } from "react";
import EmpDetails from "./components/EmpDetails.js";
//import DispDelUP from "./components/DispDelUP.js";

function App() {
  // const [data, setData] = useState([]);

  // console.warn(data);

  return (
    <div>
      <EmpDetails />
      {/* <EmpDetails data={data} setData={setData} /> */}

      {/* <DispDelUP data={data} setData={setData} /> */}
    </div>
  );
}

export default App;
