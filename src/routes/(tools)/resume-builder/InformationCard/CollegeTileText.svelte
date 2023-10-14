<script lang="ts">
import {EducationStore} from "./EducationStore";
  import Educationform from "./Educationform.svelte";
  let isEditing=false;
  function toggleForm()
  {
    isEditing=!isEditing;
  }
</script>
<div class="relative flex rounded-2xl bg-gray-400 font-sans">
  <div class="flex-grow">
    <div class="justify-start px-5 py-5 align-middle">
      <div class="pb-1 font-bold">{$EducationStore.college_name}, {$EducationStore.city}</div>
      <div class="pb-1 text-gray-800">
        {$EducationStore.degree} | CGPA:{$EducationStore.CGPA}
        <div class="text-gray-500">{$EducationStore.start_year} -  {$EducationStore.end_year}</div>
      </div>
    </div>
  </div>
  <div class="relative left-0 top-20 -translate-x-1/2 -translate-y-1/2 transform">
    <button on:click={toggleForm} class="flex items-center rounded-xl border-2 border-gray-800 p-1 pl-3 pr-3 font-medium">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="mr-2 h-4 w-4">
        <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
      </svg>
      <span>Edit</span>
    </button>
  </div>
</div>
{#if isEditing}
  <Educationform onSubmit={toggleForm} onCancel={toggleForm}/>
{/if}

