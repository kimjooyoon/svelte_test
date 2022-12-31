const url = "http://localhost:8080/user";

export async function GET(page) {
  let getUrl = url
  if (page) {
    getUrl += `?page=${page}`
  }
  return await fetch(getUrl);
}

export async function POST( name, nickName ) {
  return await fetch(url, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({name, nickName})
  });
}
