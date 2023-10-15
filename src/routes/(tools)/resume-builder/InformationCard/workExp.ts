import{
  writable
} from "svelte/store";

interface  workExp {
    id: number,
    company_name: string,
    designation: string,
    discription_1:string,
    discription_2:string,
    start_date: string,
    end_date: string,
  };
  export const WorkExpStore=writable<workExp[]>([]);

