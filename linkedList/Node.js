class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  setNextNode(node) {
    if (!node instanceof Node) {
      throw new Error("Next node must be the member of the Node class.")
    }
    this.next = node;
  }

  getNextNode() {
    return this.next;
  }
}

module.exports = Node;