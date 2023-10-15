
import { writable} from "svelte/store"

interface Education {
    id: number,
    college_name: string ,
    city: string,
    degree: string,
    CGPA : string,
    start_year: string ,
    end_year : string , 

  };

  export const EducationStore = writable<Education[]>([]);

