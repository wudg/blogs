// 定义桶排序函数
function bucketSort(arr, bucketCount) {
 // 获取数组中的最大值和最小值
 const max = Math.max(...arr);
 const min = Math.min(...arr);

 // 计算每个桶的大小
 const bucketSize = (max - min) / bucketCount;

 // 创建桶
 const buckets = new Array(bucketCount).fill([]);

 // 将数组中的元素分配到对应的桶中
 for (let i = 0; i < arr.length; i++) {
   const index = Math.floor((arr[i] - min) / bucketSize);
   buckets[index].push(arr[i]);
 }

 // 对每个桶进行排序
 for (let i = 0; i < buckets.length; i++) {
   buckets[i].sort((a, b) => a - b);
 }

 // 将所有桶的数据合并
 let result = [];
 for (let i = 0; i < buckets.length; i++) {
   result = result.concat(buckets[i]);
 }

 // 返回排序后的结果
 return result;
}

// 示例
const arr = [4, 2, 2, 8, 3, 3, 1];
const bucketCount = 3;
console.log(bucketSort(arr, bucketCount)); // 输出：[1, 2, 2, 3, 3, 4, 8]