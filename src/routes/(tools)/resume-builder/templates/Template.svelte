<script>
  import { EducationStore } from "../InformationCard/EducationStore";
	import { projectStore } from "../InformationCard/projectStore";
import { WorkExpStore } from "../InformationCard/workExp";
  import { profileStore } from "../ProfileCard/ProfileStore";
</script>
<style>
    /* .dotted-line {
      border-top: 1px dotted #000;
    } */
    .bor-line {
      border-top: 3px solid #000;
    }
</style>
  <div class="rounded-2xl bg-white p-6 shadow-lg mt-2">
    <section class="justify-center text-center">
      <h1 class="mb-1 text-3xl font-semibold">{$profileStore.username}</h1>
      <p class="text-lg text-blue-500">{$profileStore.designation}</p>
      {#if $profileStore.social_media.social1 || $profileStore.social_media.social2 || $profileStore.social_media.social3}
      <div class="gap-6 flex justify-center">
        {#if $profileStore.social_media.social1}
          <a href="{$profileStore.social_media.social1}" class="flex gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" class="text-gray-900 w-6 h-6" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"/><path fill="currentColor" d="M7.024 2.31a9.08 9.08 0 0 1 2.125 1.046A11.432 11.432 0 0 1 12 3c.993 0 1.951.124 2.849.355a9.08 9.08 0 0 1 2.124-1.045c.697-.237 1.69-.621 2.28.032c.4.444.5 1.188.571 1.756c.08.634.099 1.46-.111 2.28C20.516 7.415 21 8.652 21 10c0 2.042-1.106 3.815-2.743 5.043a9.456 9.456 0 0 1-2.59 1.356c.214.49.333 1.032.333 1.601v3a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-.991c-.955.117-1.756.013-2.437-.276c-.712-.302-1.208-.77-1.581-1.218c-.354-.424-.74-1.38-1.298-1.566a1 1 0 0 1 .632-1.898c.666.222 1.1.702 1.397 1.088c.48.62.87 1.43 1.63 1.753c.313.133.772.22 1.49.122L8 17.98a3.986 3.986 0 0 1 .333-1.581a9.455 9.455 0 0 1-2.59-1.356C4.106 13.815 3 12.043 3 10c0-1.346.483-2.582 1.284-3.618c-.21-.82-.192-1.648-.112-2.283l.005-.038c.073-.582.158-1.267.566-1.719c.59-.653 1.584-.268 2.28-.031Z"/></g></svg>
            github.com
          </a>
        {/if}
        {#if $profileStore.social_media.social2}
          <a href="{$profileStore.social_media.social2}" class="flex gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" class="text-gray-900 w-6 h-6" viewBox="0 0 24 24"><path fill="currentColor" d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002ZM7 8.48H3V21h4V8.48Zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68Z"/></svg>
            linkedin.com
          </a>
        {/if}
        {#if $profileStore.social_media.social3}
          <a href="{$profileStore.social_media.social3}" class="flex gap-1 ">
            <svg xmlns="http://www.w3.org/2000/svg" class="text-gray-900 w-6 h-6" viewBox="0 0 24 24"><path fill="currentColor" d="M4 20q-.825 0-1.413-.588T2 18V6q0-.825.588-1.413T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.588 1.413T20 20H4Zm8-7l8-5V6l-8 5l-8-5v2l8 5Z"/></svg>
            {$profileStore.social_media.social3}
          </a>
        {/if}
      </div>
      {/if}
    </section>
  

    {#if $WorkExpStore.length > 0}
      <section>
        <p class="mt-6 text-xl font-bold">EXPERIENCE</p>
        <hr class="bor-line mb-4" />

        {#each $WorkExpStore as {id} (id)}
          <div class="mb-4">
            <div class="flex justify-between">
              <h2 class="text-xl font-semibold">{$WorkExpStore[id].designation}</h2>
              <span>
                <p class="flex gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 solid">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                  </svg>
                  {$WorkExpStore[id].start_date} - {$WorkExpStore[id].end_date}
                </p>
              </span>
            </div>
              <p class="text-blue-500">{$WorkExpStore[id].company_name}</p>
              <ul class="list-disc pl-6">
                <li>{$WorkExpStore[id].discription_1}</li>
                <li>{$WorkExpStore[id].discription_2}</li>
              </ul>
            </div>
            {/each}
            <!-- {#if $WorkExpStore.length == 2}
              <hr class="dotted-line mb-2" />
            {/if} -->
        </section>
    {/if}


    {#if $EducationStore.length > 0}
      <p class="mt-6 text-xl font-bold">EDUCATION</p>
      <hr class="bor-line mb-4" />
      {#each $EducationStore as {id} (id)}
        <div class="mb-4">
          <div class="flex justify-between">
            <h2 class="text-xl font-semibold">{$EducationStore[id].degree}</h2>
            <span>
              <p class="flex gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 solid">                  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
                {$EducationStore[id].start_year} - {$EducationStore[id].end_year}
              </p>
            </span>
          </div>
          <p class="text-blue-500">{$EducationStore[id].college_name}</p>
          <p>CGPA: {$EducationStore[id].CGPA}</p>
        </div>
      {/each}
      <!-- {#if $EducationStore.length > 1 || $EducationStore.length < 3}
        <hr class="dotted-line mb-2" />
      {/if} -->
    {/if}
    
    
    {#if $projectStore.length > 0}
      <section>
        <p class="mt-6 text-xl font-bold">PROJECTS</p>
        <hr class="bor-line mb-4" />
        {#each $projectStore as {id} (id)}
          <div class="mb-4">
            <div class="flex justify-between">
              <h2 class="text-xl font-semibold">
                {$projectStore[id].projectName}
              </h2>
              <a href="{$projectStore[id].projectLink}" class="mr-6">
                Project Link
              </a>
            </div>
            <ul class="list-disc pl-6">
              <li>{$projectStore[id].description1}</li>
              <li>{$projectStore[id].description2}</li>
            </ul>
          </div>
        {/each}
      </section>
    {/if}
  
    <div class="mt-6 text-xl font-bold">CERTIFICATES</div>
    <hr class="bor-line mb-4" />
    <ul class="mb-4 list-disc pl-6">
      <li>Certificate 1 | <a href="example.com">Link</a></li>
      <li>Certificate 2 | <a href="example.com">Link</a></li>
      <li>Certificate 3 | <a href="example.com">Link</a></li>
    </ul>
  
    <div class="mt-6 text-xl font-bold">KEY ACHIEVEMENTS</div>
    <hr class="bor-line mb-4" />
    <ul class="mb-4 list-disc pl-6">
      <li>Build the future - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
      <li>Managing the largest accounts - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
      <li>Market share - key accounts & projects - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
      <li>Work-life balance - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
    </ul>
  
    <div class="mt-6 text-xl font-bold">SKILLS</div>
    <hr class="bor-line mb-4" />
    <div class="mb-4 flex">
      <div class="w-1/2 py-2">
        <p class="font-bold">Web Development</p>
      </div>
      <div class="w-1/2 py-2">
        <p class="font-bold">Data Analysis</p>
      </div>
      <div class="w-1/2 py-2">
        <p class="font-bold">Sales Force</p>
      </div>
      <div class="w-1/2 py-2">
        <p class="font-bold">Win & Mac OS</p>
      </div>
    </div>
  </div>