<script>
  /**
	 * @type {() => void}
	 */
  export let onSubmit;
  function formSubmit(){
    onSubmit();
  }
</script>
 
    <form on:click={formSubmit} class=" rounded-lg relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10" > 
      <div class="text-3xl  "> Work Experience</div>
         <div>
    
         <div  class="py-3">
             <label for="company" class="block mb-2 text-sm font-medium">Company name</label>
             <input type="text" id="company" class="bg-gray-50 border border-gray-600 text-gray-900 text-sm rounded-lg  block w-full p-2.5  " placeholder="Ex: microsoft ,google ,facebook etc" required>
         </div>
 
         <div class="py-2">
             <label for="job" class="block mb-2 text-sm font-medium " >Job role</label>
             <input type="text" id="job" class="bg-gray-50 border border-gray-600 text-gray-900 text-sm rounded-lg  block w-full p-2.5 " placeholder="eg: Manager,project leader etc." required>
         </div>
    
         <div class="py-2">
             <label for="link" class="block mb-2 text-sm font-medium ">Website/link</label>
             <input type="url" id="link" class="bg-gray-50 border border-gray-600 text-gray-900 text-sm rounded-lg  block w-full p-2.5 " placeholder="github.com" required>
         </div>
         
         <div class="py-2">
             <label for="Description" class="block mb-2 text-sm font-medium ">Description</label>
             <textarea id="Description" class="bg-gray-50 border border-gray-600 text-gray-900 text-sm rounded-lg  block w-full p-2.5 " placeholder="About your company" required></textarea>
         </div>
         
         <div class="p-2">
         <label for="dates" class="block mb-2 text-sm font-medium ">Start - end date</label>
                      
          <div class="flex items-center">
          <div class="relative">
           
           <input  name="start" type="date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full px-8 p-2.5  " placeholder="Select start date">
            </div>
               <span class="mx-4 text-gray-500">to</span>
               <div class="relative">
                 <input name="end" type="date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full px-8 p-2.5 " placeholder="Select end date">
               </div>
            </div>
 
             </div>
 
         <div class="text-right py-8">
           
           <button type="button" id="closebutton" class="mr-4 px-4 py-2 font-thin text-black">Cancel</button>
 
           <button type="submit" class="rounded-xl border border-gray-800 bg-gray-900 p-1 px-6 py-2 font-thin text-white">Done</button>
 
         </div>
 
 
         </div>
    </form>
 
   