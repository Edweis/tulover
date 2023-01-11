<script lang="ts">
  import Explore from "$lib/components/sections/Explore.svelte";
  import Features from "$lib/components/sections/Features.svelte";
  import Hero from "$lib/components/sections/Hero.svelte";
  import TrustedBy from "$lib/components/sections/TrustedBy.svelte";
  import WhatWillData from "$lib/components/sections/WhatWillData.svelte";
  import Understand from "$lib/components/sections/Understand.svelte";
  import UseCase from "$lib/components/sections/UseCase.svelte";
  import Growing from "$lib/components/sections/Growing.svelte";
</script>

<svelte:head>
  <title>Pastel: Product Analytics for Mobile, Web, and More</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="relative bg-dark">
  <Hero />
  <TrustedBy />
  <Understand />
  <Features />
  <Explore />
  <WhatWillData />
</div>
<UseCase />
<Growing />
