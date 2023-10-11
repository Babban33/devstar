<script>
  import EditDownloadButton from "./EditDownloadButton.svelte";
</script>
<div class="bg-gray-400 flex p-4 rounded-xl justify-between">
  <div class="flex">
    <img class="rounded-full border-2 w-24 h-24 mr-4" alt="Profile"/>
    <div class="flex flex-col">
      <h3 class="font-sans font-bold">Username</h3>
      <h4 class="font-sans font-light">Designation</h4>
    </div>
  </div>
  <div>
    <EditDownloadButton />
  </div>
</div>