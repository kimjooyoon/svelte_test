<script>
  export let promise;
</script>

<table>
    <th>idx</th>
    <th>name</th>
    <th>nickName</th>
    <tbody id="tBody">
    {#await promise}
        <p>...waiting</p>
    {:then list}
        {#each list.results as data}
            <tr>
                <td>{data.idx}</td>
                <td>{data.name}</td>
                <td>{data.nickName}</td>
            </tr>
        {/each}
    {:catch error}
        <p style="color: red">{error.message}</p>
    {/await}
    </tbody>
</table>


<style>
    table {
        width: 50%;
        border: 1px solid black;
        border-collapse: collapse;
        text-align: center;
    }
</style>
