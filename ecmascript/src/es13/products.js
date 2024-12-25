const response = await(fetch("https://api.escuelajs.co/api/v1/products"));
const responseJSON = await response.json();

export { responseJSON };