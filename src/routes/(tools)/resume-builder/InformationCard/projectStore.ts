import { writable } from "svelte/store";
interface projects {
    name: String,
    tech_used : string,
    description1: String,
    description2: String,
    link: String,
};
export const projectStore = writable<projects>({
    name: "",
    tech_used : "",
    description1: "",
    description2: "",
    link: "",
})
