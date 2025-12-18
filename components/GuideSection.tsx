
import React from 'react';
import { GUIDE_DATA } from '../constants';

const GuideSection: React.FC = () => {
  return (
    <div className="space-y-12 animate-slide-in">
      <div className="py-4 text-center">
        <h2 className="text-2xl font-light tracking-[0.2em] text-[#4A4A4A]">CULTURAL GUIDE</h2>
        <div className="w-10 h-[1px] bg-gray-300 mx-auto mt-2"></div>
        <p className="text-[10px] text-[#A68E7E] mt-2 uppercase tracking-widest font-bold">In-depth Exploration</p>
      </div>

      {GUIDE_DATA.map((g, idx) => (
        <section key={idx} className="space-y-6">
          <div className="px-2">
            <p className="text-[10px] text-[#7F212E] font-bold uppercase tracking-[0.3em] mb-1">{g.subtitle}</p>
            <h3 className="text-xl font-medium text-[#4A4A4A] relative pb-4 mb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-[2px] after:bg-[#7F212E]">
              {g.title}
            </h3>
            <div className="text-sm leading-relaxed text-[#4A4A4A] bg-white p-6 rounded shadow-sm italic border border-gray-50">
              {g.content.split('\n\n').map((para, pIdx) => (
                <p key={pIdx} className="mb-4 last:mb-0">
                  {para.split('**').map((part, i) => i % 2 === 1 ? <b key={i} className="text-[#7F212E] not-italic">{part}</b> : part)}
                </p>
              ))}
            </div>
          </div>
          {g.map && (
            <div className="bg-white rounded h-56 overflow-hidden relative mx-2 shadow-sm border border-gray-100">
              <div className="absolute top-2 right-2 z-10 bg-white/80 px-2 py-1 text-[9px] rounded font-bold">MAP VIEW</div>
              <iframe width="100%" height="100%" frameBorder="0" scrolling="no" src={g.map}></iframe>
            </div>
          )}
          <div className="w-20 h-[1px] bg-gray-200 mx-auto pt-4"></div>
        </section>
      ))}
      
      <div className="pb-10" />
    </div>
  );
};

export default GuideSection;
