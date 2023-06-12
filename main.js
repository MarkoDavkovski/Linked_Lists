const Node = (value = null, nextNode = null) => {
	return { value, nextNode };
};

const LinkedList = (head = null) => {
	let tail = null;
	let length = 0;

	const append = (value) => {
		if (head === null) {
			head = Node(value);
			tail = head;
		} else {
			tail.nextNode = Node(value);
			tail = tail.nextNode;
		}
		length++;
	};

	const prepend = (value) => {
		if (head === null) {
			head = Node(value);
			tail = head;
		} else {
			let temp = head;
			head = Node(value);
			head.nextNode = temp;
		}
		length++;
	};

	const at = (index) => {
		let counter = 0;
		if (index == 0) return { head };
		else if (index == length) return { tail };
		else {
			let node = head;
			while (counter < index) {
				node = node.nextNode;
				counter++;
				if (node === null) return `invalid index ${index}`;
			}

			return node.value;
		}
	};

	const pop = () => {
		let curr = head;
		let prev = head;
		while (curr.nextNode !== null) {
			prev = curr;
			curr = curr.nextNode;
		}
		prev.nextNode = null;
		tail = prev;
		length--;
	};

	const contains = (value) => {
		let node = head;
		while (node !== null) {
			if (node.value === value) return true;
			node = node.nextNode;
		}
		return false;
	};

	const find = (value) => {
		let node = head;
		let index = 0;
		while (node.nextNode !== null) {
			if (node.value === value)
				return `Index of the node that has a value of "${value}" is [${index}]`;
			node = node.nextNode;
		}
		return null;
	};

	const toString = () => {
		let node = head;
		let res = '';
		while (node !== null) {
			res += `(${node.value}) -> `;
			node = node.nextNode;
		}
		res += 'null';
		return res;
	};

	const size = () => {
		return length;
	};

	return { prepend, append, at, contains, pop, find, toString, size };
};

const linkedList = LinkedList();
linkedList.append('a');
linkedList.append('b');
linkedList.append('c');
linkedList.append('d');
linkedList.append('e');
console.log(
	`After appending elements : \n String : ${linkedList.toString()} \n size : ${linkedList.size()}`
);

linkedList.prepend('1');
console.log(
	`After prepending one element : \n String : ${linkedList.toString()} \n size : ${linkedList.size()}`
);

linkedList.pop();
console.log(
	`After popping one element : \n String : ${linkedList.toString()} \n size : ${linkedList.size()}`
);

console.log(`Element with the index of [1] is : ${linkedList.at(1)}`);

console.log(
	`Does the list contain the 'd' element? ${linkedList.contains('d')} `
);
