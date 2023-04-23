import axios from "axios"
import { useEffect, useState } from "react";
import CatFactsUI from "./CatFacts.presenter";

const url = "https://cat-fact.herokuapp.com/facts";

export default function CatFacts() {
  const [facts, setFacts] = useState<any>([]);

  useEffect(()=> {
    const fetchCatFacts = async () => {
      const result = await axios.get(url);
      setFacts([...result.data]);
    }
    void fetchCatFacts();
  }, []);

  

  return (
    <CatFactsUI 
      facts={facts}
    />
  )
}