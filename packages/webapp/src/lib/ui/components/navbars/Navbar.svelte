<script>
  const { class: className = "" } = $$props;
</script>


<div class="navbar {className} bg-blue-500">
  <div class="navbar-brand">
    <slot name="brand" />
  </div>
  <slot />
</div>

<style>
  .navbar {
    @apply flex relative px-5 py-0 md:justify-start justify-between items-stretch flex-wrap md:flex-nowrap;
  }

  .navbar-brand {
    @apply py-4 inline-block mr-5 whitespace-nowrap;
    min-width: 200px;
  }

</style>
