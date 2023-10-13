import { writable } from 'svelte/store';
interface Achievement {
    id: number;
    achievementName: string;
    achievementLink: string;
  }
export const achievementStore = writable<Achievement[]>([]);
