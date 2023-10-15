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
    import { EducationStore } from "./EducationStore";
</script>
{#if $clickedBtn ==="Education"}
    <EducationFrame/>
    {#if $EducationStore.length > 0}
        {#each $EducationStore as {id, college_name, city, degree, CGPA, start_year, end_year} (id)}
        <CollegeTileText collegeName={college_name} collegeCity={city} degree={degree} cgpa={CGPA} startYear={start_year} endYear={end_year}/>
        {/each}
    {/if}
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