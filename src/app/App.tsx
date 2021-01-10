import { FC, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./Navbar";
import Counters from "./Counters";

interface Props {}
const App: FC<Props> = () => {
  const [counters, setCounters] = useState<number[]>([]);
  return (
    <>
      <Navbar counters={counters} />
      <Counters counters={counters} setCounters={setCounters} />
    </>
  );
};

export default App;
