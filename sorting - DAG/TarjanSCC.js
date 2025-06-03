const graph = {
    'A': ['B'],
    'B': ['C', 'E'],
    'C': ['D'],
    'D': ['B'],
    'E': ['F'],
    'F': ['E']
};

async function tarjanSCC(graph) {
    const index = {};
    const lowLink = {};
    const onStack = new Set();
    const stack = [];
    let currentIndex = 0;
    const scc = [];

    async function strongConnect(node) {
        index[node] = currentIndex;
        lowLink[node] = currentIndex;
        currentIndex++;
        stack.push(node);
        onStack.add(node);
        console.log(`Mengunjungi node ${node} dengan indeks ${index[node]}`);
        await new Promise(resolve => setTimeout(resolve, 500));

        const neighbors = graph[node] || [];
        console.log(`Memproses tetangga dari ${node}: ${neighbors}`);

        for (const neighbor of neighbors) {
            if (!(neighbor in index)) {
                console.log(`Menjelajahi tetangga baru ${neighbor}`);
                await strongConnect(neighbor);
                lowLink[node] = Math.min(lowLink[node], lowLink[neighbor]);
            } else if (onStack.has(neighbor)) {
                console.log(`Menemukan jalur balik ke ${neighbor}`);
                lowLink[node] = Math.min(lowLink[node], index[neighbor]);
            }
            await new Promise(resolve => setTimeout(resolve, 500));
        }

        if (lowLink[node] === index[node]) {
            console.log(`Menemukan SCC dimulai dari ${node}`);
            const component = [];
            let w;
            do {
                w = stack.pop();
                onStack.delete(w);
                component.push(w);
            } while (w !== node);
            scc.push(component);
            console.log(`Komponen ditemukan: ${component}`);
        }
    }

    for (const node in graph) {
        if (!(node in index)) {
            await strongConnect(node);
        }
    }

    return scc;
}

(async () => {
    console.log('Struktur graph awal:', graph);
    const components = await tarjanSCC(graph);
    console.log('Komponen Terhubung Kuat:', components);
})();
