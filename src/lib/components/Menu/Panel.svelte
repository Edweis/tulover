<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  interface $$Props extends HTMLAttributes<HTMLElementTagNameMap["div"]> {}
  import cn from "classnames";

  let { class: className, ...restProps } = $$restProps;
</script>

<div
  class={cn("invisible  absolute left-0 z-40 ml-auto pt-[26px]", className)}
  {...restProps}
>
  <div
    class="mt-4 flex max-w-6xl justify-between gap-8 rounded-lg border-[0.5px]   border-gray-500    bg-dark  p-6 text-sm text-gray-500 shadow-lg shadow-black/40 "
  >
    <slot />
  </div>
</div>
