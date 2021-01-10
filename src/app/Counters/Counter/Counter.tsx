import { FC } from "react";

interface Props {
  id: number;
  counters: number[];
  setCounters: React.Dispatch<React.SetStateAction<number[]>>;
}
const Counter: FC<Props> = ({ id, counters, setCounters }) => {
  return (
    <div className="row">
      <div className="col-4">
        {counters[id] === 0 ? (
          <span className="badge bg-warning text-dark mr-2">zero</span>
        ) : (
          <span className="badge bg-primary text-light mr-2">
            {counters[id]}
          </span>
        )}
      </div>
      <div className="col-8 d-flex justify-content-around mt-2 mb-2">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => {
            setCounters((c) =>
              c.map((e, i) => {
                return i === id ? e + 1 : e;
              })
            );
          }}
        >
          +
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => {
            setCounters((c) =>
              c.map((e, i) => {
                return i === id ? e - 1 : e;
              })
            );
          }}
          disabled={counters[id] === 0}
        >
          -
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => {
            setCounters((c) => {
              return c.filter((e, i) => {
                if (i !== id) return e;

                return null;
              });
            });
          }}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default Counter;
