import React from "react";
import { motion } from "framer-motion";

const LocationInfo = ({ name, type, dimension, residents }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.1 }} // Comienza con escala pequeña (0.1) y opacidad 0
      animate={{ opacity: 1, scale: 1 }} // Aumenta la escala a su tamaño actual y opacidad a 1
      transition={{ duration: 0.5 }}
    >
      <div className="location-info">
        <h1 className="title">RICK AND MORTY</h1>
        <h1>
          Name: <b>{name}</b>
        </h1>
        <h3>
          Type: <b>{type}</b>
        </h3>
        <h3>
          Dimension: <b>{dimension}</b>
        </h3>
        <h3>
          Residents: <b>{residents}</b>
        </h3>
        
      </div>
    </motion.div>
  );
};

export default LocationInfo;
