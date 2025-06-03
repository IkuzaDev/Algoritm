const data = [5, 3, 8, 4, 2, 1, 7, 6, 9, 0, 11, 10, 15, 13, 12, 14, 16, 18, 17, 19];
async function bubbleSort(arr) {
    var len = arr.length;
    console.log(`Sorting ${len} data menggunakan Bubble Sort...`);
    let swapped;
    
    do {
        swapped = false;
        for (let i = 0; i < len - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
                console.log(`menukar data ${arr[i]} -> ${arr[i + 1]}`);
                console.log(`Array saat ini: ${arr}\n`);
                await new Promise(resolve => setTimeout(resolve, 1000));
            }
        }
        var nowLen = arr.length;
        len--;
        console.log(`menggurangi panjang array ${nowLen} -> ${len}`);
        await new Promise(resolve => setTimeout(resolve, 1000));
    } while (swapped);
    
    console.log(`Array telah diurutkan: ${arr}`);
    return arr;
}
(async () => {
    console.log(`Data awal: ${data}`);
    const sortedData = await bubbleSort(data);
    console.log(`Data akhir: ${sortedData}`);
})();