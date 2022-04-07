import { useEffect, useState } from "react";
import { getAllMugs } from "@helpers/Mugs";

import MugGrid from "@components/Mugs/MugGrid/MugGrid";
import PriceBox from "@components/Mugs/PriceBox/PriceBox";

function Index() {
  const [mugs, setMugs] = useState([]);
  const [savedMugs, setSavedMugs] = useState([]);

  useEffect(() => {
    const localStorageMugs = JSON.parse(localStorage.getItem("mugs"));

    if (localStorageMugs) {
      if (localStorageMugs.length > 0) {
        setMugs([]);

        localStorageMugs.forEach((mug) => {
          setMugs((prevMugs) => [...prevMugs, mug]);
        });

        return;
      }
    }

    async function fetchAllMugs() {
      setMugs(await getAllMugs());
    }

    fetchAllMugs();

    return () => {
      localStorage.removeItem("mugs");
      setMugs([]);
    };
  }, []);

  return (
    <div>
      <MugGrid mugs={mugs} setSavedMugs={setSavedMugs} savedMugs={savedMugs} />
      <PriceBox savedMugs={savedMugs} />
    </div>
  );
}

export default Index;
