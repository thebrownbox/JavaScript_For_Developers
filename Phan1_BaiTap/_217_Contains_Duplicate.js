/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    const mySet = new Set(nums);
    return mySet.size !== nums.length;
};

function myFunction ( arr = [], str )
{

    return arr.map(a => {...a, continent: str});
}