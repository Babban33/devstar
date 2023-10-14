import{
    writable
  } from "svelte/store";


  interface Certificate {
    link:string,
    title: string,
  };

  export const Certificationstore = writable<Certificate>( {
    link:"url",
    title:"certificate"
  })