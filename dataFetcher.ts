export{}

export async function getBeers(url:any) {
    const response = await fetch(url);  
    return response.json();
}
  