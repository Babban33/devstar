<script>
  let isEditing = false;
  function toggleForm(){
    isEditing = !isEditing;
  }
</script>
<div class="flex items-center justify-between bg-blue-950 p-4">
  <div class="flex items-center">
    <div class="rounded-full bg-white p-4">
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-8 w-8">
          <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
        </svg>
      </span>
    </div>
    <div class="ml-2">
      <h1 class="inline text-base text-white">Add Project Details</h1>
      <p class="text-sm text-gray-400">Your Projects</p>
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
