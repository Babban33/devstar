import{
    writable
  } from "svelte/store";


  interface Certificate {
    id: number,
    link:string,
    title: string,
  };

  export const Certificationstore = writable<Certificate[]>([])