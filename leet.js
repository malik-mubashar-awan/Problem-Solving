
var sortArray = function(nums) {
    let n = nums.length;

    // Build max heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(nums, n, i);
    }

    // Extract elements from heap one by one
    for (let i = n - 1; i > 0; i--) {
        [nums[0], nums[i]] = [nums[i], nums[0]]; // swap
        heapify(nums, i, 0); // heapify reduced heap
    }

    return nums;
};

function heapify(arr, size, root) {
    let largest = root;
    let left = 2 * root + 1;
    let right = 2 * root + 2;

    if (left < size && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < size && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest !== root) {
        [arr[root], arr[largest]] = [arr[largest], arr[root]];
        heapify(arr, size, largest);
    }
}

console.log(sortArray([3, 1, 2, 4, 0]));