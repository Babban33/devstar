import { writable } from 'svelte/store';

let data = {
    tagline: "",
    techSkills: [""],
    softSkills: [""]
}

export default writable(data);