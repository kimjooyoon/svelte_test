<script>
  import {IntArrayBySize} from "$lib/functions/NumberUtil.js";
  import Pagination from "$lib/pagination/Pagination.svelte";
  import {GET, POST} from "./+server.js";
  import NameTable from "./NameTable.svelte";

  let promise = getList();

  let name = "";
  let nickName = "";

  let numberArray = [];
  let currentPage = 0;
  let totalPage = 0;

  async function getList(page) {
    const res = await GET(page);
    const json = await res.json();

    if (res.ok) {
      numberArray = IntArrayBySize(json.totalPage);
      currentPage = json.currentPage;
      totalPage = json.totalPage;
      return json;
    } else {
      throw new Error("백엔드 서버 에러");
    }
  }

  async function createUser() {
    if (!name || !nickName) throw new Error("name or nickName 없음");

    let res = await POST(name, nickName);

    if (res.status === 200 || res.status === 201) {
      name = "";
      nickName = "";
      promise = await getList();
    } else if (res.status === 409) {
      throw new Error("이미 존재하는 닉네임 입니다.");
    } else {
      throw new Error("백엔드 서버 에러");
    }
  }

  function handlerPageMove(event) {
    promise = getList(event.detail.page);
  }

</script>

<h2>나는 너무 대단해 홀리 몰리</h2>

이름:<input type="text" bind:value={name}>
닉네임:<input type="text" bind:value={nickName}>

<button on:click={createUser}>
    추가
</button>

<NameTable {promise}/>

<Pagination {numberArray} {currentPage} {totalPage} on:move={handlerPageMove}/>
