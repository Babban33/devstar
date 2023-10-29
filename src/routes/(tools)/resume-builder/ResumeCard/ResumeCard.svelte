<script>
  import {Page} from "svelte-printpdf"
  import Template from "../templates/Template.svelte";
  import AppPdf from "./AppPdf.svelte";

  let print = false;
</script>
<div class="flex">
  <div class="w-full rounded-2xl bg-gray-400 p-5 text-gray-900">
    <div class="flex items-center justify-between mb-2">
      <h5 class="font-serif text-2xl font-semibold">Resume</h5>
      <button on:click={() => (print=true)} class="rounded-xl bg-gray-900 px-4 py-2 font-sans font-light text-white">Download</button>
    </div>
    <AppPdf bind:print={print}>
      <Page>
        <Template/>
      </Page>
    </AppPdf>
  </div>
</div>