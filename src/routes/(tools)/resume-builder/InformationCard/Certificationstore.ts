import{
    writable
  } from "svelte/store";


  interface certificate {
    link:string,
    title: string,
  };

  export const Certificationstore = writable<certificate>( {
    link:"url",
    title:"certificate"
  })