// const coding = ["js","java","cpp","python"];

// foreach does not return any value
// const values = coding.forEach((item) =>{
//     // console.log(item);  
//     return item
// })

// console.log(values);

const myNums = [1,2,3,4,5,6,7,8,9,10];

// const filteredNums = myNums.filter((item) => (item > 4))

// const filteredNums = myNums.filter((item) =>{
//     return item > 4;
// })
// console.log(filteredNums);

// const newNums = [];

// myNums.forEach((item) =>{
//     if(item > 4) newNums.push(item); 
// })

// console.log(newNums);

const books = [
    {
        "title": "The Code Chronicles",
        "genre": "Technology",
        "publish": "2018-09-15",
        "edition": "1st"
    },
    {
        "title": "Mystery of the Forgotten Algorithm",
        "genre": "Mystery",
        "publish": "2021-03-22",
        "edition": "2nd"
    },
    {
        "title": "Adventures in AI",
        "genre": "Science Fiction",
        "publish": "2019-11-05",
        "edition": "1st"
    },
    {
        "title": "The Bootstrap Handbook",
        "genre": "Technology",
        "publish": "2020-07-30",
        "edition": "3rd"
    },
    {
        "title": "Journey Through JavaScript",
        "genre": "Education",
        "publish": "2022-01-18",
        "edition": "4th"
    }
]

let userBooks = books.filter((book) => ( book.genre === 'Technology' && book.edition === '1st'))


console.log(userBooks);
