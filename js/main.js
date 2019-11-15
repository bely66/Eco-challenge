
var objPeople = [
	{ // Object @ 0 index
		username: "marium",
		password: "infj"
	},
	{ // Object @ 1 index
		username: "mohamed",
		password: "entj"
	},
	{ // Object @ 2 index
		username: "mariem",
		password: "enfp"
	}

]

function getInfo() {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value

	if (username=="" || password="") {
		alert("those fields are required ")
	}
	else {


	for(var i = 0; i < objPeople.length; i++) {
		// check is user input matches username and password of a current index of the objPeople array
		if(username == objPeople[i].username && password == objPeople[i].password) {
			console.log(username + " is logged in!!!")
			// stop the function if this is found to be true
			return
		}
	}
}
	console.log("incorrect username or password")
}
