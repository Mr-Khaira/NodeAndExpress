/*
Streams - Streams are used to read and write data sequentially.

    1. Writeable - Write data sequentually.
    2. Readable - Reading data sequentually.
    3. Duplex - Reading and write data sequentually.
    4. Transform - Ability to update while writing and reading data sequentually.
*/

const { createReadStream } = require("fs");

const fileStream = createReadStream("./Fundamentals-P1/myBigFile.txt", {
  highWaterMark: 90000,
  encoding: "utf-8",
});

fileStream.on("data", (reslut) => {
  console.log(reslut);
});

fileStream.on("error", (result) => {
  console.log(result);
});
// The data is read in chuncks, by default that chunck is 64kb(can be changed with highWaterMark), and at the end the remainder is given be it whatever amount less than 64kb. Encoding format can also be set.
