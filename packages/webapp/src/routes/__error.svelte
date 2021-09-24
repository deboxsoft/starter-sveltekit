<script context="module">
  export function load({ error, status }) {
    return {
      props: {
        title: `${status}: ${error.message}`,
        status,
        error
      }
    };
  }

</script>

<script>
  // Start: Sevelte Imports
  import { dev } from "$app/env";
  // End: Sevelte Imports

  // End: Local Imports
  // Start: Exported Properties
  /**
   * @type {string}
   */
  export let status: string;
  /**
   * @type {string}
   */
  export let error: Error;
  // End: Exported Properties
  /**
   * @type {IMetaTagProperties}
   */
  const metaData: Partial<IMetaTagProperties> = {
    title: `${status} | Sveltekit`,
    description: "404 page of Sveltekit starter project"
  };

</script>

<!-- Start: Header Tage -->
<!-- End: Header Tage -->

<!-- Start: Error View Layout -->
<div class="md:container md:mx-auto">
  <div class="flex flex-col justify-center items-center">
    <!-- Start: Error Status Code -->
    <h1>{status}</h1>
    <!-- End: Error Status Code -->
    <p>{error.name}</p>
    <!-- Start: Error Message container -->
    {#if dev && error.stack}
      <pre> {error.message} </pre>
    {/if}
    <!-- End: Error Message container -->
  </div>
</div>
<!-- End: Error View Layout -->
<style>
</style>

