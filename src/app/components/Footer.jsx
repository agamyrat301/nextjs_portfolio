"use client";
import React, { useState } from "react";

const Footer = () => {
  const [title, setTitle] = useState('<Agamyrat/>')
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <span><code>{title}</code></span>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
