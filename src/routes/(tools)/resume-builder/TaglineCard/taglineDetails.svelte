<script>
  import taglineDetails from "./info";
</script>
<div class="bg-gray-900 pb-5 pl-5 pr-5">
    <div class="max-w-md rounded-2xl bg-gray-400 p-5 font-serif text-gray-900">
      <div class="flex items-center text-2xl justify-between font-semibold">
        <h5>Tagline</h5>
        <button class="inline-flex items-center gap-2 rounded-2xl bg-gray-900 px-4 py-2 text-white font-medium">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" /></svg
          >Edit
        </button>
    </div>
      <p class="place-items-center pb-4 pt-2 font-sans text-white font-normal font-">{taglineDetails.tagline}</p>
      <h5 class="font-semibold text-2xl pb-2 text-gray-900">Technical Skills</h5>
      <div class="rounded-full border-2 border-gray-950 px-2 inline-block">
        <div class="text-center font-sans text-lg font-normal text-black">{taglineDetails.techSkills}</div>
      </div>
    </div>
</div>