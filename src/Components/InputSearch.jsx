import axios from "axios";
import React, { useState } from "react";
import { motion } from "framer-motion";

const InputSearch = ({ setApiInfo }) => {
  const [searchId, setSearchId] = useState(" ");

  const handleSearch = () => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${searchId}`)
      .then((res) => setApiInfo(res.data));
  };
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.1 }} // Comienza con escala pequeña (0.1) y opacidad 0
      animate={{ opacity: 1, scale: 1 }} // Aumenta la escala a su tamaño actual y opacidad a 1
      transition={{ duration: 0.5 }}
    >
      <div className="input-search">
        <input
          type="text"
          onChange={(e) => setSearchId(e.target.value)}
          value={searchId}
        />
        <p>Type a number from 1 to 126</p>
        <button onClick={handleSearch}> Search</button>
      </div>
    </motion.div>
  );
};

export default InputSearch;
