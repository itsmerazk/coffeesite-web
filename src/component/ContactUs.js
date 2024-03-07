import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion'; // Impor AnimatePresence dan motion dari Framer Motion

function Contact() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State untuk mengontrol visibilitas menu

  return (
    <div className="flex flex-col min-h-screen">
      <nav className="flex items-center justify-between p-4 bg-gray-800">
        <div className="font-bold text-white">
          <Link to="/" className="font-bold text-white">COFFEESITE</Link>
        </div>
        <div className="flex items-center">
          <div className="relative mr-4 text-white cursor-pointer">
            <span onClick={() => setIsMenuOpen(!isMenuOpen)}>Menu</span>
            {/* Tambahkan onClick event untuk membuka/menutup menu */}
            {isMenuOpen && ( // Tampilkan pilihan menu jika isMenuOpen true
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

      <AnimatePresence>
        <motion.div
          className="flex items-center justify-center flex-grow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center">
            <h1 className="mb-4 text-3xl font-bold border-b border-yellow-500">Contact Us</h1>
            <p className="mb-2 text-gray-600">For any inquiries or feedback, feel free to contact us at:</p>
            <p className="mb-2 text-gray-600">Email: hi@coffeesite.com</p>
            <p className="text-gray-600">Phone: +62999999999999</p>
          </div>
        </motion.div>
      </AnimatePresence>

      <footer className="p-4 mt-auto text-white bg-gray-800">
        <div className="container mx-auto">
          <p className="text-center">&copy; 2024 COFFEESITE. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Contact;
