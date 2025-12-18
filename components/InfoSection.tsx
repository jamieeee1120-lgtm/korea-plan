
import React from 'react';
import { Phone, AlertTriangle, ShieldCheck } from 'lucide-react';

const InfoSection: React.FC = () => {
  return (
    <div className="space-y-6 animate-slide-in">
      <div className="bg-[#7F212E]/5 border border-[#7F212E]/10 p-6 rounded shadow-sm">
        <h3 className="text-sm font-bold text-[#7F212E] mb-4 flex items-center gap-2 tracking-widest uppercase">
          <AlertTriangle size={18} /> 緊急聯絡
        </h3>
        <ul className="text-sm space-y-3 text-[#7F212E]/80 font-medium">
          <li className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-[#7F212E]/10 flex items-center justify-center">
               <Phone size={14} />
            </span>
            警察局：112
          </li>
          <li className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-[#7F212E]/10 flex items-center justify-center">
               <Phone size={14} />
            </span>
            急救/火警：119
          </li>
          <li className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-[#7F212E]/10 flex items-center justify-center">
               <ShieldCheck size={14} />
            </span>
            駐韓國領事處：(82-2) 739-7363
          </li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded shadow-sm border border-gray-50 space-y-4">
        <h3 className="text-[10px] font-bold text-[#9B9B9B] uppercase tracking-[0.2em]">入境與交通提醒</h3>
        <div className="space-y-4">
          <div className="space-y-1">
            <p className="text-sm font-bold text-[#4A4A4A]">1. 禁帶肉類製品</p>
            <p className="text-xs text-[#9B9B9B] leading-relaxed">嚴格禁止攜帶任何肉類、蛋類及其製品入境韓國，違者將處以高額罰款。</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm font-bold text-[#4A4A4A]">2. K-ETA 或 免簽</p>
            <p className="text-xs text-[#9B9B9B] leading-relaxed">請確認是否需要申請 K-ETA（通常港澳台護照目前有條件免簽，請依官方公告為準）。</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm font-bold text-[#4A4A4A]">3. KTX 提前預訂</p>
            <p className="text-xs text-[#9B9B9B] leading-relaxed">往返首爾與釜山的 KTX 車票建議在出發前一個月於 Korail 官網預訂。</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm font-bold text-[#4A4A4A]">4. WOWPASS / T-money</p>
            <p className="text-xs text-[#9B9B9B] leading-relaxed">建議在機場領取 WOWPASS，結合儲值、提款與交通卡功能，非常方便。</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
