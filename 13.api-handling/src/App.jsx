import { useEffect, useState } from "react";
import axios from "axios";
import DataCards from "./components/DataCards";

const App = () => {
  const [allData, setallData] = useState([]);

  async function getData() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users",
    );
    setallData(response.data);
    // console.log(response.data);
  }

  useEffect(function () {
    getData();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-semibold p-10">

      <div className="all-cards">
        {allData.map(function (elem, idx) {
          // console.log(elem); 
          // allData <-- response.data  
          // elem <-- response.data 
          // elem.name  

          return (
            <div key={idx}>
              <DataCards user={elem.username}
              mail= {elem.email} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
