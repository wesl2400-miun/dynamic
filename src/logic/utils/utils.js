
export const query = async (url) => {
  try {
    const request = new Request(url);
    const response = await fetch(request);
    return await response.json();
  } catch (err) {
    return err;
  }
}

export const sortByTot = (stats) => {
  const result = stats.sort((a, b) => {
    if(a.total < b.total)
      return -1;
    else if(a.total > b.total)
      return 1;
    else return 0;
  });
  return result;
}

export const limitArrBy = (arr, limit) => {
  const len = arr.length - 1;
  const result = [];
  for(let i = len; i > len - limit; i--)
    result.push(arr[i]);
  return result;
}

