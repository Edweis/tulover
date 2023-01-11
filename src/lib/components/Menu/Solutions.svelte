<script>
  import Lifebuoy from "$lib/icons/lifebuoy.svelte";
  import Panel from "./Panel.svelte";
  let className = "";
  export { className as class };
</script>

<Panel class={className}>
  <ol class="flex gap-8">
    <li class="flex">
      <Lifebuoy className="h-8 mr-4 text-orange-500" />
      <div class="grid gap-2">
        <div class="font-bold text-white">Convert</div>
        <div>Analyze conversion and drop-off</div>
      </div>
    </li>

    <li class="flex">
      <Lifebuoy className="h-8 mr-4 text-orange-500" />
      <div class="grid gap-2">
        <div class="font-bold text-white">Engage</div>
        <div>Measure active usage</div>
      </div>
    </li>

    <li class="flex">
      <Lifebuoy className="h-8 mr-4 text-orange-500" />
      <div class="grid gap-2">
        <div class="font-bold text-white">Retain</div>
        <div>Find retention drivers</div>
      </div>
    </li>
  </ol>
</Panel>
