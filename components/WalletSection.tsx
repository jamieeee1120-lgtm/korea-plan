
import React, { useState } from 'react';
import { Expense } from '../types';
import { EXCHANGE_RATE } from '../constants';
import { Plus, Trash2, Camera } from 'lucide-react';

interface WalletProps {
  expenses: Expense[];
  onAdd: (title: string, amount: number) => void;
  onRemove: (id: string) => void;
}

const WalletSection: React.FC<WalletProps> = ({ expenses, onAdd, onRemove }) => {
  const [calcValue, setCalcValue] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newAmount, setNewAmount] = useState('');

  const totalHKD = expenses.reduce((acc, curr) => acc + parseFloat(curr.hkd), 0).toFixed(2);

  const calculateHkd = (krw: string) => {
    try {
      // Basic math safety
      const clean = krw.replace(/[^0-9+\-*/().]/g, '');
      const val = eval(clean) || 0;
      return (val * EXCHANGE_RATE).toFixed(2);
    } catch {
      return '0.00';
    }
  };

  const handleSave = () => {
    const amt = parseFloat(newAmount);
    if (newTitle && amt) {
      onAdd(newTitle, amt);
      setNewTitle('');
      setNewAmount('');
      setShowModal(false);
    }
  };

  return (
    <div className="space-y-6 animate-slide-in">
      {/* Quick Converter */}
      <div className="bg-white p-5 rounded shadow-sm border border-gray-50 space-y-4">
        <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#9B9B9B]">快速換算器</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-[10px] text-[#A68E7E] uppercase font-bold">KRW / 算式</label>
            <input 
              type="text" 
              value={calcValue}
              onChange={(e) => setCalcValue(e.target.value)}
              placeholder="5000+1200" 
              className="w-full bg-[#FAFAFA] border border-gray-200 rounded p-2 text-lg font-semibold font-mono"
            />
          </div>
          <div className="space-y-1">
            <label className="text-[10px] text-[#A68E7E] uppercase font-bold">HKD</label>
            <div className="text-xl font-bold text-[#7F212E] h-11 flex items-center">
              ≈ HKD {calculateHkd(calcValue)}
            </div>
          </div>
        </div>
      </div>

      {/* Expense List */}
      <div className="bg-white rounded shadow-sm border border-gray-50 overflow-hidden">
        <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-[#FAFAFA]">
          <h3 className="font-medium text-sm text-[#4A4A4A]">支出清單</h3>
          <button 
            onClick={() => setShowModal(true)}
            className="text-[10px] font-bold bg-[#A68E7E] text-white px-3 py-1.5 rounded uppercase tracking-wider hover:opacity-90 active:scale-95 transition-all"
          >
            新增項目
          </button>
        </div>
        <div className="divide-y divide-gray-50 max-h-[40vh] overflow-y-auto muji-scrollbar">
          {expenses.length === 0 ? (
            <p className="p-10 text-center text-xs text-[#9B9B9B] italic">尚無支出記錄</p>
          ) : (
            expenses.map((ex) => (
              <div key={ex.id} className="p-4 flex justify-between items-center text-sm group">
                <div className="flex-1">
                  <p className="font-medium text-[#4A4A4A]">{ex.title}</p>
                  <p className="text-[10px] text-[#9B9B9B]">{ex.date}</p>
                </div>
                <div className="text-right flex items-center gap-4">
                  <div>
                    <p className="font-bold text-[#4A4A4A]">₩{ex.amount.toLocaleString()}</p>
                    <p className="text-[10px] text-[#7F212E] font-bold">HKD {ex.hkd}</p>
                  </div>
                  <button onClick={() => onRemove(ex.id)} className="text-gray-200 hover:text-red-400">
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="p-4 bg-[#FAFAFA] border-t border-gray-100 text-right">
          <p className="text-[10px] text-[#9B9B9B] font-bold uppercase">總計支出</p>
          <p className="text-xl font-bold text-[#4A4A4A]">HKD {totalHKD}</p>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-sm rounded overflow-hidden shadow-2xl animate-slide-in">
            <div className="p-4 border-b font-medium text-[#4A4A4A] text-sm flex justify-between">
              新增支出項目
              <button onClick={() => setShowModal(false)} className="text-gray-400">&times;</button>
            </div>
            <div className="p-6 space-y-4">
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-[#9B9B9B]">品項名稱</label>
                <input 
                  type="text" 
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="例如：豬肉湯飯" 
                  className="w-full bg-[#FAFAFA] border border-gray-200 rounded p-2 text-sm"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-[#9B9B9B]">金額 (KRW)</label>
                <input 
                  type="number" 
                  value={newAmount}
                  onChange={(e) => setNewAmount(e.target.value)}
                  placeholder="例如：12000" 
                  className="w-full bg-[#FAFAFA] border border-gray-200 rounded p-2 text-sm"
                />
              </div>
              <div className="space-y-2 pt-2">
                <label className="text-[10px] font-bold text-[#9B9B9B] flex items-center gap-1">
                  <Camera size={12} /> 收據拍照 (選填)
                </label>
                <input type="file" accept="image/*" capture="camera" className="text-[10px] text-gray-500 block w-full file:mr-4 file:py-1 file:px-4 file:rounded file:border-0 file:text-[10px] file:font-bold file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200 cursor-pointer" />
              </div>
            </div>
            <div className="flex border-t">
              <button onClick={() => setShowModal(false)} className="flex-1 py-4 text-xs font-bold text-gray-400 hover:bg-gray-50 transition-colors">取消</button>
              <button onClick={handleSave} className="flex-1 py-4 text-xs font-bold text-[#7F212E] border-l border-gray-100 hover:bg-[#7F212E]/5 transition-colors">儲存</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WalletSection;
