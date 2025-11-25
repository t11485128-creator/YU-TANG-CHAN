export enum Topic {
  Home = 'HOME',
  Habits = 'HABITS',
  ChatGPT = 'CHATGPT',
  VBA = 'VBA'
}

export interface PromptTemplate {
  role: string;
  context: string;
  task: string;
  outputFormat: string;
  constraints: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}