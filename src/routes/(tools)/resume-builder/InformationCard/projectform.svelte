<script lang="ts">
  import {projectStore} from "./projectStore";
  let project = {
    name: "",
    tech_used :"",
    description1: "",
    description2: "",
    link: "",
  }
  export let onCancel: ()=> void;
  export let idtoadd: number;
  function formSubmit(){
    onCancel();
    if (idtoadd > -1)
    {
      projectStore.update(items => [
        ...items,
        {
          id: $projectStore.length,
          projectName: project.name,
          description1: project.description1,
          description2: project.description2,
          projectLink: project.link,
          tech_used: project.tech_used,
        }
      ]);
    }
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
  }
</style>

<div class="form-upper">
  <div class="form-container">
    <form on:submit|preventDefault={formSubmit} id="projectform">
      <div class="mb-4 text-left text-xl font-bold">Projects Details</div>
      <div class="flex">
        <div class="mr-4 flex-grow sm:mr-8">
          <label for="projectname" class="mb-1 block font-bold text-gray-900">Project Name</label>
          {#if idtoadd > -1}
            <input required type="text" id="projectname" name="projectname" class="sm:w-2/ w-full rounded-xl border border-gray-600 px-3 py-2" bind:value="{$projectStore[idtoadd].projectName}" placeholder="Enter project name" />
          {:else}
            <input required type="text" id="projectname" name="projectname" class="sm:w-2/ w-full rounded-xl border border-gray-600 px-3 py-2" bind:value="{project.name}" placeholder="Enter project name" />
          {/if}
        </div>
        <div class="ml-4 flex-grow sm:ml-8">
          <label for="projectlink" class="mb-1 block font-bold text-gray-900">Project Link</label>
          {#if idtoadd > -1}
            <input required type="text" id="projectlink" name="projectlink" class="w-full rounded-xl border border-gray-600 px-3 py-2" bind:value="{$projectStore[idtoadd].projectLink}" placeholder="Enter project link" />
          {:else}
            <input required type="text" id="projectlink" name="projectlink" class="w-full rounded-xl border border-gray-600 px-3 py-2" bind:value="{project.link}" placeholder="Enter project link" />
          {/if}
        </div>
      </div>
      <div class="flex-grow sm:mt-2">
        <label for="projectdesc" class="mb-1 block font-bold text-gray-900">Point 1</label>
        {#if idtoadd > -1}
          <input bind:value={$projectStore[idtoadd].description1} type="text" id="link" class="w-full rounded-xl border border-gray-600 px-3 py-2" placeholder="Enter first bullet point" required>
        {:else}
          <input bind:value={project.description1} type="text" id="link" class="w-full rounded-xl border border-gray-600 px-3 py-2" placeholder="Enter first bullet point" required>
        {/if}
      </div>
      <div class="flex-grow sm:mt-2">
        <label for="projectdesc" class="mb-1 block font-bold text-gray-900">Point 2</label>
        {#if idtoadd > -1}
          <input bind:value={$projectStore[idtoadd].description2} type="text" id="link" class="w-full rounded-xl border border-gray-600 px-3 py-2" placeholder="Enter second bullet point" required>
        {:else}
          <input bind:value={project.description2} type="text" id="link" class="w-full rounded-xl border border-gray-600 px-3 py-2" placeholder="Enter second bullet point" required>
        {/if}
      </div>
      <div class="mt-6 flex justify-end sm:mt-8">
        <button on:click={onCancel} type="button" id="closebutton" class="mr-4 px-4 py-2 font-thin text-black">Close</button>
        <button type="submit" class="rounded-xl border border-gray-800 bg-gray-900 p-1 px-6 py-2 font-thin text-white">Done</button>
      </div>
    </form>
  </div>
</div>
