import axios from "axios";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ResidentInfo = ({ residenturl }) => {
  const [resident, setResident] = useState({});

  useEffect(() => {
    axios.get(residenturl).then((res) => setResident(res.data));
  }, [residenturl]);

  //   console.log(resident);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.1 }} // Comienza con escala pequeña (0.1) y opacidad 0
      animate={{ opacity: 1, scale: 1 }} // Aumenta la escala a su tamaño actual y opacidad a 1
      transition={{ duration: 0.5 }}
    >
      <div className="resident-info">
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <img src={resident.image} alt="" />
        </motion.div>

        <h3>
          Name: <b>{resident.name}</b>
        </h3>
        <ul>
          <li>
            Status: <b className="bold">{resident.status}</b>
          </li>
          <li>
            Origin: <b className="bold">{resident.origin?.name}</b>
          </li>
          <li>
            Episodes: <b className="bold">{resident.episode?.length}</b>
          </li>
          <li>
            Gender: <b className="bold">{resident.gender}</b>
          </li>
          <li>
            Specie: <b className="bold">{resident.species}</b>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default ResidentInfo;
