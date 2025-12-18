
import React, { useState, useEffect } from 'react';
import { Section, DayItinerary, Expense, ChecklistItem, Memo } from './types';
import { ITINERARY_DATA, EXCHANGE_RATE } from './constants';
import Header from './components/Header';
import Navigation from './components/Navigation';
import PlanSection from './components/PlanSection';
import GuideSection from './components/GuideSection';
import WalletSection from './components/WalletSection';
import ListsSection from './components/ListsSection';
import InfoSection from './components/InfoSection';
import AssistantSection from './components/AssistantSection';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>(Section.PLAN);
  const [activeDay, setActiveDay] = useState<number>(1);
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [checklist, setChecklist] = useState<ChecklistItem[]>([]);
  const [memos, setMemos] = useState<Memo[]>([]);

  // Initialize data from local storage
  useEffect(() => {
    const savedExpenses = localStorage.getItem('trip_expenses');
    const savedChecklist = localStorage.getItem('trip_checklist');
    const savedMemos = localStorage.getItem('trip_memos');

    if (savedExpenses) setExpenses(JSON.parse(savedExpenses));
    if (savedChecklist) {
      setChecklist(JSON.parse(savedChecklist));
    } else {
      setChecklist([
        { id: '1', text: "護照/機票", done: false },
        { id: '2', text: "eSim/網卡", done: false },
        { id: '3', text: "KTX 訂票確認", done: false },
        { id: '4', text: "WOWPASS 儲值", done: false }
      ]);
    }
    if (savedMemos) setMemos(JSON.parse(savedMemos));
  }, []);

  // Persist data
  useEffect(() => {
    localStorage.setItem('trip_expenses', JSON.stringify(expenses));
  }, [expenses]);

  useEffect(() => {
    localStorage.setItem('trip_checklist', JSON.stringify(checklist));
  }, [checklist]);

  useEffect(() => {
    localStorage.setItem('trip_memos', JSON.stringify(memos));
  }, [memos]);

  const addExpense = (title: string, amount: number) => {
    const newExpense: Expense = {
      id: Date.now().toString(),
      title,
      amount,
      hkd: (amount * EXCHANGE_RATE).toFixed(2),
      date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setExpenses(prev => [newExpense, ...prev]);
  };

  const removeExpense = (id: string) => {
    setExpenses(prev => prev.filter(e => e.id !== id));
  };

  const toggleCheck = (id: string) => {
    setChecklist(prev => prev.map(item => item.id === id ? { ...item, done: !item.done } : item));
  };

  const addMemo = (text: string) => {
    const newMemo: Memo = {
      id: Date.now().toString(),
      text,
      createdAt: new Date().toLocaleDateString()
    };
    setMemos(prev => [newMemo, ...prev]);
  };

  const removeMemo = (id: string) => {
    setMemos(prev => prev.filter(m => m.id !== id));
  };

  return (
    <div className="min-h-screen pb-24 flex flex-col">
      <Header />
      
      <main className="flex-1 px-4 py-6 max-w-md mx-auto w-full">
        {activeSection === Section.PLAN && (
          <PlanSection 
            activeDay={activeDay} 
            onDayChange={setActiveDay} 
            itinerary={ITINERARY_DATA} 
          />
        )}
        {activeSection === Section.GUIDE && <GuideSection />}
        {activeSection === Section.WALLET && (
          <WalletSection 
            expenses={expenses} 
            onAdd={addExpense} 
            onRemove={removeExpense} 
          />
        )}
        {activeSection === Section.LISTS && (
          <ListsSection 
            checklist={checklist} 
            onToggleCheck={toggleCheck}
            memos={memos}
            onAddMemo={addMemo}
            onRemoveMemo={removeMemo}
          />
        )}
        {activeSection === Section.INFO && <InfoSection />}
        {activeSection === Section.ASSISTANT && (
          <AssistantSection 
            itineraryContext={JSON.stringify(ITINERARY_DATA.find(d => d.day === activeDay))} 
          />
        )}
      </main>

      <Navigation activeSection={activeSection} onNavigate={setActiveSection} />
    </div>
  );
};

export default App;
