<script lang='ts'>
  import type { PageData } from './$types';

  export let data: PageData;
</script>


  <ul>
    {#each data.highlights as item}
      <li>{item.link}</li>
    {/each}
  </ul>
