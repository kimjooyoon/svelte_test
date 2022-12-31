<script>
    import { createEventDispatcher } from 'svelte';
    export let numberArray = []
    export let currentPage = 0

    const dispatch = createEventDispatcher();

    function btnClick(page) {
      dispatch('move',{
        page:page
        }
      )
    }
</script>


<button>처음으로</button>
{#each numberArray as page}
    {#if page === currentPage + 1}
        <button disabled style="color: red">{page}</button>
    {:else}
        <button on:click={()=>btnClick(page)}>{page}</button>
    {/if}
{/each}
<button>끝으로</button>
