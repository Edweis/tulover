<script>
  import Book from "$lib/icons/book.svelte";
  import ImagePlaceholder from "../ImagePlaceholder.svelte";
</script>

<div class="relative bg-white pt-[100px] text-dark">
  <section class="mx-auto grid  max-w-7xl gap-10 py-32">
    <div class="flex justify-between">
      <h2 class="text-5xl font-bold">Resources for growing your product</h2>
      <a href="#" class="text-link text-indigo-500">View resources</a>
    </div>
    <div class="grid grid-cols-3 gap-6">
      <article class="grid gap-4">
        <ImagePlaceholder class="h-[200px] bg-gray-400" />
        <span class="text-muted flex gap-2">
          <Book /> Book
        </span>
        <p class="text-4xl font-semibold">The guide to product analytics</p>
        <a href="#" class="text-link text-indigo-500">Check out the book</a>
      </article>
      <article class="grid gap-4">
        <ImagePlaceholder class="h-[200px] bg-gray-400" />
        <span class="text-muted flex gap-2">
          <Book /> Blog
        </span>
        <p class="text-4xl font-semibold">A primer on product metrics</p>
        <a href="#" class="text-link text-indigo-500">Read article</a>
      </article>
      <article class="grid gap-4">
        <ImagePlaceholder class="h-[200px] bg-gray-400" />
        <span class="text-muted flex gap-2">
          <Book /> Webinar
        </span>
        <p class="text-4xl font-semibold">The state of product analytics</p>
        <a href="#" class="text-link text-indigo-500">Watch Webinar</a>
      </article>
    </div>
  </section>
</div>
