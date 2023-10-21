<script lang="ts">
  import { clickedBtn } from "./ClickedButton";
  let options = ["Education", "Work Experience", "Projects", "Achievements", "Skills", "Certifications"];
  let toggleOptions = (e: MouseEvent) => {
    let text = (e.target as HTMLButtonElement).textContent;
    if(text){
      $clickedBtn=text;
    }
  }

  import ProfileForm from "./profile_form.svelte";
  let isEditing = false;
  function toggleForm(){
    isEditing = !isEditing;
  }

  import { profileStore } from "./ProfileStore";
</script>

<style>
  .selected {
    border-bottom: 3px solid rgb(89, 89, 89);
  }
</style>

<div class="bg-gray-400 p-4 rounded-xl">
  <div class="flex flex-wrap justify-between items-center mb-4">
    <div class="flex items-center">
      <img class="rounded-full border-4 border-solid w-24 h-24 mr-4" alt="Profile" />
      <div class="flex flex-col">
        <h3 class="font-sans font-bold text-xl">{$profileStore.username}</h3>
        <h4 class="font-sans font-light text-lg">{$profileStore.designation}</h4>
        <div class="flex space-x-4">
          <a href="{$profileStore.social_media.social1}" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" class="text-gray-900 w-6 h-6" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"/><path fill="currentColor" d="M7.024 2.31a9.08 9.08 0 0 1 2.125 1.046A11.432 11.432 0 0 1 12 3c.993 0 1.951.124 2.849.355a9.08 9.08 0 0 1 2.124-1.045c.697-.237 1.69-.621 2.28.032c.4.444.5 1.188.571 1.756c.08.634.099 1.46-.111 2.28C20.516 7.415 21 8.652 21 10c0 2.042-1.106 3.815-2.743 5.043a9.456 9.456 0 0 1-2.59 1.356c.214.49.333 1.032.333 1.601v3a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-.991c-.955.117-1.756.013-2.437-.276c-.712-.302-1.208-.77-1.581-1.218c-.354-.424-.74-1.38-1.298-1.566a1 1 0 0 1 .632-1.898c.666.222 1.1.702 1.397 1.088c.48.62.87 1.43 1.63 1.753c.313.133.772.22 1.49.122L8 17.98a3.986 3.986 0 0 1 .333-1.581a9.455 9.455 0 0 1-2.59-1.356C4.106 13.815 3 12.043 3 10c0-1.346.483-2.582 1.284-3.618c-.21-.82-.192-1.648-.112-2.283l.005-.038c.073-.582.158-1.267.566-1.719c.59-.653 1.584-.268 2.28-.031Z"/></g></svg>
          </a>
          <a href="{$profileStore.social_media.social2}" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" class="text-gray-900 w-6 h-6" viewBox="0 0 24 24"><path fill="currentColor" d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002ZM7 8.48H3V21h4V8.48Zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68Z"/></svg>
          </a>
          <a href="{$profileStore.social_media.social3}" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" class="text-gray-900 w-6 h-6" viewBox="0 0 24 24"><path fill="currentColor" d="M4 20q-.825 0-1.413-.588T2 18V6q0-.825.588-1.413T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.588 1.413T20 20H4Zm8-7l8-5V6l-8 5l-8-5v2l8 5Z"/></svg>
          </a>
        </div>
      </div>
    </div>
    <div class="gap-4">
      <button on:click={toggleForm} class="rounded-xl bg-gray-900 px-4 py-2 font-sans font-light text-white">Edit</button>
      <button class="rounded-xl bg-gray-900 px-4 py-2 font-sans font-light text-white">Download</button>
    </div>
  </div>
  <div class="px-2 flex flex-wrap justify-between">
    {#each options as option}
    {#if option === $clickedBtn}
    <div class="selected">
      <button class="font-bold">{option}</button>
    </div>
    {:else}
    <button on:click={toggleOptions}>{option}</button>
    {/if}
    {/each}
  </div>
</div>
{#if isEditing}
<ProfileForm onCancel={toggleForm} />
{/if}