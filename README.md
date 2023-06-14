# Eighteen Hands of Wing Chun 詠春十八手

Goal: Build a Sample Search Algorithm for JSON Data

## What is Eighteen Hands of Wing Chun?

In the Gary Lam Wing Chun system, each move is assigned one of five elements of the Chinese wuxing system. I have written each hand's jyutping (Cantonese romanization), English translation, and element onto a JSON file, the content of which is imported into this React app, which uses the Hamming Distance to search for hands of interest and their elements.

## Technologies Used
- React
- HTML5
- CSS3

## Concepts
- Hamming Distance
- Levenshtein Distance
- `String.prototype.includes()`

## Features
### Search for a Wing Chun Hand
![Search1](https://github.com/rickythewriter/kung-fu-search/blob/master/public/images/search1.png)
![Search2](https://github.com/rickythewriter/kung-fu-search/blob/master/public/images/search2.png)
### See or Hide List of Eighteen Wing Chun Hands
![See](https://github.com/rickythewriter/kung-fu-search/blob/master/public/images/see.png)
![Hide](https://github.com/rickythewriter/kung-fu-search/blob/master/public/images/hide.png)

## Installation
1. From the terminal, clone this repository
```
git clone https://github.com/rickythewriter/kung-fu-search.git
```
2. Enter the containing directory; install dependencies
```
npm install
```
3. Run on localhost
```
npm start
```

## Cool Code Snippets

The main functionality of the search is in the ability to assign each result item a metric of closeness to the search query. I chose a Hamming Distance as the main algorithm.

Note: The Levenshtein Distance did was not as good at indexing letters in sequence, since it also accounts for swapping.

### Hamming Distance
```
function hammingDistance(query, string) {
  let distance = 0;

  for (const idx in query) {
    if (query[idx] !== string[idx]) distance++;
  }

  return distance;
}
```
For a more user-friendly experience, the length in consideration was not the length of the longer string, but the length of the query string, because the query is more often a substring of the intended search.

### Accounting for Sub-Strings
```
function calculateQueryDistance(query, string) {
  /* Initialize output as Hamming distance between query and compared word */
  let distance = hammingDistance(query, string);

  /* If word includes query, shorten distance by number of characters in query*/
  if (string.includes(query) && distance !== 0) {
    distance -= query.length;
  }

  return distance;
}
```

Let's say I am looking for the word, "butterfly sword", but I only type in "fly". I would shorten the distance by the number of letters in the query, to account for its inclusion in the result string.

## Creator - Ricky Thang
- [GitHub](https://github.com/rickythewriter)
- [Portfolio](rickythang.com)
- [LinkedIn](https://www.linkedin.com/in/ricky-thang-88307a100)
