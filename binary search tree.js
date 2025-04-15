 // TreeNode definition
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

// Insert a value into the BST
function insertIntoBST(root, val) {
    if (!root) return new TreeNode(val);

    if (val < root.val) {
        root.left = insertIntoBST(root.left, val);
    } else {
        root.right = insertIntoBST(root.right, val);
    }
    return root;
}

// Build a BST from an array
function buildBST(arr) {
    let root = null;
    for (let val of arr) {
        root = insertIntoBST(root, val);
    }
    return root;
}

// Search a value in BST and return subtree
function searchBST(root, val) {
    if (!root || root.val === val) return root;

    if (val < root.val) {
        return searchBST(root.left, val);
    } else {
        return searchBST(root.right, val);
    }
}

// Helper to print the tree/subtree as an object
function printTree(node) {
    if (!node) return null;
    return {
        val: node.val,
        left: printTree(node.left),
        right: printTree(node.right)
    };
}

// Test
let arr = [4, 2, 7, 1, 3];
let root = buildBST(arr);
let valToSearch = 2;

let foundSubtree = searchBST(root, valToSearch);
console.log("Subtree rooted at", valToSearch, ":", JSON.stringify(printTree(foundSubtree), null, 2));
