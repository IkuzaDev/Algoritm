const graph = {
    'A': ['B'],
    'B': ['C', 'E'],
    'C': ['D'],
    'D': ['B'],
    'E': ['F'],
    'F': ['E']
};

async function kosarajuSCC(graph) {
    const visited = new Set();
    const stack = [];
    const scc = [];

    function reverseGraph(graph) {
        const reversed = {};
        for (const node in graph) {
            for (const neighbor of graph[node]) {
                if (!(neighbor in reversed)) reversed[neighbor] = [];
                reversed[neighbor].push(node);
            }
            if (!(node in reversed)) reversed[node] = [];
        }
        return reversed;
    }

    async function dfs1(node) {
        visited.add(node);
        console.log(`Tahap pertama: mengunjungi ${node}`);
        await new Promise(resolve => setTimeout(resolve, 500));

        const neighbors = graph[node] || [];
        for (const neighbor of neighbors) {
            if (!visited.has(neighbor)) {
                await dfs1(neighbor);
            }
        }
        stack.push(node);
    }

    async function dfs2(node, component) {
        visited.add(node);
        component.push(node);
        console.log(`Tahap kedua: menambahkan ${node} ke komponen`);
        await new Promise(resolve => setTimeout(resolve, 500));

        const neighbors = reversedGraph[node] || [];
        for (const neighbor of neighbors) {
            if (!visited.has(neighbor)) {
                await dfs2(neighbor, component);
            }
        }
    }

    for (const node in graph) {
        if (!visited.has(node)) {
            await dfs1(node);
        }
    }

    const reversedGraph = reverseGraph(graph);
    visited.clear();
    console.log('Graph dibalik, memulai tahap kedua');

    while (stack.length > 0) {
        const node = stack.pop();
        if (!visited.has(node)) {
            const component = [];
            await dfs2(node, component);
            scc.push(component);
        }
    }

    return scc;
}

(async () => {
    console.log('Struktur graph awal:', graph);
    const components = await kosarajuSCC(graph);
    console.log('Komponen Terhubung Kuat:', components);
})();
