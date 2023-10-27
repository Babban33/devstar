<!-- <script>
  import { taglineStore } from "./tagline";
  import TaglineForm from "./TaglineForm.svelte";
  let isEditing = false
  function toggleForm(){
    isEditing = !isEditing;
  }
  /**
	 * @param {{ tagline: string; techSkills: string[]; softSkills: string[]; }} updatedDetails
	 */
  function updateTaglineDetails(updatedDetails) {
    taglineStore.update(value => {
      return {...value, ...updatedDetails};
    });
  }
</script>
<div class="w-auto rounded-2xl bg-gray-400 p-5 text-gray-900">
  <div class="flex items-center justify-between">
    <h5 class="font-serif text-2xl font-semibold">Tagline</h5>
    <button on:click={toggleForm} class="inline-flex items-center gap-2 text-md font-sans rounded-xl bg-gray-900 px-4 py-2 text-white font-light">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" /></svg
      >
      Edit
    </button>
  </div>
  <p class="place-items-center pb-4 pt-2 font-sans text-white font-normal font-">{$taglineStore.tagline}</p>
  
  {#if $taglineStore.techSkills.length > 0}
    <h5 class="font-semibold text-2xl pb-2 text-gray-900 font-serif">Technical Skills</h5>
    {#each $taglineStore.techSkills as Skills}
    <span class="rounded-full border-2 border-gray-950 px-2 inline-block mr-2 mb-1">
      <span class="text-center font-sans text-lg font-normal text-black">{Skills}</span>
    </span>
    {/each}
  {/if}
  
  {#if $taglineStore.softSkills.length > 0}
    <h5 class="font-semibold text-2xl pb-2 text-gray-900 font-serif">Soft Skills</h5>
    {#each $taglineStore.softSkills as Skills}
    <span class="rounded-full border-2 border-gray-950 px-2 inline-block mr-2 mb-1">
      <span class="text-center font-sans text-lg font-normal text-black">{Skills}</span>
    </span>
    {/each}
  {/if}
</div>
{#if isEditing}
<TaglineForm updatedTaglineCard={updateTaglineDetails} onCancel={toggleForm}/>
{/if} -->
<script>
  function downloadForm() {}
</script>
<div class="flex">
  <div class="w-full rounded-2xl bg-white p-5 text-gray-900" style="height: 700px;">
    <div class="flex items-center justify-between">
      <h5 class="font-serif text-2xl font-semibold">Resume</h5>
      <button
        on:click={downloadForm}
        class="inline-flex items-center gap-2 text-md font-sans rounded-xl border-2 px-4 py-2 text-gray font-light">
        Download
      </button>
    </div>
  </div>
</div>