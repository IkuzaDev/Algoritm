const data = [5, 3, 8, 4, 2, 1, 7, 6, 9, 0, 11, 10, 15, 13, 12, 14, 16, 18, 17, 19];
async function selectionSort(arr) {
    var len = arr.length;
    console.log(`Sorting ${len} data menggunakan Selection Sort...`);
    
    for (let i = 0; i < len - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < len; j++) {
            console.debug(`memeriksa data ${arr[j]} pada indeks arr[${j}]`);
            await new Promise(resolve => setTimeout(resolve, 500));
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
                console.warn(`menemukan data terkecil ${arr[minIndex]} pada indeks ${minIndex}`);
                await new Promise(resolve => setTimeout(resolve, 500));
            }
        }
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
            console.debug(`menukar data ${arr[i]} -> ${arr[minIndex]}`);
            console.debug(`Array saat ini: ${arr}\n`);
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
    }
    
    console.log(`Array telah diurutkan: ${arr}`);
    return arr;
}
(async () => {
    console.log(`Data awal: ${data}`);
    const sortedData = await selectionSort(data);
    console.log(`Data akhir: ${sortedData}`);
})();