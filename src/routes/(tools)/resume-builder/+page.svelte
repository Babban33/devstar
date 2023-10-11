<script>
    import ProfileCard from "./ProfileCard/ProfileCard.svelte";
    import TaglineDetails from "./TaglineCard/taglineDetails.svelte";
    import InformationCard from "./InformationCard/InformationCard.svelte";
</script>
<div>
    <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:px-12">
            <h1 class="mb-2 text-4xl font-extrabold tracking-tight leading-none text-gray-900 dark:text-white">
                Resume Builder
            </h1>
            <p class="text-base text-gray-700 dark:text-gray-300 md:text-lg">
                Resume crafting made so effortless, even AI is impressed.
            </p>
        </div>
    </section>
    <section class="bg-white dark:bg-gray-900">
        <div class="px-8 grid grid-cols-10 gap-8">
            <div class="col-span-6">
                <ProfileCard/>
                <InformationCard/>
            </div>
            <div class="col-span-4">
                <TaglineDetails/>
            </div>
        </div>
    </section>
</div>