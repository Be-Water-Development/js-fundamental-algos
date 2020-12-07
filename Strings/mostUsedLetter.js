// Write a function that takes in a block of text and returns the 
// letter and count that is found most frequently
// Write your own test cases here.

const mostUsedLetter = (str) => {
    const counts = str.toLowerCase().split('').reduce((acc, val) => {
        if (val.match(/[a-z]/)) {
            if (!acc[val]) {
                acc[val] = 1
            } else {
                acc[val]++
            }
        }
        return acc
    }, {})
    console.log("Counts of each letter in the Paragraph:", counts)
    const greatest = Math.max(...Object.values(counts))
    console.log("Highest value:", greatest)
    const output = {}
    for (const property in counts) {
        if (counts[property] === greatest) {
            output[property] = counts[property]
        }
    }
    return output
}

const paragraph1 = "Hello my name a Borat and I'm from the glorious nation of Kazakhstan"
const paragraph2 = "fndsajkfgbrealkjsfgbralsdfbehrlasbfehirabfahels   efhdujaiseldbfduasbffbrdhjak"
const paragraph3 = "578497&*^%$#( b b  ()Y*(ggghuk"
console.log(mostUsedLetter(paragraph1));
console.log(mostUsedLetter(paragraph2));
console.log(mostUsedLetter(paragraph3));
