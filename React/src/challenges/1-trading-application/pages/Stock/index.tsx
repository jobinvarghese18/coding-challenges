import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Stock = () => {
  const params = useParams();
  const [stock, setStock] = useState([]);

  const fectchStock = async () => {
    try {
    } catch (err: unknown) {
      if (err instanceof Error)
        console.error(`Error happened while fetching stock:${err.message}.`);
    }
  };

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
  });
  return <div>Stock {params.id}</div>;
};

export default Stock;
