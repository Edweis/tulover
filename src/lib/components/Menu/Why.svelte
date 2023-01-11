<script>
  import Lifebuoy from "$lib/icons/lifebuoy.svelte";
  import Panel from "./Panel.svelte";
  let className = "";
  export { className as class };
</script>

<Panel class={className}>
  <div>
    <div class="text-muted mb-8">powerful, SIMPLE ANALYTICS</div>
    <ol class="grid gap-8">
      <li class="flex">
        <Lifebuoy className="h-8 mr-4 text-indigo-500" />
        <div class="grid gap-2">
          <div class="font-bold text-white">Interactive Reports</div>
          <div>Learn about your users</div>
        </div>
      </li>

      <li class="flex">
        <Lifebuoy className="h-8 mr-4 text-indigo-500" />
        <div class="grid gap-2">
          <div class="font-bold text-white">Team Boards & Alerts</div>
          <div>Monitor your metrics</div>
        </div>
      </li>

      <li class="flex">
        <Lifebuoy className="h-8 mr-4 text-indigo-500" />
        <div class="grid gap-2">
          <div class="font-bold text-white">Limitless Segmentation</div>
          <div>Surface hidden trends</div>
        </div>
      </li>

      <li class="flex">
        <Lifebuoy className="h-8 mr-4 text-indigo-500" />
        <div class="grid gap-2">
          <div class="font-bold text-white">Group Analytics</div>
          <div>Measure B2B account health</div>
        </div>
      </li>
    </ol>
  </div>
  <div>
    <div class="text-muted  mb-8">TOOLS FOR TRUSTED DATA</div>
    <ol class="grid gap-8">
      <li class="flex">
        <Lifebuoy className="h-8 mr-4 text-indigo-500" />
        <div class="grid gap-2">
          <div class="font-bold text-white">Data Integrations</div>
          <div>Connect to your warehouse</div>
        </div>
      </li>

      <li class="flex">
        <Lifebuoy className="h-8 mr-4 text-indigo-500" />
        <div class="grid gap-2">
          <div class="font-bold text-white">Data Management</div>
          <div>Keep data clean & usable</div>
        </div>
      </li>

      <li class="flex">
        <Lifebuoy className="h-8 mr-4 text-indigo-500" />
        <div class="grid gap-2">
          <div class="font-bold text-white">Security & Privacy</div>
          <div>Protect customer data</div>
        </div>
      </li>

      <li class="flex">
        <Lifebuoy className="h-8 mr-4 text-indigo-500" />
        <div class="grid gap-2">
          <div class="font-bold text-white">Scalable infrastructure</div>
          <div>Ingest & query at any volume</div>
        </div>
      </li>
    </ol>
  </div>
  <div>
    <div class="text-muted  mb-8">MORE</div>
    <ol class="grid gap-8">
      <li class="flex">
        <Lifebuoy className="h-8 mr-4 text-indigo-500" />
        <div class="grid gap-2">
          <div class="font-bold text-white">Integration Directory</div>
          <div>50+ connections to top tools</div>
        </div>
      </li>
    </ol>
  </div>
</Panel>
