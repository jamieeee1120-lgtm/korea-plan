
import React, { useState } from 'react';
import { ChecklistItem, Memo } from '../types';
import { Trash2, Plus } from 'lucide-react';

interface ListsProps {
  checklist: ChecklistItem[];
  onToggleCheck: (id: string) => void;
  memos: Memo[];
  onAddMemo: (text: string) => void;
  onRemoveMemo: (id: string) => void;
}

const ListsSection: React.FC<ListsProps> = ({ checklist, onToggleCheck, memos, onAddMemo, onRemoveMemo }) => {
  const [memoInput, setMemoInput] = useState('');

  const handleAddMemo = () => {
    if (memoInput.trim()) {
      onAddMemo(memoInput);
      setMemoInput('');
    }
  };

  return (
    <div className="space-y-8 animate-slide-in">
      {/* Checklist */}
      <div className="bg-white p-6 rounded shadow-sm border border-gray-50">
        <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9B9B9B] mb-6">行前準備 CHECKLIST</h3>
        <div className="space-y-4">
          {checklist.map((item) => (
            <div 
              key={item.id} 
              className="flex items-center gap-3 cursor-pointer group"
              onClick={() => onToggleCheck(item.id)}
            >
              <div className={`w-5 h-5 rounded border-2 transition-colors flex items-center justify-center ${item.done ? 'bg-[#7F212E] border-[#7F212E]' : 'border-gray-200 group-hover:border-[#A68E7E]'}`}>
                {item.done && <div className="w-2 h-2 bg-white rounded-full" />}
              </div>
              <span className={`text-sm font-medium transition-all ${item.done ? 'line-through text-gray-300' : 'text-[#4A4A4A]'}`}>
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Memos */}
      <div className="bg-white p-6 rounded shadow-sm border border-gray-50">
        <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9B9B9B] mb-6">個人備忘錄</h3>
        <div className="flex gap-2 mb-6">
          <input 
            type="text" 
            value={memoInput}
            onChange={(e) => setMemoInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleAddMemo()}
            placeholder="輸入備註或連結..." 
            className="flex-grow bg-[#FAFAFA] border border-gray-100 rounded px-4 py-2 text-sm focus:outline-none focus:border-[#A68E7E]"
          />
          <button 
            onClick={handleAddMemo}
            className="bg-[#A68E7E] text-white px-4 rounded hover:opacity-90 active:scale-95 transition-all"
          >
            <Plus size={18} />
          </button>
        </div>
        <div className="space-y-3">
          {memos.length === 0 ? (
            <p className="text-center text-xs text-gray-300 py-4 italic">暫無備忘錄</p>
          ) : (
            memos.map((m) => (
              <div key={m.id} className="p-4 bg-[#FDFDFD] border border-gray-100 rounded text-sm text-[#4A4A4A] shadow-sm flex justify-between items-start group">
                <div className="flex-1">
                  <p className="leading-relaxed">{m.text}</p>
                  <p className="text-[9px] text-gray-300 mt-2 font-bold uppercase tracking-widest">{m.createdAt}</p>
                </div>
                <button 
                  onClick={() => onRemoveMemo(m.id)}
                  className="text-gray-200 hover:text-red-300 ml-4 mt-1 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Trash2 size={14} />
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ListsSection;
