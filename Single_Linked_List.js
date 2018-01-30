console.log("hiiiii");
function Node(data){
	this.data = data;
	this.next = null;
}

function singleLinkedList(){
	this.length=0;
	this.head = null;
}
singleLinkedList.prototype.add= function(value) {
	// body...
	var node = new Node(value);
	var currentnNode = this.head;
	if(!currentnNode){
		this.head = node;
		this.length++;
		return this.head;
	}
	while(currentnNode.next){
		currentnNode = currentnNode.next;
		this.length++
	}
	currentnNode.next = node;
	this.length++;
	return currentnNode;
};

singleLinkedList.prototype.remove = function() {
	// body...
	currentnNode = this.head;
	if(!currentnNode){
		return "cant remove element";
	}
	while(currentnNode.next){
		var before = currentnNode;
		currentnNode = currentnNode.next;
	}
	before.next = null;
	this.length--;

};
