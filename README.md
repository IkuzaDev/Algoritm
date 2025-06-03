# Belajar Algoritma dengan Node.js

Repository ini berisi implementasi berbagai algoritma menggunakan Node.js.

## Daftar Algoritma

### Sorting Numerik
- [Bubble Sort](./sorting%20-%20numeric/BubbleSort.js) - Algoritma pengurutan sederhana dengan membandingkan dan menukar elemen bersebelahan
- [Selection Sort](./sorting%20-%20numeric/SelectionSort.js) - Algoritma pengurutan dengan mencari nilai minimum pada setiap iterasi
- [Insertion Sort](./sorting%20-%20numeric/InsertionSort.js) - Algoritma pengurutan dengan menyisipkan elemen ke posisi yang tepat
- [Merge Sort](./sorting%20-%20numeric/MergeSort.js) - Algoritma pengurutan dengan metode divide and conquer
- [Quick Sort](./sorting%20-%20numeric/QuickSort.js) - Algoritma pengurutan cepat dengan metode pivot dan partisi

### Sorting Graph
- [Topological Sort](./sorting%20-%20DAG/TopologicalSort.js) - Algoritma pengurutan untuk Directed Acyclic Graph (DAG)

## Cara Menjalankan

1. Pastikan Node.js sudah terinstall di sistem anda
2. Buka terminal/command prompt
3. Masuk ke direktori algoritma yang ingin dijalankan
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

## Kontribusi

Silakan berkontribusi dengan menambahkan algoritma baru atau memperbaiki implementasi yang ada melalui pull request.
