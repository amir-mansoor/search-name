// Get input element
	let filter = document.getElementById('filterInput');

	filterInput.addEventListener("keyup", filterNames);
	function filterNames() {
		let filterValue = document.getElementById('filterInput').value.toUpperCase();
		// console.log(filterValue);
		let ul = document.getElementById("names");
		let li = ul.querySelectorAll("li.collection-item");
		for(let i = 0; i < li.length; i++) {
			let a = li[i].getElementsByTagName('a')[0];
			if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
				li[i].style.display = '';
			} else {
				li[i].style.display = "none";
			}
		}
	}

	//bottom color added 

	function bottomGray() {
		filter.style.borderBottom = "2px solid gray";
		filter.style.transition = "0.5s";
	}
	filter.addEventListener("focus", bottomGray);

	// bottom color removed

	function bottomBlack() {
		filter.style.borderBottom = "2px solid black";
		filter.style.transition = "0.5s";
	}
	filter.addEventListener("blur", bottomBlack);