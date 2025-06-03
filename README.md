# Belajar Algoritma dengan Node.js

Repository ini berisi implementasi berbagai algoritma menggunakan Node.js.

## Daftar Algoritma

### Sorting Numerik
- [Bubble Sort](./sorting%20-%20numeric/BubbleSort.js)
  > Algoritma pengurutan sederhana dengan membandingkan dan menukar elemen bersebelahan
- [Selection Sort](./sorting%20-%20numeric/SelectionSort.js)
  > Algoritma pengurutan dengan mencari nilai minimum pada setiap iterasi
- [Insertion Sort](./sorting%20-%20numeric/InsertionSort.js)
  > Algoritma pengurutan dengan menyisipkan elemen ke posisi yang tepat
- [Merge Sort](./sorting%20-%20numeric/MergeSort.js)
  > Algoritma pengurutan dengan metode divide and conquer
- [Quick Sort](./sorting%20-%20numeric/QuickSort.js)
  > Algoritma pengurutan cepat dengan metode pivot dan partisi

### Sorting Graph
- [Topological Sort](./sorting%20-%20DAG/TopologicalSort.js)
  > Algoritma pengurutan untuk Directed Acyclic Graph (DAG)
- [DFS Topological Sort](./sorting%20-%20DAG/DFSTopologicalSort.js)
  > Implementasi Topological Sort dengan DFS
- [Cycle Detection](./sorting%20-%20DAG/CycleDetection.js)
  > Deteksi siklus dalam graph
- [Colored DFS](./sorting%20-%20DAG/ColoredDFS.js)
  > Implementasi DFS dengan pewarnaan node
- [Tarjan SCC](./sorting%20-%20DAG/TarjanSCC.js)
  > Implementasi Tarjan untuk Strongly Connected Components
- [Kosaraju SCC](./sorting%20-%20DAG/KosarajuSCC.js)
  > Implementasi Kosaraju untuk Strongly Connected Components

## Cara Menjalankan

1. Pastikan Node.js sudah terinstall di sistem anda
2. Buka terminal/command prompt
3. Masuk ke direktori algoritma yang ingin dijalankan
   ```cd sorting - DAG``` atau ```cd sorting numeric```
4. Jalankan dengan perintah:
   ```bash
   node namafile.js
   ```

## Penjelasan Algoritma

### Bubble Sort
- **Kompleksitas**: O(n²)
- **Cara Kerja**: Membandingkan dua elemen bersebelahan dan menukarnya jika urutannya salah
- **Kelebihan**: Sederhana dan mudah diimplementasikan
- **Kekurangan**: Tidak efisien untuk data besar

### Selection Sort
- **Kompleksitas**: O(n²)
- **Cara Kerja**: Mencari elemen minimum dan menempatkannya di posisi yang tepat
- **Kelebihan**: Jumlah penukaran lebih sedikit dibanding bubble sort
- **Kekurangan**: Tidak efisien untuk data besar

### Insertion Sort
- **Kompleksitas**: O(n²)
- **Cara Kerja**: Membangun array terurut secara bertahap dengan menyisipkan elemen
- **Kelebihan**: Efisien untuk dataset kecil dan hampir terurut
- **Kekurangan**: Tidak efisien untuk data besar

### Merge Sort
- **Kompleksitas**: O(n log n)
- **Cara Kerja**: Membagi array, mengurutkan, dan menggabungkan kembali
- **Kelebihan**: Stabil dan konsisten
- **Kekurangan**: Membutuhkan memori tambahan

### Quick Sort
- **Kompleksitas**: O(n log n) rata-rata, O(n²) worst case
- **Cara Kerja**: Menggunakan pivot untuk mempartisi dan mengurutkan
- **Kelebihan**: Sangat efisien untuk dataset besar
- **Kekurangan**: Worst case performance buruk

### Topological Sort
- **Kompleksitas**: O(V + E)
- **Cara Kerja**: Mengurutkan vertex dalam DAG sehingga edge mengarah ke depan
- **Kelebihan**: Ideal untuk dependency resolution
- **Kekurangan**: Hanya bekerja pada DAG

### Cycle Detection
- **Kompleksitas**: O(V + E)
- **Cara Kerja**: Menggunakan DFS dengan recursion stack untuk mendeteksi siklus
- **Kelebihan**: Dapat mendeteksi siklus dalam graph
- **Kekurangan**: Membutuhkan tambahan memori untuk recursion stack

### Colored DFS
- **Kompleksitas**: O(V + E)
- **Cara Kerja**: Menggunakan 3 warna untuk melacak status node
- **Kelebihan**: Dapat mendeteksi siklus dan melakukan topological sort
- **Kekurangan**: Memerlukan space tambahan untuk tracking warna

### Tarjan SCC
- **Kompleksitas**: O(V + E)
- **Cara Kerja**: Menggunakan DFS dengan indeks dan lowlink values
- **Kelebihan**: Single pass algorithm, efisien
- **Kekurangan**: Kompleks untuk diimplementasi

### Kosaraju SCC
- **Kompleksitas**: O(V + E)
- **Cara Kerja**: Menggunakan dua pass DFS dengan graph reversal
- **Kelebihan**: Mudah dimengerti dan diimplementasi
- **Kekurangan**: Membutuhkan dua pass melalui graph

## Kontribusi

Silakan berkontribusi dengan menambahkan algoritma baru atau memperbaiki implementasi yang ada melalui pull request.
