const data = [5, 3, 8, 4, 2, 1, 7, 6, 9, 0, 11, 10, 15, 13, 12, 14, 16, 18, 17, 19];
async function MergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    console.debug(`Membagi array menjadi dua bagian: ${arr.slice(0, mid)} dan ${arr.slice(mid)}`);
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const left = await MergeSort(arr.slice(0, mid));
    const right = await MergeSort(arr.slice(mid));
    console.debug(`Kiri: ${left}, Kanan: ${right}`);
    await new Promise(resolve => setTimeout(resolve, 1000));

    return await merge(left, right);
}

async function merge(left, right) {
    console.debug(`Menggabungkan ${left} dan ${right}`);
    if (left.length === 0) return right;
    if (right.length === 0) return left;
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        await new Promise(resolve => setTimeout(resolve, 500));
        console.debug(`Membandingkan ${left[leftIndex]} dan ${right[rightIndex]}`);
        if (left[leftIndex] < right[rightIndex]) {
            console.warn(`Memilih ${left[leftIndex]} dari kiri`);
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            console.warn(`Memilih ${right[rightIndex]} dari kanan`);
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    console.debug(`Hasil penggabungan sementara: ${result}`);
    await new Promise(resolve => setTimeout(resolve, 1000));

    return result
        .concat(left.slice(leftIndex))
        .concat(right.slice(rightIndex));
}

(async() => {
    console.log(`Data awal: ${data}`);
    const sortedData = await MergeSort(data);
    console.log(`Data akhir: ${sortedData}`);
})();