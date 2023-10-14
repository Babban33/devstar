
import { writable} from "svelte/store"

interface Education {
    college_name: string ,
    city: string,
    degree: string,
    CGPA : string,
    start_year: string ,
    end_year : string , 

  };

  export const EducationStore = writable<Education>({
    college_name:"hello",
    city:"pune",
    degree:"UG",
    CGPA:"7.7",
    start_year:"12/23",
    end_year:"12/26"
  })

  // let eduDetails_2 = {
  //   college_name: "" ,
  //   degree: "",
  //   CGPA : "",
  //   start_year: " ",
  //   end_year : " ",

  // }
  // export const educationStore = writable(eduDetails_1)
  // export default {eduDetails_1}

