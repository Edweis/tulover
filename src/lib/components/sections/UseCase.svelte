<script>
  import ImagePlaceholder from "../ImagePlaceholder.svelte";
  let sectionHeight = 0;
</script>

<section
  class="sticky bottom-0 -z-10 flex min-h-screen items-end bg-indigo-500"
  bind:clientHeight={sectionHeight}
>
  <div class="mx-auto mt-auto grid max-w-6xl grid-cols-4 gap-8 pb-16">
    <div class="col-span-2 grid">
      <p class="text-muted">Customer Story</p>
      <h2 class="text-6xl font-semibold tracking-wide">
        Lemonade is defining the modern insurance industry
      </h2>
      <ul class="ml-4 grid list-disc ">
        <li>
          Customer-first experience: <b class="font-bold">4.9 star app</b>
        </li>
        <li>
          Data-informed decisions: <b class="font-bold">95% of employees</b> use
          analytics
        </li>
        <li>
          Business results:
          <b class="font-bold">500% increase in policy holders </b>, IPO five
          years after founding
        </li>
      </ul>
      <a href="#" class="text-link text-white hover:text-gray-500">
        Meet Our Customers
      </a>
    </div>
    <ImagePlaceholder
      class="h-[546px] w-[264px] flex-shrink-0 rounded-2xl border-0 bg-white ring-8 ring-black"
    >
      iPhone screenshot
    </ImagePlaceholder>
    <div class="my-auto grid gap-8">
      <span class="text-2xl">Lemonade</span>
      <p class="text-xl font-thin">
        “I've used Mixpanel at many companies before—it's the go-to solution
        when you need user and product analytics.”
      </p>
      <div class="flex gap-4">
        <img
          class="h-20 w-20 rounded-full border-4 border-white"
          alt="profile"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        />
        <div class="flex flex-col justify-center">
          <span class="text-xl font-bold">Thomas Sidos</span>
          <span class="font-thin">Head of Product</span>
        </div>
      </div>
    </div>
  </div>
</section>
