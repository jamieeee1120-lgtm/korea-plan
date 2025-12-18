
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white px-6 py-6 border-b border-gray-100 sticky top-0 z-40">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-medium tracking-[0.2em] text-[#4A4A4A]">旅行日誌</h1>
          <p className="text-[10px] text-[#A68E7E] mt-1 uppercase tracking-widest font-semibold">Seoul & Busan 2024</p>
        </div>
        <div className="text-right">
          <p className="text-xs font-light text-[#9B9B9B] italic">KRW 1,000 ≈ HKD 5.8</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
