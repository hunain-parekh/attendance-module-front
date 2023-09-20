import "./App.css";
import { useEffect, useState } from "react";
import Import from "./components/Import";
import AttendanceTable from "./components/AttendanceTable";

function App() {
  const [data, setData] = useState([]);
  const fecthAttendanceData = async () => {
    await fetch("http://127.0.0.1:8000/api/attendance-data")
      .then((response) => response.json())
      .then((result) => setData(result.data));
  };
  useEffect(() => {
    fecthAttendanceData();
  }, []);

  return (
    <div className="App">
      <Import />
      {data.length > 0 && <AttendanceTable data={data} />}
    </div>
  );
}

export default App;
