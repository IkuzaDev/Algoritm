const data = [5, 3, 8, 4, 2, 1, 7, 6, 9, 0, 11, 10, 15, 13, 12, 14, 16, 18, 17, 19];
async function partition(arr, low, high) {
    const pivot = arr[high];
    let i = low - 1;
    console.debug(`Memilih pivot: ${pivot} pada indeks ${high}`);
    await new Promise(resolve => setTimeout(resolve, 1000));

    for (let j = low; j < high; j++) {
        console.debug(`Memeriksa data ${arr[j]} pada indeks ${j}`);
        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
            console.warn(`Menukar data ${arr[i]} dengan ${arr[j]}`);
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    console.warn(`Menukar pivot ${pivot} dengan data ${arr[i + 1]} pada indeks ${i + 1}`);
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return i + 1;
}
async function QuickSort(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
        const pivotIndex = await partition(arr, low, high);
        console.warn(`Pivot terletak pada indeks ${pivotIndex}, nilai: ${arr[pivotIndex]}`);
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        await QuickSort(arr, low, pivotIndex - 1);
        console.debug(`Mengurutkan bagian kiri: ${arr.slice(low, pivotIndex)}`);
        await new Promise(resolve => setTimeout(resolve, 1000));
        await QuickSort(arr, pivotIndex + 1, high);
        console.debug(`Mengurutkan bagian kanan: ${arr.slice(pivotIndex + 1, high + 1)}`);
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
    console.debug(`Array setelah pengurutan: ${arr}`);
    return arr;
}

(async () => {
    console.log(`Data awal: ${data}`);
    const sortedData = await QuickSort(data);
    console.log(`Data akhir: ${sortedData}`);
})();