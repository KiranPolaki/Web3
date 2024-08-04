import crypto from "crypto";
import { stringify } from "querystring";

let i = 0;
let bool = true;

// * Assignment 1 - This is proof of work(once). the same logic bit coin mining uses tying to find a sequence onec. to do this we need more compute, more time, a lot of processing.
// * Assignment 2 - In bitcoin miner we have to constantly min, but here with a different sequence and a fixed prefix. prefix+nonce

const BruteHash1 = (str) => {
  while (bool) {
    console.log(i);
    let input = i.toString();
    let hash = crypto.createHash("sha256").update(input).digest("hex");
    // console.log(hash);
    if (hash.startsWith(str)) {
      return { number: i, hash: hash };
    }
    i++;
  }
};

const BruteHash2 = (nounce, str) => {
  while (bool) {
    console.log(i);
    let input = `${nounce}${i.toString()}`;
    let hash = crypto.createHash("sha256").update(input).digest("hex");
    if (hash.startsWith(str)) {
      return { number: i, hash: hash };
    }
    i++;
  }
};

// console.log(BruteHash1("00000"), "Brute1 Answer");
// console.log(BruteHash2("100xdevs", "00000"), "Brute2 Answer");
console.log(BruteHash2("harkirat => Raman | Rs 100", "00000"), "Brute2 Answer");
