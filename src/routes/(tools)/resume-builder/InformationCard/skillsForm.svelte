<div class="form-upper">
    <div class="form-container">
      <form id="projectform">
        <div class="text-left text-xl font-bold">Skills Details</div>
  
        <div class="flex flex-wrap mt-8">
          <div class="w-1/2 pr-4">
            <label for="projectdesc" class="mb-1 block font-bold text-gray-900">Add your Technical Skills</label>
            <input id="projectdesc" name="projectdesc" class="w-full rounded-xl border border-gray-600 px-3 py-2" placeholder="Type Skills"/>
          </div>
          <div class="w-1/2">
            <label for="projectlink" class="mb-1 block font-bold text-gray-900">Add your Soft Skills</label>
            <input type="text" id="projectlink" name="projectlink" class="w-full rounded-xl border border-gray-600 px-3 py-2" placeholder="Type Skills" />
          </div>
        </div>
  
        <div class="mt-6 flex justify-end sm:mt-8">
          <button type="button" id="closebutton" class="mr-4 px-4 py-2 font-thin text-black">Close</button>
          <button type="submit" class="rounded-lg border border-gray-800 bg-gray-900 p-1 px-6 py-2 font-thin text-white">Done</button>
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
    }
    .form-container {
      background-color: white;
      max-width: 600px;
      padding: 20px;
      border-radius: 10px;
      border: 2px solid #e2e2e2; 
    }
  </style>
  