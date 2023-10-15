<script>
  /**
	 * @type {() => void}
	 */
  export let onCancel;
  function formSubmit(){
    onCancel();
  }
</script>
<form on:submit={formSubmit} id="educationform" class="rounded-lg relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
    <div class="mb-4 text-left text-xl font-bold">Education Details</div>
    <div class="flex">
      <div class="mr-4 flex-grow sm:mr-8">
        <label for="collegename" class="mb-1 block font-bold text-gray-900">College Name</label>
        <input type="text" id="collegename" name="collegename" class="w-full rounded-xl border border-gray-600 px-3 py-2" placeholder="Enter college name" />
      </div>
      <div class="ml-4 flex-grow sm:ml-8">
        <label for="city" class="mb-1 block font-bold text-gray-900">City</label>
        <input type="text" id="city" name="city" class="w-full rounded-xl border border-gray-600 px-3 py-2" placeholder="Enter city" />
      </div>
    </div>
    <div class="mt-4 flex">
      <div class="mr-4 flex-grow sm:mr-8">
        <label for="degree" class="mb-1 block font-bold text-gray-900">Degree Name</label>
        <input type="text" id="degree" name="degree" class="w-full rounded-xl border border-gray-600 px-3 py-2" placeholder="Enter degree name" />
      </div>
      <div class="ml-4 flex-grow sm:ml-8">
        <label for="cgpa" class="mb-1 block font-bold text-gray-900">CGPA or Percentage</label>
        <input type="text" id="cgpa" name="cgpa" class="w-full rounded-xl border border-gray-600 px-3 py-2" placeholder="Enter CGPA or Percentage" />
      </div>
    </div>
    <div class="mt-4 flex">
      <div class="mr-4 flex-grow sm:mr-8">
        <label for="startyear" class="mb-1 block font-bold text-gray-900">Start Year</label>
        <input type="date" id="startyear" name="startyear" class="w-full rounded-xl border border-gray-600 px-3 py-2" placeholder="Select start year" />
      </div>
      <div class="ml-4 flex-grow sm:ml-8">
        <label for="endyear" class="mb-1 block font-bold text-gray-900">End Year</label>
        <input type="date" id="endyear" name="endyear" class="w-full rounded-xl border border-gray-600 px-3 py-2" placeholder="Select end year" />
      </div>
    </div>
    <div class="mt-6 flex justify-end sm:mt-8">
      <button type="button" id="closebutton" on:click={onCancel} class="mr-4 px-4 py-2 font-thin text-black">Close</button>
      <button type="submit" class="rounded-xl border border-gray-800 bg-gray-900 p-1 px-6 py-2 font-thin text-white">Done</button>
    </div>
  </form>