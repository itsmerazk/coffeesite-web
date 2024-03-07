import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function HotCoffee() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  const getData = async () => {
    try {
      const resp = await fetch('https://api.sampleapis.com/coffee/iced');
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

  const handleBuy = (productName, quantity) => {
    console.log(`Product ${productName} dibeli sebanyak ${quantity}`);
  }

  const handleQuantityChange = (id, value) => {
    const updatedResults = searchResults.map(coffee => {
      if (coffee.id === id) {
        return { ...coffee, quantity: value };
      }
      return coffee;
    });
    setSearchResults(updatedResults);
  }

  return (
    <div className="flex flex-col min-h-screen">
      <nav className="flex items-center justify-between p-4 bg-gray-800">
        <div className="font-bold text-white">
          <Link to="/" className="font-bold text-white">COFFEESITE</Link>
        </div>
        <div className="flex items-center">
          <div className="relative mr-4 text-white cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
            Menu
            {menuOpen && (
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
            )}
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

      <div className="flex items-center justify-center flex-grow">
        {loading && <div className="text-center">Loading...</div>}

        {!loading && (
          <div className="grid grid-cols-1 gap-6 mx-4 mt-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {searchResults.map((coffee, index) => (
              <div key={index} className="p-4 bg-white rounded-lg shadow-lg">
                <img src={coffee.image} alt={coffee.title} className="object-cover w-full h-40 mb-4 rounded-lg" />
                <h2 className="mb-2 text-xl font-semibold">{coffee.title}</h2>
                <p className="text-gray-600">{coffee.description}</p>
                <div className="flex items-center mt-4">
                  <button onClick={() => handleBuy(coffee.title, coffee.quantity || 1)} className="px-4 py-2 mr-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Beli</button>
                  <input
                    type="number"
                    min="1"
                    value={coffee.quantity || 1}
                    onChange={(e) => handleQuantityChange(coffee.id, parseInt(e.target.value))}
                    className="px-2 py-1 text-sm border rounded-md"
                  />
                </div>
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
