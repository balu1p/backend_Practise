const batchName = 'Sigma Batch';
const date = new Date();
const batchDate = date.getDate();
const batchMonth = date.getMonth()
const printDate = () => {
    const date = new Date()
    console.log(date.getDate());
};

const printMonth = () => {
    const date = new Date()
    console.log(date.getMonth());
}

const printBatchInfo = (batchName, batchDate, batchMonth) => {
    console.log(`my batch name is ${batchName}, ${batchDate}, ${batchMonth}, the topic being taught today is Radon, W3D3, the topic for today is Nodejs module system`)
}

export {printDate, printMonth, printBatchInfo, batchName, batchDate, batchMonth}