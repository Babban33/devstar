
<script>
  import userInfo from "./info";

  
  export let onSubmit;

  function formSubmit(){
    onSubmit();
  }

  
  export let updatedProfileform;

  let yourname = '';
  let designation = '';
  let githublink = '';
  let linkedinlink = '';
  let gmail = '';

  
   export let onCancel;
  const handleCancel = () => {
    onCancel();
  }
</script>

<style>
  .form-upper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    backdrop-filter: blur(3px);
  }
  .form-container {
    background-color: transparent;
    max-width: 900px;
    padding: 20px;
    border-radius: 10px;
    /* box-shadow: 0 25px 50px -12px rgba(99, 99, 99, 0.25); */
  }
</style>

<div class="form-upper">
<div class="form-container">
<form  on:submit{formSubmit} id="projectform" class="rounded-lg relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
    <div class="mb-4 text-left text-xl font-bold">Edit Profile Details</div>
  <div class="flex flex-col sm:flex-row">
    <div class="mb-1 mt-9 flex flex-col items-center sm:w-1/4">
      <input type="file" id="profilephoto" name="profilephoto" class="hidden" />
      <label for="profilephoto" class="mb-1 block cursor-pointer font-bold text-gray-900">
        <span class="rounded-full border-2 border-gray-700 bg-transparent px-3 py-4 text-gray-800">Add Photo</span>
      </label>
    </div>
    <div class="w-full px-4 sm:w-3/4">
      <div class="mb-4">
        <label for="yourname" class="mb-1 block font-bold text-gray-900">Enter Name</label>
        <input type="text" id="yourname" name="yourname" class="w-full rounded-xl border border-gray-600 px-3 py-2" bind:value="{yourname}" placeholder="Enter your name" />
      </div>
      <div class="mb-4">
        <label for="designation" class="mb-1 block font-bold text-gray-900">Enter Designation</label>
        <input type="text" id="designation" name="designation" class="w-full rounded-xl border border-gray-600 px-3 py-2" bind:value="{designation}" placeholder="Enter your designation" />
      </div>
      <div class="mb-4">
        <label for="githublink" class="mb-1 block font-bold text-gray-900">GitHub Link</label>
        <input type="text" id="githublink" name="githublink" class="w-full rounded-xl border border-gray-600 px-3 py-2" bind:value="{githublink}" placeholder="Enter your GitHub link" />
      </div>
      <div class="mb-4">
        <label for="linkedinlink" class="mb-1 block font-bold text-gray-900">LinkedIn Link</label>
        <input type="text" id="linkedinlink" name="linkedinlink" class="w-full rounded-xl border border-gray-600 px-3 py-2" bind:value="{linkedinlink}" placeholder="Enter your LinkedIn link" />
      </div>
      <div class="mb-4">
        <label for="gmail" class="mb-1 block font-bold text-gray-900">Email Address</label>
        <input type="text" id="gmail" name="gmail" class="w-full rounded-xl border border-gray-600 px-3 py-2" bind:value="{gmail}" placeholder="Enter your email address" />
      </div>
    </div>
  </div>
  <div class="mr-4 mt-6 flex justify-end">
    <button type="button" id="closebutton" on:click={onCancel} class="mr-4 px-4 py-2 font-thin text-black">Close</button>
    <button type="submit" on:click={onSubmit} class="rounded-xl border border-gray-800 bg-gray-900 p-1 px-6 py-2 font-thin text-white">Done</button>
  </div>
</form>
</div>
</div>