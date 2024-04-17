// script.js
function generatePartitions() {
    const numberInput = document.getElementById('number-input');
    const partitionsContainer = document.getElementById('partitions-container');
    partitionsContainer.innerHTML = '';

    const number = parseInt(numberInput.value);
    const partitions = findPartitions(number);

    partitions.forEach(partition => {
        const partitionElement = document.createElement('p');
        partitionElement.textContent = partition.join(' + ');
        partitionsContainer.appendChild(partitionElement);
    });
}

function findPartitions(n) {
    const partitions = [];
    findPartitionRecursive(n, n, [], partitions);
    return partitions;
}

function findPartitionRecursive(target, max, partition, result) {
    if (target === 0) {
        result.push(partition);
        return;
    }

    for (let i = Math.min(max, target); i >= 1; i--) {
        findPartitionRecursive(target - i, i, [...partition, i], result);
    }
}
