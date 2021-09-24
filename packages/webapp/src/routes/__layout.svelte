<script>
  import Navbar from "__@components/navbars/Navbar.svelte";
</script>
<div class="flex flex-col min-h-screen">
  <Navbar >
    navbar
  </Navbar>
  <!-- page content -->
  <div class="flex">
    <div class="card">
      <slot />
    </div>
  </div>

  <!--  footer -->
  <footer class="flex">
    <div />
  </footer>
</div>
