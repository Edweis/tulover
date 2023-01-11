<script lang="ts">
  import cn from "classnames";
  let classNames: string;
  export { classNames as class };
</script>

<div
  class={cn(
    "flex w-full items-center justify-center rounded-md border border-white text-xl text-black",
    classNames
  )}
>
  <slot>My awesome image</slot>
</div>
