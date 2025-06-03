const graph = {
    'A': ['C', 'B'],
    'B': ['D', 'E'],
    'C': ['F'],
    'D': ['F'],
    'E': ['F'],
    'F': []
};

async function dfsTopologicalSort(graph) {
    const visited = new Set();
    const stack = [];

    async function dfs(node) {
        console.log(`Mengunjungi node: ${node}`);
        visited.add(node);
        
        const neighbors = graph[node] || [];
        console.log(`Memeriksa tetangga dari ${node}: ${neighbors}`);
        
        await new Promise(resolve => setTimeout(resolve, 1000));

        for (const neighbor of neighbors) {
            if (!visited.has(neighbor)) {
                console.log(`Pindah ke tetangga: ${neighbor} dari ${node}`);
                await dfs(neighbor);
            } else {
                console.log(`Node ${neighbor} sudah dikunjungi, melewati`);
            }
        }

        console.log(`Memasukkan ${node} ke dalam tumpukan`);
        stack.unshift(node);
        await new Promise(resolve => setTimeout(resolve, 500));
        console.log(`Tumpukan saat ini: ${stack}`);
    }

    for (const node in graph) {
        if (!visited.has(node)) {
            console.log(`Memulai DFS dari node akar: ${node}`);
            await dfs(node);
        }
    }

    return stack;
}

(async () => {
    console.log('Struktur graph awal:', graph);
    console.log('Memulai pengurutan topologis menggunakan DFS...');
    const result = await dfsTopologicalSort(graph);
    console.log('Urutan topologis akhir:', result);
})();
