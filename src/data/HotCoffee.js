import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function HotCoffee() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); 

  const getData = async () => {
    try {
      const resp = await fetch('https://api.sampleapis.com/coffee/hot');
      const json = await resp.json();
      setData(json);
      setLoading(false); 
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <nav className="flex items-center justify-between p-4 bg-gray-800">
        <div className="font-bold text-white">
          <Link to="/" className="font-bold text-white">COFFEESITE</Link>
        </div>
        <div className="flex items-center">
          <div className="relative mr-4 text-white cursor-pointer">
            Menu
            <div className="absolute px-4 py-2 mt-2 bg-gray-800 rounded-lg shadow-lg">
              <ul>
                <li className="text-white cursor-pointer hover:text-gray-300">
                  <Link to="/IceCoffee" className="text-white hover:text-gray-300">Ice Coffee</Link>
                </li>
                <li className="text-white cursor-pointer hover:text-gray-300">
                  <Link to="/HotCoffee" className="text-white hover:text-gray-300">Hot Coffee</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-white cursor-pointer">
          <Link to="/ContactUs">Contact</Link>
          </div>
        </div>
      </nav>

      <div className="flex items-center justify-center flex-grow">
        {loading && <div className="text-center">Loading...</div>}

        {!loading && (
          <div className="grid grid-cols-1 gap-6 mx-4 mt-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {data.map((coffee, index) => (
              <div key={index} className="p-4 bg-white rounded-lg shadow-lg">
                <img src={coffee.image} alt={coffee.title} className="object-cover w-full h-40 mb-4 rounded-lg" />
                <h2 className="mb-2 text-xl font-semibold">{coffee.title}</h2>
                <p className="text-gray-600">{coffee.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <footer className="p-4 text-white bg-gray-800">
        <div className="container mx-auto">
          <p className="text-center">© 2024 COFFEESITE. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default HotCoffee;
