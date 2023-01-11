<script lang="ts">
  import { onMount } from "svelte";

  // Div props
  let className = "";
  export { className as class };

  // Observer props
  export let options: IntersectionObserverInit = {};
  let element: HTMLElement;
  export let isIntersecting = false;
  onMount(() => {
    const observer = new IntersectionObserver((entries) => {
      isIntersecting = entries[0].isIntersecting;
    }, options);
    observer.observe(element);
    return () => observer.disconnect();
  });
</script>

<div bind:this={element} class={className}>
  <slot />
</div>
