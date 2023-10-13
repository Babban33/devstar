
import { writable} from "svelte/store"


let eduDetails_1 = {
    college_name: "" ,
    degree: "",
    CGPA : "",
    start_year: " ",
    end_year : " ",

  }
  // let eduDetails_2 = {
  //   college_name: "" ,
  //   degree: "",
  //   CGPA : "",
  //   start_year: " ",
  //   end_year : " ",

  // }
  export const educationStore = writable(eduDetails_1)
  export default {eduDetails_1}

