function makeAjaxRequest(endpoint, success) {
	fetch(endpoint)
		.then(res => res.json())
		.then(json => success(json));
	// .then(success) is same as above;
}

function generateDataSet(labels, data) {
	// Your code goes here
}

function getHours(result) {
	// Your code goes here
}

function getFahrenheits(result) {
	// Your code goes here
}
