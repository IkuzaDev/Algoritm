const graph = {
    'A': ['B', 'C'],
    'B': ['D'],
    'C': ['D', 'E'],
    'D': ['F'],
    'E': ['F'],
    'F': []
};

async function coloredDFS(graph) {
    const WHITE = 0, GRAY = 1, BLACK = 2;
    const colors = {};
    const result = [];

    for (const node in graph) {
        colors[node] = WHITE;
    }

    async function visit(node) {
        console.log(`Mengunjungi node: ${node}`);
        colors[node] = GRAY;
        console.log(`Node ${node} ditandai ABU-ABU (sedang diproses)`);
        await new Promise(resolve => setTimeout(resolve, 500));

        const neighbors = graph[node] || [];
        console.log(`Memproses tetangga dari ${node}: ${neighbors}`);

        for (const neighbor of neighbors) {
            console.log(`Memeriksa tetangga ${neighbor} dari node ${node}`);
            if (colors[neighbor] === WHITE) {
                console.log(`Mengunjungi tetangga baru ${neighbor}`);
                if (!await visit(neighbor)) return false;
            } else if (colors[neighbor] === GRAY) {
                console.log(`Siklus terdeteksi pada ${neighbor}`);
                return false;
            }
            await new Promise(resolve => setTimeout(resolve, 500));
        }

        colors[node] = BLACK;
        console.log(`Node ${node} ditandai HITAM (selesai)`);
        result.unshift(node);
        return true;
    }

    for (const node in graph) {
        if (colors[node] === WHITE) {
            console.log(`Memulai dari node akar: ${node}`);
            if (!await visit(node)) {
                console.log('Siklus terdeteksi, pengurutan topologis tidak mungkin');
                return null;
            }
        }
    }

    return result;
}

(async () => {
    console.log('Struktur graph awal:', graph);
    const sortedOrder = await coloredDFS(graph);
    console.log('Urutan topologis:', sortedOrder);
})();
