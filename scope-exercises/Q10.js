function product(...nums) {
    let result = 1;
    for (let i = 0; i < nums.length; i++) {
        result *= nums[i];
    }
    return result;
}

console.log(product(1, 1, 2));