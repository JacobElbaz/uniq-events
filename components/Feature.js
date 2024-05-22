'use client'
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

function Feature({ inverted, header, description, image, height }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="feature"
      id={header.split(" ")[0].toLowerCase()}
    >
      <div className="feature-image">
        <Image
          fill
          src={image}
          alt={`feature-${header}`}
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className="feature-text">
        <h2>{header}</h2>
        <p>{description}</p>
      </div>
    </motion.div>
  );
}

export default Feature;
