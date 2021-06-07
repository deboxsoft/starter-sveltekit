<script lang="ts">
  import {clsx} from "@deboxsoft/svelte-core";

  $: className = clsx("card");
  $: headerClassName = clsx("card-header");
  $: bodyClassName = clsx("card-body");
  $: footerClassName = clsx("card-footer")
</script>
<style>

</style>

<div class={className}>
  {#if ($$slots["header"])}
  <div class={headerClassName}>

  </div>
    {/if}
</div>
