<div class="gap-4">
  <button on:click={profileForm} class="rounded-xl bg-gray-900 px-4 py-2 font-sans font-light text-white" >Edit</button>
  <button class="rounded-xl bg-gray-900 px-4 py-2 font-sans font-light text-white">Download</button>
</div>

<script>
  import userInfo from "./info";
  import Profileform from "./Profileform.svelte";
  let isEditing = false
  function profileForm(){
    isEditing = !isEditing;
  }
  
</script>

{#if isEditing}
<Profileform onSubmit={profileForm} onCancel={profileForm}/>
{/if}

