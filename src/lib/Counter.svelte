<script lang="ts">
  import { increment, counter } from "./state.svelte";
</script>

<button onclick={increment}>
  count is {counter.count}
</button>
