<div class="fixed left-0 top-0 flex h-full w-full items-center justify-center">
    <form id="projectform" class="relative flex w-full flex-col rounded-3xl border-2 border-gray-100 bg-white p-6 shadow-2xl sm:w-2/3 lg:w-1/2 xl:w-1/3">
      <div class="mb-6 text-left text-xl font-bold">Edit Profile Details</div>
      <div class="flex flex-col sm:flex-row">
        <div class="mb-4 flex flex-col items-center sm:w-1/4">
          <input type="file" id="profilephoto" name="profilephoto" class="hidden" />
          <label for="profilephoto" class="mb-1 block cursor-pointer font-bold text-gray-900">
            <span class="rounded-full border-2 border-gray-700 bg-transparent px-4 py-2 text-gray-800">Add Photo</span>
          </label>
        </div>
        <div class="w-full px-4 sm:w-3/4">
          <div class="mb-4">
            <label for="yourname" class="mb-1 block font-bold text-gray-900">Enter Name</label>
            <input type="text" id="yourname" name="yourname" class="w-full rounded-2xl border border-gray-600 px-3 py-2" bind:value="{yourname}" placeholder="Enter your name" />
          </div>
          <div class="mb-4">
            <label for="designation" class="mb-1 block font-bold text-gray-900">Enter Designation</label>
            <input type="text" id="designation" name="designation" class="w-full rounded-2xl border border-gray-600 px-3 py-2" bind:value="{designation}" placeholder="Enter your designation" />
          </div>
          <div class="mb-4">
            <label for="githublink" class="mb-1 block font-bold text-gray-900">GitHub Link</label>
            <input type="text" id="githublink" name="githublink" class="w-full rounded-2xl border border-gray-600 px-3 py-2" bind:value="{githublink}" placeholder="Enter your GitHub link" />
          </div>
          <div class="mb-4">
            <label for="linkedinlink" class="mb-1 block font-bold text-gray-900">LinkedIn Link</label>
            <input type="text" id="linkedinlink" name="linkedinlink" class="w-full rounded-2xl border border-gray-600 px-3 py-2" bind:value="{linkedinlink}" placeholder="Enter your LinkedIn link" />
          </div>
          <div class="mb-4">
            <label for="gmail" class="mb-1 block font-bold text-gray-900">Email Address</label>
            <input type="text" id="gmail" name="gmail" class="w-full rounded-2xl border border-gray-600 px-3 py-2" bind:value="{gmail}" placeholder="Enter your email address" />
          </div>
        </div>
      </div>
      <div class="mt-6 flex justify-end">
        <button type="button" id="closebutton" class="mr-4 px-4 py-2 font-thin text-black">Close</button>
        <button type="submit" class="rounded-3xl border border-gray-800 bg-gray-900 p-1 px-6 py-2 font-thin text-white">Done</button>
      </div>
    </form>
  </div>