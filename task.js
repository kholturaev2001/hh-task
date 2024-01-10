Задача:

//Для максимально простой сериализации без использования алгоритмов сжатия, мы можем воспользоваться следующим подходом:

// Сначала преобразуем числа в строковый формат.
// Затем преобразуем строки в одну строку, разделяя их специальным разделителем.
// Для десериализации мы будем делать обратные операции.

function serialize(arr) {
    return arr.map(String).join(',');
}

function deserialize(str) {
    return str.split(',').map(Number);
}

// Примеры тестов
const tests = [
    [1, 2, 3, 4, 5],
    [10, 20, 30, 40, 50],
    Array.from({ length: 50 }, (_, i) => i + 1),
    Array.from({ length: 100 }, (_, i) => i + 1),
    Array.from({ length: 500 }, (_, i) => i + 1),
    Array.from({ length: 1000 }, (_, i) => i + 1),
    Array.from({ length: 10 }, (_, i) => Math.floor(Math.random() * 9) + 1),
    Array.from({ length: 100 }, (_, i) => Math.floor(Math.random() * 90) + 10),
    Array.from({ length: 500 }, (_, i) => Math.floor(Math.random() * 900) + 100),
    Array.from({ length: 900 }, (_, i) => Math.floor(Math.random() * 900) + 100),
];

for (const test of tests) {
    const serialized = serialize(test);
    const compressionRatio = (serialized.length / (test.length * 3)).toFixed(2);
    console.log(`Original: ${test}\nSerialized: ${serialized}\nCompression Ratio: ${compressionRatio}\n`);
}
