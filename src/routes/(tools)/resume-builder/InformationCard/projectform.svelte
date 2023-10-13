<script>
  import projects from "./projects";
  /**
	 * @type {() => void}
	 */
  export let onSubmit;
  function formSubmit(){
       onSubmit();
  }
  /**
	 * @type {() => void}
	 */
  export let onCancel;
  function closeForm(){
    onCancel();
  }
</script>
<form on:submit={formSubmit} id="projectform" class="relative flex w-3/4 flex-col rounded-3xl border-2 border-gray-100 p-6 shadow-2xl sm:w-2/3 lg:w-1/2 xl:w-1/3 bg-white">
  <div class="mb-4 text-left text-xl font-bold">Projects Details</div>
  <div class="flex">
    <div class="mr-4 flex-grow sm:mr-8">
      <label for="projectname" class="mb-1 block font-bold text-gray-900">Project Name</label>
      <input type="text" id="projectname" name="projectname" class="sm:w-2/ w-full rounded-xl border border-gray-600 px-3 py-2" bind:value="{projects.project1.name}" placeholder="Enter project name" />
    </div>
    <div class="ml-4 flex-grow sm:ml-8">
      <label for="projectlink" class="mb-1 block font-bold text-gray-900">Project Link</label>
      <input type="text" id="projectlink" name="projectlink" class="w-full rounded-xl border border-gray-600 px-3 py-2" bind:value="{projects.project1.link}" placeholder="Enter project link" />
    </div>
  </div>
  <div class="mt-4 flex-grow sm:mt-8">
    <label for="projectdesc" class="mb-1 block font-bold text-gray-900">Project Description</label>
    <textarea id="projectdesc" name="projectdesc" class="w-full rounded-xl border border-gray-600 px-3 py-2" rows="2" bind:value="{projects.project1.description1}" placeholder="Enter your description"></textarea>
  </div>
  <div class="mt-6 flex justify-end sm:mt-8">
    <button on:click={closeForm} type="button" id="closebutton" class="mr-4 px-4 py-2 font-thin text-black">Close</button>
    <button type="submit" class="rounded-xl border border-gray-800 bg-gray-900 p-1 px-6 py-2 font-thin text-white">Done</button>
  </div>
</form>