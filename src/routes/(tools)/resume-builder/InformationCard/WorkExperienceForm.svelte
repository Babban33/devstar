<script lang="ts">
  import { WorkExpStore } from "./workExp";
  let experience = {
    company: "",
    job: "",
    point1: "",
    point2: "",
    start: "",
    end: "",
  };
  export let onCancel: ()=> void;
  export let idtoadd: number;
  function formSubmit(){
    onCancel();
    if (idtoadd === -1)
    {
      WorkExpStore.update(items =>{
        return [...items, {id: $WorkExpStore.length, company_name: experience.company, designation: experience.job, discription_1: experience.point1, discription_2: experience.point2, start_date: experience.start, end_date: experience.end}]
      });
    }
  }
</script>

<style>
  .work-experience-upper_form {
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
  .work-experience_form-container {
    background-color: white;
    max-width: 900px;
    padding: 20px;
    border-radius: 10px;
  }
</style>


<div class="work-experience-upper_form">
  <div class="work-experience_form-container">
    <form on:submit|preventDefault={formSubmit} id="workexperienceform">
      <div class="mb-4 text-left text-xl font-bold">Work Experience</div>
      <div class="py-3">
        <label for="company" class="block mb-1 text-gray-900 font-bold">Company name</label>
        {#if idtoadd > -1}
          <input bind:value={$WorkExpStore[idtoadd].company_name} type="text" id="company" class="w-full rounded-xl border border-gray-600 px-3 py-2" placeholder="Ex: Microsoft, Google, Facebook, etc." required>
        {:else}
          <input bind:value={experience.company} type="text" id="company" class="w-full rounded-xl border border-gray-600 px-3 py-2" placeholder="Ex: Microsoft, Google, Facebook, etc." required>
        {/if}
      </div>
      <div class="py-2">
        <label for="job" class="block mb-1 text-gray-900 font-bold">Job role</label>
        {#if idtoadd > -1}
          <input bind:value={$WorkExpStore[idtoadd].designation} type="text" id="job" class="w-full rounded-xl border border-gray-600 px-3 py-2" placeholder="Ex: Software Engineer, Data Analyst, etc." required>
        {:else}
          <input bind:value={experience.job} type="text" id="job" class="w-full rounded-xl border border-gray-600 px-3 py-2" placeholder="Ex: Software Engineer, Data Analyst, etc." required>
        {/if}
      </div>
      <div class="py-2">
        <label for="link" class="block mb-1 text-gray-900 font-bold">Point 1</label>
        {#if idtoadd > -1}
          <input bind:value={$WorkExpStore[idtoadd].discription_1} type="text" id="link" class="w-full rounded-xl border border-gray-600 px-3 py-2" placeholder="Enter first bullet point" required>
        {:else}
          <input bind:value={experience.point1} type="text" id="link" class="w-full rounded-xl border border-gray-600 px-3 py-2" placeholder="Enter first bullet point" required>
        {/if}
      </div>
      <div class="py-2">
        <label for="link" class="block mb-1 text-gray-900 font-bold">Point 2</label>
        {#if idtoadd > -1}
          <input bind:value={$WorkExpStore[idtoadd].discription_2} type="text" id="link" class="w-full rounded-xl border border-gray-600 px-3 py-2" placeholder="Enter second bullet point" required>
        {:else}
          <input bind:value={experience.point2} type="text" id="link" class="w-full rounded-xl border border-gray-600 px-3 py-2" placeholder="Enter second bullet point" required>
        {/if}
      </div>
      <div class="p-2">
        <label for="dates" class="block mb-2 text-sm font-bold">Start - End Date</label>
        <div class="flex items-center">
          <div class="relative">
            {#if idtoadd > -1}
              <input required bind:value={$WorkExpStore[idtoadd].start_date} name="start" type="date" class="w-full rounded-xl border border-gray-600 px-3 py-2" placeholder="Select start date">
            {:else}
              <input required bind:value={experience.start} name="start" type="date" class="w-full rounded-xl border border-gray-600 px-3 py-2" placeholder="Select start date">
            {/if}
          </div>
          <span class="mx-4 text-gray-500">to</span>
          <div class="relative">
            {#if idtoadd > -1}
              <input required bind:value={$WorkExpStore[idtoadd].end_date} name="end" type="date" class="w-full rounded-xl border border-gray-600 px-3 py-2" placeholder="Select end date">
            {:else}
              <input required bind:value={experience.end} name="end" type="date" class="w-full rounded-xl border border-gray-600 px-3 py-2" placeholder="Select end date">
            {/if}
          </div>
        </div>
      </div>
      <div class="text-right py-8">
        <button on:click={onCancel} type="button" id="closebutton" class="mr-4 px-4 py-2 font-thin text-black">Cancel</button>
        <button type="submit" class="rounded-xl border border-gray-800 bg-gray-900 p-1 px-6 py-2 font-thin text-white">Done</button>
      </div>
    </form>
  </div>
</div>