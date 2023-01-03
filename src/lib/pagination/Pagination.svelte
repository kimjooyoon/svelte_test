<script>
  import {createEventDispatcher} from "svelte";

  export let array = [];
  export let current = 0;
  export let total = 0;

  const dispatch = createEventDispatcher();

  function btnClick(page) {
    dispatch("move", {page});
  }
</script>


<button on:click={()=>btnClick()}>처음으로</button>

{#each array as page}
    {#if page === current + 1}
        <button disabled style="color: red">{page}</button>
    {:else}
        <button on:click={()=>btnClick(page)}>{page}</button>
    {/if}
{/each}

<button on:click={()=>btnClick(total)}>끝으로</button>
