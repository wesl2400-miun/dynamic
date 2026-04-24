

/** 
* En abstraktion över fetch metoden
* @function
* @async
* @param {string} url - Förfrågan skickas till denna URL
* @returns {Promise<Object[]>}
* @throws {Error}
*/
export const query = async (url) => {
  try {
    const request = new Request(url);
    const response = await fetch(request);
    return await response.json();
  } catch (err) {
    return err;
  }
}

/** 
* Sortera statistik efter totala antalet sökande
* @function
* @param {Object[]} stats - Statistiklista
* @returns {Object[]} - Returnerar en ny sorterad statistiklista
*/
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

/** 
* Visa bara ett valt antal element i statistiklistan
* @function
* @param {Object[]} arr - Statistiklista
* @param {number} limit - Visa bara detta antal element i statistiklistan
* @returns {Object[]} - Returnerar en ny statistiklista med ett valt antal element
*/
export const limitArrBy = (arr, limit) => {
  const len = arr.length - 1;
  const result = [];
  for(let i = len; i > len - limit; i--)
    result.push(arr[i]);
  return result;
}

