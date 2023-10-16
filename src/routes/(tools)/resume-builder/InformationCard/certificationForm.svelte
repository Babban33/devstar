<script>
// @ts-nocheck

	import { Certificationstore } from "./Certificationstore";
	let certificates={link :" ", title: " "}
	
	/**
	 * @type {() => void}
	 */
	export let onSubmit;
	function formSubmit() {
		onSubmit();
		Certificationstore.update(items => {
      return [...items, {id: $Certificationstore.length, link: certificates.link, title: certificates.title}];
    });
	console.log($Certificationstore.length);
	}
</script>


<div class="form-upper">
	<div class="form-container">
<!-- svelte-ignore a11y-click-events-have-key-events -->
<form
	on:submit={formSubmit}
	id="certificationform"
	
>
	<div class="text-left text-xl font-bold">Certification Details</div>
	<div class="flex-grow sm:mt-8">

		<label for="certificateTitle" class="mb-1 block font-bold text-gray-900"
			>Certificate Title</label
		>
		<textarea
			id="certificateTitle"
			name="certificateTitle"
			class="w-full rounded-xl border border-gray-600 px-3 py-2"
			rows="2"
			bind:value={certificates.title}
			placeholder="Enter your description"
			required
		/>
		
			
		
	</div>

	<div class="flex-1">
		<div class="ml-4 flex-grow-0 sm:ml-0">

			<label for="certificatelink" class="mb-1 block font-bold text-gray-900">
				Links (Optional)  </label
			>
			<input
				type="text"
				id="certificatelink"
				name="certificatelink"
				class="w-full rounded-xl border border-gray-600 px-3 py-2"
				bind:value={certificates.link}
				placeholder="Enter certificate link"
			/>
		
	</div>
	</div>

	
	
	<div class="mt-6 flex justify-end sm:mt-8">
		<button type="button" id="closebutton" class="mr-4 px-4 py-2 font-thin text-black">Close</button
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
  }
  </style>