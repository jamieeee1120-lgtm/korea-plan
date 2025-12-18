
import React from 'react';
import { DayItinerary } from '../types';
import * as Icons from 'lucide-react';

interface PlanProps {
  activeDay: number;
  onDayChange: (day: number) => void;
  itinerary: DayItinerary[];
}

const PlanSection: React.FC<PlanProps> = ({ activeDay, onDayChange, itinerary }) => {
  const currentDayData = itinerary.find(d => d.day === activeDay);

  return (
    <div className="space-y-6 animate-slide-in">
      {/* Day Selector */}
      <div className="flex overflow-x-auto gap-3 muji-scrollbar py-2">
        {itinerary.map((d) => (
          <button
            key={d.day}
            onClick={() => onDayChange(d.day)}
            className={`flex-shrink-0 px-5 py-2 rounded-full border text-xs font-bold transition-all ${
              activeDay === d.day
                ? 'bg-[#7F212E] text-white border-[#7F212E] shadow-md'
                : 'bg-white border-gray-200 text-[#9B9B9B]'
            }`}
          >
            DAY {d.day}
          </button>
        ))}
      </div>

      {/* Flight/Hotel Summary */}
      <div className="bg-white rounded p-4 space-y-3 shadow-sm border border-gray-50">
        <div className="flex items-center gap-3 text-sm">
          <Icons.Plane size={16} className="text-[#A68E7E]" />
          <p className="font-medium text-[#4A4A4A] text-xs">CX410 / CX411 (HKG-ICN / PUS-HKG)</p>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <Icons.Bed size={16} className="text-[#A68E7E]" />
          <p className="font-medium text-[#4A4A4A] text-xs">弘大 RYSE / 西面 Lotte Hotel</p>
        </div>
      </div>

      {/* Events Timeline */}
      <div className="space-y-4">
        <h2 className="text-xl font-medium text-[#4A4A4A] tracking-wider mb-2">{currentDayData?.title}</h2>
        <div className="relative pl-6 border-l-2 border-gray-200 ml-3 space-y-8 py-2">
          {currentDayData?.events.map((ev, idx) => {
            const IconComponent = (Icons as any)[ev.icon] || Icons.Circle;
            return (
              <div key={idx} className="relative">
                <div className={`absolute -left-[33px] top-1 w-4 h-4 rounded-full border-2 border-white z-10 ${ev.highlight ? 'bg-[#7F212E]' : 'bg-[#E0E0E0]'}`} />
                <div className={`bg-white p-4 rounded shadow-sm border ${ev.highlight ? 'border-[#7F212E]/20 bg-[#FDF8F7]' : 'border-gray-50'}`}>
                  <div className="flex justify-between items-start mb-1">
                    <span className={`text-[10px] font-bold ${ev.highlight ? 'text-[#7F212E]' : 'text-[#9B9B9B]'}`}>{ev.time}</span>
                    <IconComponent size={14} className="text-gray-300" />
                  </div>
                  <p className="text-sm font-medium text-[#4A4A4A] leading-relaxed">{ev.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Detailed Notes */}
      <div className="bg-white p-5 rounded border-t-4 border-[#7F212E] shadow-sm">
        <h3 className="text-sm font-bold text-[#7F212E] mb-3 flex items-center gap-2 uppercase tracking-widest">
          <Icons.FileText size={16} /> 本日詳細備註
        </h3>
        <div className="text-sm text-[#4A4A4A] whitespace-pre-wrap leading-relaxed tracking-wide opacity-90">
          {currentDayData?.details}
        </div>
      </div>
    </div>
  );
};

export default PlanSection;
