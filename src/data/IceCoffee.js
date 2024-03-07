import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function IceCoffee() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch('https://api.sampleapis.com/coffee/iced');
      const json = await response.json();
      setData(json);
      setLoading(false); 
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const results = data.filter(coffee =>
      coffee.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm, data]);

  const handleSearch = () => {
    const results = data.filter(coffee =>
      coffee.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }

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
                <li>
                  <Link to="/IceCoffee" className="text-white hover:text-gray-300">Ice Coffee</Link>
                </li>
                <li>
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

      <div className="flex p-4">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 mr-2 border rounded-md"
        />
        <button onClick={handleSearch} className="px-4 py-2 text-white bg-blue-500 rounded-md">Search</button>
      </div>

      <div className="flex flex-wrap justify-center mt-2">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-200 bg-opacity-75">
            <div className="text-center">Loading...</div>
          </div>
        )}
        
        {!loading && (
          searchResults.map((coffee, index) => (
            <div key={index} className="w-full p-4 md:w-1/2 lg:w-1/3 xl:w-1/4">
              <div className="bg-white rounded-lg shadow-lg">
                <img src={coffee.image} alt={coffee.title} className="object-cover w-full h-40 rounded-t-lg" />
                <div className="p-4">
                  <h2 className="mb-2 text-xl font-semibold">{coffee.title}</h2>
                  <p className="text-gray-600">{coffee.description}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <footer className="p-4 mt-auto text-white bg-gray-800">
        <div className="container mx-auto">
          <p className="text-center">© 2024 COFFEESITE. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default IceCoffee;
