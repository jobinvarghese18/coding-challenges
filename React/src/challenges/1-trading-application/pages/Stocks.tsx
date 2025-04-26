import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const BASE_URL = "https://jsonplaceholder.typicode.com";

interface Stock {
  id: number;
  title: string;
}

const Stocks = () => {
  const [stocks, setStocks] = useState<Array<Stock>>([]);
  const fetchStocks = async () => {
    try {
      const result = await fetch(`${BASE_URL}/posts`, {
        method: "GET",
      });
      const data = await result.json();
      setStocks(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchStocks();
  }, []);

  return (
    <div>
      {stocks.map((stock) => {
        return (
          <li key={stock.id}>
            <Link to={`/stocks/${stock.id}`}>{stock.title}</Link>
          </li>
        );
      })}
    </div>
  );
};

export default Stocks;
