export const doGet = async (url) => {
  const response = await fetch(url);
  const rspjson = response.json();
  return rspjson;
};

export const doPost = async (url, data) => {
  const response = await fetch(url, data);
  const rspjson = response.json();
  return rspjson;
};
