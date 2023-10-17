<script>
	import CForm from "./CForm.svelte";

  let isEditing = false;
  function toggleForm()
  {
    isEditing = !isEditing;
  }
</script>
<div class="flex items-center justify-between p-4">
    <div class="flex items-center">
      <div class="rounded-full bg-white p-3">
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-8 w-8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12" />
          </svg>
        </span>
      </div>
      <div class="ml-2">
        <h1 class="inline text-base text-white">Add Certification Details</h1>
        <p class="text-sm text-gray-400">Your certificates</p>
      </div>
    </div>
  
    <div class="flex items-center">
      <button on:click={toggleForm} class="flex items-center rounded-lg border-2 border-white bg-transparent px-6 py-2 text-lg font-semibold text-white">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6">
          <path fill-rule="evenodd" d="M12 5.25a.75.75 0 01.75.75v5.25H18a.75.75 0 010 1.5h-5.25V18a.75.75 0 01-1.5 0v-5.25H6a.75.75 0 010-1.5h5.25V6a.75.75 0 01.75-.75z" clip-rule="evenodd" />
        </svg>
  
        Add
      </button>
    </div>
  </div>
{#if isEditing}
  <CForm onCancel={toggleForm}/>
{/if}