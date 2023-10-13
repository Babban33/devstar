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

<style>
  .form-upper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    backdrop-filter: blur(3px);
  }
  .form-container {
    background-color: white;
    max-width: 600px;
    padding: 20px;
    border-radius: 10px;
    /* box-shadow: 0 25px 50px -12px rgba(99, 99, 99, 0.25); */
  }
</style>

<div class="form-upper">
  <div class="form-container">
    <form on:submit={formSubmit} id="projectform">
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
  </div>
</div>
