import { writable } from 'svelte/store';

interface Details {
    tagline: string;
    techSkills: string[];
    softSkills: string[];
}

export const taglineStore = writable<Details>({
    tagline: '',
    techSkills: [],
    softSkills: [],
});