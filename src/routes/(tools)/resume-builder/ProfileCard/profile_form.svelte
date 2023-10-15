<script>
  import { profileStore } from "./ProfileStore";
  /**
	 * @type {() => void}
	*/
  export let onCancel;
</script>
<div class="form-upper">
  <div class="form-container lg:w-screen lg:max-w-4xl">
    <form on:submit|preventDefault={onCancel} id="projectform">
      <div class="mb-6 text-left text-xl font-bold">Edit Profile Details</div>
      <div class="flex flex-col sm:flex-row">
        <div class="mb-1 mt-9 flex flex-col items-center sm:w-1/4">
          <input type="file" id="profilephoto" name="profilephoto" class="hidden" />
          <label for="profilephoto" class="mb-1 block cursor-pointer font-bold text-gray-900">
            <span class="rounded-full border-2 border-gray-700 bg-transparent px-4 py-2 text-gray-800">Add Photo</span>
          </label>
        </div>
        <div class="w-full px-4 sm:w-3/4">
          <div class="mb-4">
            <label for="yourname" class="mb-1 block font-bold text-gray-900">Enter Name</label>
            <input bind:value={$profileStore.username} type="text" id="yourname" name="yourname" class="w-full rounded-xl border border-gray-600 px-3 py-2" placeholder="Enter your name" />
          </div>
          <div class="mb-4">
            <label for="designation" class="mb-1 block font-bold text-gray-900">Enter Designation</label>
            <input bind:value={$profileStore.designation} type="text" id="designation" name="designation" class="w-full rounded-xl border border-gray-600 px-3 py-2" placeholder="Enter your designation" />
          </div>
          <div class="mb-4">
            <label for="githublink" class="mb-1 block font-bold text-gray-900">GitHub Link</label>
            <input bind:value={$profileStore.social_media.social1} type="text" id="githublink" name="githublink" class="w-full rounded-xl border border-gray-600 px-3 py-2" placeholder="Enter your GitHub link" />
          </div>
          <div class="mb-4">
            <label for="linkedinlink" class="mb-1 block font-bold text-gray-900">LinkedIn Link</label>
            <input bind:value={$profileStore.social_media.social2} type="text" id="linkedinlink" name="linkedinlink" class="w-full rounded-xl border border-gray-600 px-3 py-2" placeholder="Enter your LinkedIn link" />
          </div>
          <div class="mb-4">
            <label for="gmail" class="mb-1 block font-bold text-gray-900">Email Address</label>
            <input bind:value={$profileStore.social_media.social3} type="text" id="gmail" name="gmail" class="w-full rounded-xl border border-gray-600 px-3 py-2" placeholder="Enter your email address" />
          </div>
        </div>
      </div>
      <div class="mr-4 mt-6 flex justify-end">
        <button type="button" on:click={onCancel} id="closebutton" class="mr-4 px-4 py-2 font-thin text-black">Close</button>
        <button type="submit" class="rounded-xl border border-gray-800 bg-gray-900 p-1 px-6 py-2 font-thin text-white">Done</button>
      </div>
    </form>
  </div>
</div>

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
    overflow-y: auto;
  }
  .form-container {
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    max-height: 80vh;
    overflow-y: auto; 
    /* box-shadow: 0 25px 50px -12px rgba(99, 99, 99, 0.25); */
  }
</style>