const graph = {
    A: ['B', 'C'],
    B: ['D'],
    C: ['D', 'E'],
    D: ['F'],
    E: ['F'],
    F: []
};

async function kahnTopologicalSort(graph) {
    const inDegree = {};
    const queue = [];
    const result = [];
    for (const node in graph) {
        inDegree[node] = 0;
        console.debug(`Inisialisasi inDegree untuk node ${node} = 0`);
        await new Promise(resolve => setTimeout(resolve, 500));
    }
    for (const node in graph) {
        console.debug(`Memeriksa tetangga dari node ${node}: ${graph[node]}`);
        for (const neighbor of graph[node]) {
            inDegree[neighbor] = (inDegree[neighbor] || 0) + 1;
            console.warn(`Meningkatkan inDegree untuk node ${neighbor} menjadi ${inDegree[neighbor]}`);
            await new Promise(resolve => setTimeout(resolve, 500));
        }
    }
    for (const node in inDegree) {
        console.debug(`Memeriksa inDegree untuk node ${node}: ${inDegree[node]}`);
        if (inDegree[node] === 0) {
            queue.push(node);
            console.debug(`Menambahkan node ${node} ke antrian karena inDegree-nya 0`);
            await new Promise(resolve => setTimeout(resolve, 500));
        }
    }
    while (queue.length > 0) {
        console.debug(`Antrian saat ini: ${queue}`);
        const current = queue.shift();
        result.push(current);

        for (const neighbor of graph[current]) {
            console.debug(`Memproses tetangga ${neighbor} dari node ${current}`);
            await new Promise(resolve => setTimeout(resolve, 500));
            inDegree[neighbor]--;
            if (inDegree[neighbor] === 0) {
                queue.push(neighbor);
                console.debug(`Menambahkan node ${neighbor} ke antrian karena inDegree-nya sekarang 0`);
            }
        }
    }
    if (result.length !== Object.keys(graph).length) {
        console.error("Graf memiliki siklus, topological sort tidak mungkin.");
    }

    return result.reverse();
}

(async () => {
    console.log("Graf yang akan diurutkan topologinya:", graph);
    const sorted = await kahnTopologicalSort(graph);
    console.log("Hasil topological sort:", sorted);
    console.log("Proses selesai.");
})();
