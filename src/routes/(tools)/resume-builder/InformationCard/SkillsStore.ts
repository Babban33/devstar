import { writable } from 'svelte/store';

interface Details {
    techSkills: string[];
    softSkills: string[];
}

export const SkillsStore = writable<Details>({
    techSkills: [],
    softSkills: [],
});