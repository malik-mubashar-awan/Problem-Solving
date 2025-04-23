
  function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
 }


var maxDepth = function(arr) {
    let root = new TreeNode(arr[0]);
   for(let i = 1; i < arr.length; i++) {    
    if(arr[i] ) {
        root.left = new TreeNode(arr[i]);
    }
    if(arr[i] !== null) {
        root.right = new TreeNode(arr[i]);
    }
   }
};
console.log(maxDepth([3,9,20,null,null,15,7]));