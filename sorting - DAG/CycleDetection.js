const graph = {
    'A': ['B', 'C'],
    'B': ['D'],
    'C': ['D', 'E'],
    'D': ['E'],
    'E': ['A']
};

async function detectCycle(graph) {
    const visited = new Set();
    const recursionStack = new Set();

    async function dfs(node) {
        console.log(`Mengunjungi node: ${node}`);
        visited.add(node);
        recursionStack.add(node);
        await new Promise(resolve => setTimeout(resolve, 500));

        const neighbors = graph[node] || [];
        console.log(`Memeriksa tetangga dari ${node}: ${neighbors}`);

        for (const neighbor of neighbors) {
            console.log(`Memeriksa jalur ${node} -> ${neighbor}`);
            if (!visited.has(neighbor)) {
                console.log(`Mengunjungi tetangga baru ${neighbor}`);
                if (await dfs(neighbor)) return true;
            } else if (recursionStack.has(neighbor)) {
                console.log(`Siklus terdeteksi! Menemukan ${neighbor} dalam tumpukan rekursi`);
                return true;
            }
            await new Promise(resolve => setTimeout(resolve, 500));
        }

        console.log(`Kembali dari node ${node}`);
        recursionStack.delete(node);
        return false;
    }

    for (const node in graph) {
        if (!visited.has(node)) {
            console.log(`Memulai DFS dari node akar: ${node}`);
            if (await dfs(node)) {
                return true;
            }
        }
    }
    return false;
}

(async () => {
    console.log('Struktur graph awal:', graph);
    const hasCycle = await detectCycle(graph);
    console.log('Graph mengandung siklus:', hasCycle);
})();
