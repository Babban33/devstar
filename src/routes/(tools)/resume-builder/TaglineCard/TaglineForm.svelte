<script>
  import taglineDetails from "./info.json";

  /**
	 * @type {() => void}
	 */
  export let onSubmit;

  /**
	 * @type {(arg0: { tagline: string; techSkills: string[]; softSkills: string[]; }) => void}
	 */
  export let updatedTaglineCard;

  let techSkillsInput = '';
  let softSkillsInput = '';
  function formSubmit() {
    onSubmit();
    const techSkills = techSkillsInput.split(/\n|,/).map(skill => skill.trim()).filter(skill => skill !== '');
    const softSkills = softSkillsInput.split(/\n|,/).map(skill => skill.trim()).filter(skill => skill !== '');
    updatedTaglineCard({
      tagline: taglineDetails.tagline,
      techSkills,
      softSkills,
    });
  }
  /**
	 * @type {() => void}
	 */
   export let onCancel;
  const handleCancel = () => {
    onCancel();
  }
</script>

<form on:submit={formSubmit} id="taglineform" class="dark:bg-gray-400 flex flex-col rounded-xl border-2 border-gray p-6 sm:w-2/3">
  <div class="mb-4 text-left text-xl font-bold">Edit Profile</div>
  <div class="mb-3">
    <label for="addyourtagline" class="mb-1 block font-serif font-medium text-gray-900">Add your Tagline</label>
    <input type="text" id="addyourtagline" placeholder="Enter your Tagline" name="addyourtagline" class="w-full rounded-xl border border-gray-500 px-2 py-2 font-serif sm:w-3/" bind:value="{taglineDetails.tagline}" />
  </div>
  <div class="mb-3">
    <label for="addyourtechnicalskills" class="mb-1 block font-serif font-medium text-gray-900">Add your Technical Skills</label>
    <textarea id="addyourtechnicalskills" placeholder="Type Skills (separated by commas or newlines)" name="addyourtechnicalskills" class="w-full rounded-xl border border-gray-500 px-2 py-2 font-serif sm:w-3/" bind:value="{techSkillsInput}" />
  </div>
  <div class="mb-3">
    <label for="addyoursoftskills" class="mb-1 block font-serif font-medium text-gray-900">Add your Soft Skills</label>
    <input type="text" id="addyourtechnicalskills" placeholder="Type Skills (separated by commas or newlines)" name="addyoursoftskills" class="w-full rounded-xl border border-gray-500 px-2 py-2 font-serif sm:w-3/" bind:value="{softSkillsInput}"/>
  </div>
  <div class="mt-6 flex justify-end sm:mt-8">
    <button type="button" on:click={onCancel} id="closebutton" class="mr-4 px-4 py-2 font-thin text-black">Close</button>
    <button type="submit" class="rounded-xl border border-gray-800 bg-gray-900 px-6 py-2 font-thin text-white">Done</button>
  </div>
</form>
