<script>
  import { WorkExpStore } from "./workExp";
  let experience = {
    company: "",
    job: "",
    link: "",
    Description: "",
    start: "",
    end: "",
  };
  /**
	 * @type {() => void}
	 */
  export let onCancel;
  function formSubmit(){
    onCancel();
    WorkExpStore.update(items =>{
      return [...items, {id: $WorkExpStore.length, company_name: experience.company, designation: experience.job, discription_1: experience.link, discription_2: experience.Description, start_date: experience.start, end_date: experience.end}]
    })
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
        <input bind:value={experience.company} type="text" id="company" class="w-full rounded-xl border border-gray-600 px-3 py-2" placeholder="Ex: Microsoft, Google, Facebook, etc." required>
      </div>
      <div class="py-2">
        <label for="job" class="block mb-1 text-gray-900 font-bold">Job role</label>
        <input bind:value={experience.job} type="text" id="job" class="w-full rounded-xl border border-gray-600 px-3 py-2" placeholder="e.g., Manager, Project Leader, etc." required>
      </div>
      <div class="py-2">
        <label for="link" class="block mb-1 text-gray-900 font-bold">Website/link</label>
        <input bind:value={experience.link} type="text" id="link" class="w-full rounded-xl border border-gray-600 px-3 py-2" placeholder="e.g., github.com" required>
      </div>
      <div class="py-2">
        <label for="Description" class="block mb-1 text-gray-900 font-bold">Description</label>
        <textarea bind:value={experience.Description} id="Description" class="w-full rounded-xl border border-gray-600 px-3 py-2" placeholder="About your company" required></textarea>
      </div>
      <div class="p-2">
        <label for="dates" class="block mb-2 text-sm font-medium">Start - End Date</label>
        <div class="flex items-center">
          <div class="relative">
            <input required bind:value={experience.start} name="start" type="date" class="w-full rounded-xl border border-gray-600 px-3 py-2" placeholder="Select start date">
          </div>
          <span class="mx-4 text-gray-500">to</span>
          <div class="relative">
            <input required bind:value={experience.end} name="end" type="date" class="w-full rounded-xl border border-gray-600 px-3 py-2" placeholder="Select end date">
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