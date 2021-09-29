export async function getBeers(url) {
    const response = await fetch(url);
    return response.json();
}
