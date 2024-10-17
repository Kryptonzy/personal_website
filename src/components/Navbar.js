import React from 'react';

const Navbar = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-xl font-bold">kzy</div>
        <div className="flex space-x-6 text-xl">
          <a href="https://github.com/Kryptonzy" target="_blank" rel="noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://space.bilibili.com/1847304381" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-bilibili"></i>
          </a>
          <a href="https://kryptonzy.github.io/blog" target="_blank" rel="noreferrer">
            <i className="fa-solid fa-blog"></i>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
