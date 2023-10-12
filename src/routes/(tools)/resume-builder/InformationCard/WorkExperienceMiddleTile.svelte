<script>
  import workExp from "./workExp";
  import WorkExperienceForm from "./WorkExperienceForm.svelte";
  let IsAdd=false;
  function toogleform(){
    IsAdd=!IsAdd
  }
</script>
<div class="flex items-center justify-between p-4">
  <div class="flex items-center">
    <div class="rounded-full bg-gray-400 dark:bg-white p-4">
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-8 w-8">
          <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
        </svg>
      </span>
    </div>
    <div class="ml-2">
      <h1 class="inline text-base font-medium text-gray-900 dark:text-white">Add Work Experience Details</h1>
      <p class="text-sm text-gray-700 dark:text-gray-400">Your experience</p>
    </div>
  </div>

  <div class="flex items-center">
    <button on:click={toogleform} class="flex items-center rounded-lg border-2 border-gray-900 dark:border-white bg-transparent px-6 py-2 text-lg font-semibold text-gray-900 dark:text-white">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6">
        <path fill-rule="evenodd" d="M12 5.25a.75.75 0 01.75.75v5.25H18a.75.75 0 010 1.5h-5.25V18a.75.75 0 01-1.5 0v-5.25H6a.75.75 0 010-1.5h5.25V6a.75.75 0 01.75-.75z" clip-rule="evenodd" />
      </svg>
      Add
    </button>
  </div>
</div>
{#if IsAdd}
<WorkExperienceForm onSubmit={toogleform}/>
{/if}