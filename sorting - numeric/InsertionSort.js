const data = [5, 3, 8, 4, 2, 1, 7, 6, 9, 0, 11, 10, 15, 13, 12, 14, 16, 18, 17, 19];
async function insertionSort(arr) {
    var len = arr.length;
    console.log(`Sorting ${len} data menggunakan Insertion Sort...`);
    
    for (let i = 1; i < len; i++) {
        let key = arr[i];
        let j = i - 1;
        
        console.debug(`memeriksa data ${key} pada indeks arr[${i}]`);
        await new Promise(resolve => setTimeout(resolve, 500));
        
        while (j >= 0 && arr[j] > key) {
            console.warn(`memindahkan data ${arr[j]} ke indeks arr[${j + 1}]`);
            arr[j + 1] = arr[j];
            j--;
            await new Promise(resolve => setTimeout(resolve, 500));
        }
        
        arr[j + 1] = key;
        console.warn(`menempatkan data ${key} pada indeks arr[${j + 1}]`);
        console.debug(`Array saat ini: ${arr}\n`);
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
    
    console.log(`Array telah diurutkan: ${arr}`);
    return arr;
}
(async() => {
    console.log(`Data awal: ${data}`);
    const sortedData = await insertionSort(data);
    console.log(`Data akhir: ${sortedData}`);
})();