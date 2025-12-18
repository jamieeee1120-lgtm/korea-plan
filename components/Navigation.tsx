
import React from 'react';
import { Section } from '../types';
import { Calendar, BookOpen, Wallet, CheckSquare, Info, Sparkles } from 'lucide-react';

interface NavProps {
  activeSection: Section;
  onNavigate: (section: Section) => void;
}

const Navigation: React.FC<NavProps> = ({ activeSection, onNavigate }) => {
  const items = [
    { id: Section.PLAN, label: 'Plan', icon: Calendar },
    { id: Section.GUIDE, label: 'Guide', icon: BookOpen },
    { id: Section.ASSISTANT, label: 'AI', icon: Sparkles },
    { id: Section.WALLET, label: 'Wallet', icon: Wallet },
    { id: Section.LISTS, label: 'Lists', icon: CheckSquare },
    { id: Section.INFO, label: 'Info', icon: Info },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 flex justify-around items-center py-3 px-2 z-40 shadow-xl pb-safe">
      {items.map(({ id, label, icon: Icon }) => (
        <button
          key={id}
          onClick={() => onNavigate(id)}
          className={`flex flex-col items-center gap-1 transition-colors ${
            activeSection === id ? 'text-[#7F212E]' : 'text-[#9B9B9B]'
          }`}
        >
          <Icon size={20} />
          <span className="text-[9px] font-bold uppercase tracking-tighter">{label}</span>
        </button>
      ))}
    </nav>
  );
};

export default Navigation;
