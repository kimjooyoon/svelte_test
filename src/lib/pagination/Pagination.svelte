<script>
    import { createEventDispatcher } from 'svelte';
    export let numberArray = []
    export let currentPage = 0
    export let totalPage = 0

    const dispatch = createEventDispatcher();

    function btnClick(page) {
      dispatch('move',{page})
    }
</script>


<button on:click={()=>btnClick()}>처음으로</button>
{#each numberArray as page}
    {#if page === currentPage + 1}
        <button disabled style="color: red">{page}</button>
    {:else}
        <button on:click={()=>btnClick(page)}>{page}</button>
    {/if}
{/each}
<button on:click={()=>btnClick(totalPage)}>끝으로</button>
