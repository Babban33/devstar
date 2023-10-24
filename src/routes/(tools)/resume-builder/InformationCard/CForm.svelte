<script lang="ts">
    import {Certificationstore} from './Certificationstore';

     export let onCancel: () => void;
    export let idtoadd: number;
    
    let certificate = {
        certificateLink: "",
        cettificateTitle: "",
    }
    function formSubmit() {
        onCancel();
        if(idtoadd === -1){
        Certificationstore.update(items =>{
            return [
                ...items,
                {
                    id: $Certificationstore.length,
                    link: certificate.certificateLink,
                    title: certificate.cettificateTitle,
                }
            ]
        });
    }
    // else if(idtoadd > -1) {
    //     $Certificationstore[idtoadd].link=certificate.certificateLink;
    //     $Certificationstore[idtoadd].title=certificate.cettificateTitle

    // }
    console.log($Certificationstore.length);
    }
</script>

<div class="form-upper">
    <div class="form-container">
<!-- svelte-ignore a11y-click-events-have-key-events -->
<form
    on:submit|preventDefault={formSubmit}
    id="certificationform"
    
>
    <div class="text-left text-xl font-bold">Certification Details</div>

    <div class="flex-grow sm:mt-8">
        
            
    
    </div>

    <div class="flex-1">
        <div class="ml-4 flex-grow-0 sm:ml-0">

        <label for="certificateTitle" class="mb-1 block font-bold text-gray-900"
            >Certificate Title</label
        >
        {#if idtoadd >-1}
        <textarea
            id="certificateTitle"
            name="certificateTitle"
            class="w-full rounded-xl border border-gray-600 px-3 py-2"
            rows="2"
            bind:value= "{$Certificationstore[idtoadd].title}"
            placeholder="Enter your description"
        />

        {:else}
        <textarea
            id="certificateTitle"
            name="certificateTitle"
            class="w-full rounded-xl border border-gray-600 px-3 py-2"
            rows="2"
            bind:value={certificate.cettificateTitle}
            placeholder="Enter your description"
        />
        {/if}

        <label for="certificatelink" class="mb-1 block font-bold text-gray-900">
            Links (Optional)</label
        >
        {#if idtoadd >-1}
        <input
        type="text"
        id="certificatelink"
        name="certificatelink"
        class="w-full rounded-xl border border-gray-600 px-3 py-2"
        bind:value={$Certificationstore[idtoadd].link}
        placeholder="Enter certificate link"
    />

        {:else}
        <input
            type="text"
            id="certificatelink"
            name="certificatelink"
            class="w-full rounded-xl border border-gray-600 px-3 py-2"
            bind:value={certificate.certificateLink}
            placeholder="Enter certificate link"
        />
        {/if}
    </div>
    </div>
    
    <div class="mt-6 flex justify-end sm:mt-8">
        <button on:click={onCancel} type="button" id="closebutton" class="mr-4 px-4 py-2 font-thin text-black">Close</button
        >
        <button
            type="submit"
            class="rounded-lg border border-gray-800 bg-gray-900 p-1 px-6 py-2 font-thin text-white"
            >Done</button
        >
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
        /* box-shadow: 0 25px 50px -12px rgba(99, 99, 99, 0.25); */
    }
</style>

