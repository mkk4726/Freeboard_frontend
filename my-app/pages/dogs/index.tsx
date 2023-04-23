import { useEffect, useState } from "react"
import axios from "axios"

export default function openapiDogs() {
  const [dogUrl, setDogUrl] = useState("");

  useEffect(() => {
    const fetchDogs = async () => {
      const result = await axios.get("https://dog.ceo/api/breeds/image/random")
      
      setDogUrl(result.data.message);
    }
    void fetchDogs();
  }, []);

  return (
    <>
      <img src={dogUrl}></img>
    </>
  )
}