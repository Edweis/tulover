<script>
  import Bulb from "$lib/icons/bulb.svelte";
  import ImagePlaceholder from "../ImagePlaceholder.svelte";
  import Observer from "../Observer.svelte";
  import cn from "classnames";
  let intersecting1 = false;
  let intersecting2 = false;
  let intersecting3 = false;
</script>

<section class="mx-auto flex max-w-7xl gap-10 pt-[100px]">
  <div class="flex h-[1500px] flex-col justify-around">
    <Observer
      class="flex flex-col gap-4"
      bind:isIntersecting={intersecting1}
      options={{ threshold: 0.5 }}
    >
      <h4 class="flex items-center gap-4 font-bold ">
        <Bulb className="bg-orange-500 p-2 h-10 w-10 rounded-md" />
        <span class="text-muted">INSIGHTS REPORT</span>
      </h4>
      <h2 class="text-5xl font-semibold tracking-wide">
        How is my product used?
      </h2>
      <p>See which features are popular and how many power users you have.</p>
    </Observer>
    <Observer
      class="flex flex-col gap-4"
      bind:isIntersecting={intersecting2}
      options={{ threshold: 0.5 }}
    >
      <h4 class="flex items-center gap-4 font-bold ">
        <Bulb className="bg-orange-500 p-2 h-10 w-10 rounded-md" />
        <span class="text-muted">FUNNELS REPORT</span>
      </h4>
      <h2 class="text-5xl font-semibold tracking-wide">
        Where and why do users drop off?
      </h2>
      <p>Build retroactive funnels and analyze conversion rates on the fly.</p>
    </Observer>
    <Observer
      class="flex flex-col gap-4"
      bind:isIntersecting={intersecting3}
      options={{ threshold: 0.5 }}
    >
      <h4 class="flex items-center gap-4 font-bold ">
        <Bulb className="bg-orange-500 p-2 h-10 w-10 rounded-md" />
        <span class="text-muted">RETENTION REPORT</span>
      </h4>
      <h2 class="text-5xl font-semibold tracking-wide">
        Which users retain best?
      </h2>
      <p>See which types of users stick around, and for how long.</p>
    </Observer>
  </div>

  <div class="relative ">
    <ImagePlaceholder
      class={cn(
        "sticky top-[20vh] h-[500px] w-[850px] bg-yellow-100 transition-opacity duration-700 ",
        (intersecting2 || intersecting3) && "opacity-0"
      )}>INSIGHTS REPORT</ImagePlaceholder
    >
    <ImagePlaceholder
      class={cn(
        "sticky top-[20vh] h-[500px]  w-[850px] bg-indigo-100 transition-opacity duration-700",
        intersecting2 || "opacity-0  ",
        (intersecting1 || intersecting2 || intersecting3) && "fixed"
      )}>FUNNELS REPORT</ImagePlaceholder
    >
    <ImagePlaceholder
      class={cn(
        "sticky top-[20vh] h-[500px]  w-[850px] bg-green-100 transition-opacity duration-700",
        intersecting3 || "opacity-0"
      )}>RETENTION REPORT</ImagePlaceholder
    >
  </div>
</section>
