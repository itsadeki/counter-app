import { FC, useEffect, useState } from "react";

interface Props {
  counters: number[];
}
const Navbar: FC<Props> = ({ counters }) => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    let count = 0;
    counters.forEach((e, i) => {
      if (e > 0) count++;
    });
    setActive(count);
  }, [counters]);

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">
          <span className="badge rounded-pill bg-secondary text-light mr-2">
            {active}
          </span>
          active counters
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
