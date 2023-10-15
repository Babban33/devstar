
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

  export const EducationStore = writable<Education>({
    id: 0,
    college_name:"hello",
    city:"pune",
    degree:"UG",
    CGPA:"7.7",
    start_year:"12/23",
    end_year:"12/26"
  })

