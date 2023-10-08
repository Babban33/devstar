<script>
    import ProfileCard from "./ProfileCard/ProfileCard.svelte";
    import TaglineCard from "./TaglineCard/TaglineCard.svelte";
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
    <InformationCard/>
    <ProfileCard/>
    <TaglineCard/>
</div>