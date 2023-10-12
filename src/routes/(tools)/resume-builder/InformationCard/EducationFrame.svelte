<div class="flex items-center justify-between p-4">
  <div class="flex items-center">
    <div class="rounded-full bg-gray-400 dark:bg-white p-4">
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
        </svg>
      </span>
    </div>
    <div class="ml-2">
      <h1 class="inline text-base font-medium text-gray-900 dark:text-white">Add Education Details</h1>
      <p class="text-sm text-gray-700 dark:text-gray-400">Your College/School</p>
    </div>
  </div>

  <div class="flex items-center">
    <button on:click={educationForm} class="flex items-center rounded-lg border-2 border-gray-900 dark:border-white bg-transparent px-6 py-2 text-lg font-semibold text-gray-900 dark:text-white">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6">
        <path fill-rule="evenodd" d="M12 5.25a.75.75 0 01.75.75v5.25H18a.75.75 0 010 1.5h-5.25V18a.75.75 0 01-1.5 0v-5.25H6a.75.75 0 010-1.5h5.25V6a.75.75 0 01.75-.75z" clip-rule="evenodd" />
      </svg>
      Add
    </button>
  </div>
</div>


<script>
  
  import Educationform from "./Educationform.svelte";
  let isEditing = false
  function educationForm(){
    isEditing = !isEditing;
  }
  
</script>

{#if isEditing}
<Educationform onSubmit={educationForm}  onCancel={educationForm}/>
{/if}
