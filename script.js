function byteSize(str) {
    // Create a new Blob object with the input string
    const blob = new Blob([str]);
    return blob.size;
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('calculateButton').addEventListener('click', () => {
        const inputString = document.getElementById('inputString').value;
        const size = byteSize(inputString);
        document.getElementById('byteSizeOutput').textContent = size;
    });
});
