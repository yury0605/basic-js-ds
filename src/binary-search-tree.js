const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/


class BinarySearchTree {

  constructor() {
    this.rootFirst = null;
  }


  root() {
    
    return this.rootFirst;
  }

  add(data) {
      const newNode = {data, left: null, right: null}; //создаем узел для добавления

    if (this.rootFirst === null) {
      this.rootFirst = newNode;
      return;
    }
  
    let rootСurrent = this.rootFirst;
  
    while (true) {
      if (data === rootСurrent.data) {
        return; 
      } else if (data < rootСurrent.data) {
        if (rootСurrent.left === null) {
          rootСurrent.left = newNode;
          return;
        }
        rootСurrent = rootСurrent.left;
      } else {
        if (rootСurrent.right === null) {
          rootСurrent.right = newNode;
          return;
        }
        rootСurrent = rootСurrent.right;
      }
    }
}

  has(data) {
    
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

  remove(/*data*/) {
    throw new NotImplementedError('Not implemented');
  }

  min() {
   
    let rootCurrent = this.rootFirst;
    while (rootCurrent !== null && rootCurrent.left !== null){
      rootCurrent = rootCurrent.left;
    }
    return (rootCurrent === null ? null : rootCurrent.data)
  }

  max() {
    
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




