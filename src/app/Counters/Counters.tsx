import { FC } from "react";
import Counter from "./Counter";

interface Props {
  counters: number[];
  setCounters: React.Dispatch<React.SetStateAction<number[]>>;
}
const Counters: FC<Props> = ({ counters, setCounters }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4 offset-8">
          <div className="row d-flex justify-content-around mt-2 mb-2">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                setCounters((c) => c.map((el) => 0));
              }}
            >
              Reset
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => {
                setCounters([]);
              }}
            >
              Restart
            </button>
            <button
              type="button"
              className="btn btn-success"
              onClick={() => {
                setCounters((c) => [...c, 0]);
              }}
            >
              +
            </button>
          </div>
          {counters.map((el, id) => (
            <Counter
              id={id}
              key={id}
              counters={counters}
              setCounters={setCounters}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Counters;
