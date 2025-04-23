function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
  
  // Recursively build the tree from array
  function arrayToTree(arr, index = 0) {
    if (index >= arr.length || arr[index] === null) return null;
  
    let node = new TreeNode(arr[index]);
    node.left = arrayToTree(arr, 2 * index + 1);
    node.right = arrayToTree(arr, 2 * index + 2);
    return node;
  }
  
  function maxDepth(root) {
    if (!root) return 0;
    
    let depth = 0;
    let queue = [[root, 1]];
    
    while (queue.length > 0) {
        let [node, level] = queue.shift();
        depth = Math.max(depth, level);
        
        if (node.left) queue.push([node.left, level + 1]);
        if (node.right) queue.push([node.right, level + 1]);
    }
    
    return depth;
  }
  
  // Test case
  let root = arrayToTree([3, 9, 20, null, null, 15, 7,3,34,23,45,67,89,100,111,121,2123,123,,123,114,,123,123,12,45,34,234,23421]);
  console.log("Max Depth:", maxDepth(root));
  