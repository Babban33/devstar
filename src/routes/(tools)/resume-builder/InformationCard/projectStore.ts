import { writable } from "svelte/store";
interface projects {
    id: number,
    projectName: string,
    tech_used : string,
    description1: string,
    description2: string,
    projectLink: string,
};
export const projectStore = writable<projects[]>([]);
