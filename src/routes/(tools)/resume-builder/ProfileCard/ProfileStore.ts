import { writable } from 'svelte/store';

interface UserInfo {
    id: number;
    username: string;
    designation: string;
    social_media: {
        social1: string;
        social2: string;
        social3: string;
    };
}

export const profileStore = writable<UserInfo>({
    id: 1,
    username: "Username",
    designation: "Designation",
    social_media: {
        social1: "",
        social2: "",
        social3: ""
    }
});
