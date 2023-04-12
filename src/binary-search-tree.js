const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {

  constructor() {
    this.rootFirst = null;
  }

  root() {
    throw new NotImplementedError('Not implemented');
    return this.rootFirst;
  }

  add(data) {
    throw new NotImplementedError('Not implemented');
    let newNode = new Node(data);

    if(this.rootFirst === null){
      this.rootFirst = newNode;
    }

    let rootCurrent = this.rootFirst;
    while(true){
      if(data < rootCurrent.data){
        if(rootCurrent.left === null){
          rootCurrent.left = newNode;
          break;
        }else{
          rootCurrent = rootCurrent.left;
        }
      }else{
        if(rootCurrent.right === null){
          rootCurrent.right = newNode;
          break;
        }else{
          rootCurrent = rootCurrent.right;
        }
      }
    }
  }

  has(data) {
    throw new NotImplementedError('Not implemented');
    let rootCurrent = this.rootFirst;

    while(rootCurrent !== null){
      if(data === rootCurrent.data){
        return true
      }else if(data < rootCurrent.data){
        rootCurrent = rootCurrent.left;
      }else{rootCurrent = rootCurrent.right}
    }
    return false;
  }

  find(data) {
    throw new NotImplementedError('Not implemented');
    let rootCurrent = this.rootFirst;

    while(rootCurrent !== null){
      if(data === rootCurrent.data){
        return rootCurrent
      }else if(data < rootCurrent.data){
        rootCurrent = rootCurrent.left;
      }else{rootCurrent = rootCurrent.right}
    }
    return null;
  }

  remove(data) {
    throw new NotImplementedError('Not implemented');
    let rootCurrent = this.rootFirst;
    let rootParent = new Node(null);
    while (rootCurrent !== null) {
      if (data === rootCurrent.data) {
        if (rootCurrent.left === null && rootCurrent.right === null) {
          if (rootParent === null) {
            rootCurrent = null;
          } else if (rootCurrent === rootParent.left) {
            rootParent.left = null;
          } else {
            rootParent.right = null;
          }
        } else if (rootCurrent.left === null) {
          if (rootParent === null) {
            this.rootNode = rootCurrent.right;
          } else if (rootCurrent === rootParent.left) {
            rootParent.left = rootCurrent.right;
          } else {
            rootParent.right = rootCurrent.right;
          }
        } else if (rootCurrent.right === null) {
          if (rootParent === null) {
            this.rootNode = rootCurrent.left;
          } else if (rootCurrent === rootParent.left) {
            rootParent.left = rootCurrent.left;
          } else {
            rootParent.right = rootCurrent.left;
          }
        } else {
          let minRightNode = rootCurrent.right;
          while (minRightNode.left !== null) {
            minRightNode = minRightNode.left;
          }
          rootCurrent.data = minRightNode.data;
          this.remove(minRightNode.data);
        }
        return;
      } else if (data < rootCurrent.data) {
        rootParent = rootCurrent;
        rootCurrent = rootCurrent.left;
      } else {
        rootParent = rootCurrent;
        rootCurrent = rootCurrent.right;
      }
    }
  }

  min() {
    throw new NotImplementedError('Not implemented');
    let rootCurrent = this.rootFirst;
    while (rootCurrent !== null && rootCurrent.left !== null){
      rootCurrent = rootCurrent.left;
    }
    return (rootCurrent === null ? null : rootCurrent.data)
  }

  max() {
    throw new NotImplementedError('Not implemented');
    let rootCurrent = this.rootFirst;
    while (rootCurrent !== null && rootCurrent.right !== null){
      rootCurrent = rootCurrent.right;
    }
    return (rootCurrent === null ? null : rootCurrent.data)
  }
}

module.exports = {
  BinarySearchTree
};