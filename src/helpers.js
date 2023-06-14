
/* Create a hand array sorted by closest match to jyutping and translation */
export function createSortedHandList(query, list) {
  const handList = [];

  query = query.toUpperCase().trim();

  for (const member of list) {
    const resultString = `${member.jyutping} ${member.translation} ${member.element}`.toUpperCase().trim();

    /* Determine shortest distance found between query and resultString word */
    let distance = Infinity;
    for (const word of resultString.split(' ')) {
      const wordDistance = calculateQueryDistance(query, word);
      distance = wordDistance < distance ? wordDistance : distance;
    }

    const hand = {
      id: member.id,
      jyutping: member.jyutping,
      translation: member.translation,
      element: member.element,
      distance,
    }

    handList.push(hand)
  }

  return handList.sort((a, b) => a.distance - b.distance);
}

function calculateQueryDistance(query, string) {
  /* Initialize output as Hamming distance between query and compared word */
  let distance = hammingDistance(query, string);

  /* If word includes query, shorten distance by number of characters in query*/
  if (string.includes(query) && distance !== 0) {
    distance -= query.length;
  }

  return distance;
}

function hammingDistance(query, string) {
  let distance = 0;

  for (const idx in query) {
    if (query[idx] !== string[idx]) distance++;
  }

  return distance;
}

