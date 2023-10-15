import { writable } from "svelte/store";
interface projects {
    id: number,
    name: String,
    tech_used : string,
    description1: String,
    description2: String,
    link: String,
};
export const projectStore = writable<projects>({
    id: 0,
    name: "",
    tech_used : "",
    description1: "",
    description2: "",
    link: "",
})
