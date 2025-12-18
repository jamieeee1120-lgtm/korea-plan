
export interface TravelEvent {
  time: string;
  desc: string;
  icon: string;
  highlight?: boolean;
}

export interface DayItinerary {
  day: number;
  title: string;
  events: TravelEvent[];
  details: string;
}

export interface GuideItem {
  title: string;
  subtitle: string;
  content: string;
  map?: string;
}

export interface Expense {
  id: string;
  title: string;
  amount: number;
  hkd: string;
  date: string;
}

export interface ChecklistItem {
  id: string;
  text: string;
  done: boolean;
}

export interface Memo {
  id: string;
  text: string;
  createdAt: string;
}

export enum Section {
  PLAN = 'plan',
  GUIDE = 'guide',
  WALLET = 'wallet',
  LISTS = 'lists',
  INFO = 'info',
  ASSISTANT = 'assistant'
}
