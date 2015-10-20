export function filterTree(tree, seachString, accesor, childrenAccesor){
	if (!tree) return;
	if (seachString === '') return tree;
	let result = [];
	for (var i = 0; i < tree.length; i++) {
		if (accesor(tree[i]).indexOf(seachString) != -1) {
			result.push(tree[i]);
		} else {
			let childrenResult = filterTree(childrenAccesor(tree[i]), seachString, accesor, childrenAccesor);
			if (childrenResult && childrenResult.length) {
				result.push({
					...tree[i],
					children: childrenResult
				});
			}
		}
	};
	return result;
}