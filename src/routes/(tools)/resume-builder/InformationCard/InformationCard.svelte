<script lang="ts">
    import { clickedBtn } from "../ProfileCard/ClickedButton";
    import EducationFrame from "./EducationFrame.svelte";
    import CollegeTileText from "./CollegeTileText.svelte";
    import WorkExperienceMiddleTile from "./WorkExperienceMiddleTile.svelte";
    import WorkExperienceTile from "./WorkExperienceTile.svelte";
    import ProjectMiddleTile from "./ProjectMiddleTile.svelte";
    import ProjectTextTile from "./ProjectTextTile.svelte";
    import AchievementDetailsMiddleTile from "./achievementDetailsMiddleTile.svelte";
    import AchievementTile from "./AchievementTile.svelte";
    import CertificationDetailsMiddleTile from "./certificationDetailsMiddleTile.svelte";
    import CertficationTile from "./CertficationTile.svelte";
    import { achievementStore } from "./AchievementStore";
</script>
{#if $clickedBtn ==="Education"}
    <EducationFrame/>
    <CollegeTileText/>
{:else if $clickedBtn === "Work Experience"}
    <WorkExperienceMiddleTile/>
    <WorkExperienceTile/>
{:else if $clickedBtn === "Projects"}
    <ProjectMiddleTile/>
    <ProjectTextTile/>
{:else if $clickedBtn === "Achievements"}
    <AchievementDetailsMiddleTile/>
    {#if $achievementStore.length > 0}
        {#each $achievementStore as {id, achievementName, achievementLink} (id)}
        <AchievementTile achieve={achievementName} link={achievementLink}/>
        {/each}
    {/if}
{:else if $clickedBtn === "Certifications"}
    <CertificationDetailsMiddleTile/>
    <CertficationTile/>
{/if}