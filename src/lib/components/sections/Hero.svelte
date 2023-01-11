<script>
  import ImagePlaceholder from "../ImagePlaceholder.svelte";
</script>

<section id="hero" class="flex flex-col gap-8 pt-[190px] text-center">
  <h1 class="text-8xl font-semibold tracking-wide">Build Better Products</h1>
  <h2 class="mx-16 text-2xl">
    Powerful, self-serve product analytics to help you convert, engage, and
    retain more users.
  </h2>
  <div class="flex justify-center gap-6 ">
    <button
      class="rounded-md bg-indigo-500 px-8 py-2 transition-all hover:bg-indigo-300"
      >Take a Tour</button
    >
    <button
      class="rounded-md border-2 border-white px-8 py-2 transition-all hover:bg-white hover:text-dark"
      >Sign Up</button
    >
  </div>
</section>
<section class="mx-auto mt-24 max-w-7xl">
  <ImagePlaceholder class="h-[520px] bg-gray-400" />
</section>
