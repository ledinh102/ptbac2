let calculateBtn = document.querySelector(".calculate-btn")
let errorMessage = document.querySelector(".answer")
let clearBtn = document.querySelector(".clear-btn")
let a, b, c

let txt1, txt2

function solveQuadraticEquation(a, b, c) {
	let x
	let x1, x2
	let delta = b * b - 4 * a * c
	// Phuong trinh co vo so nghiem
	if (b == 0 && c == 0) {
		console.log("Vo so nghiem")
	} else {
		if (a == 0) {
			// Giai phuong trinh bac 1 (a==0)
			if (b == 0 && c != 0) {
				console.log("Vo nghiem")
			} else {
				x = -c / b
				console.log(x.toFixed(2))
			}
		} else {
			// Giai phuong trinh bac 2 (a!=0)
			if (delta < 0) {
				console.log("Vo nghiem")
			} else if (delta == 0) {
				x = -b / (2 * a)
				console.log(x.toFixed(2))
			} else {
				x1 = (-b - sqrt(delta)) / (2 * a)
				x2 = (-b + sqrt(delta)) / (2 * a)
				console.log(x1.toFixed(2), x2.toFixed(2))
			}
		}
	}
}

clearBtn.onclick = function () {
	let input = document.querySelectorAll("input")
	for (let i = 0; i < input.length; i++) {
		input[i].value = ""
	}
}

calculateBtn.onclick = function () {
	let input = document.querySelectorAll("input")

	let isEmpty = false
	let isNotNumber = false

	a = Number(input[0].value)
	b = Number(input[1].value)
	c = Number(input[2].value)
	txt1 = ""
	txt2 = ""
	for (i = 0; i < input.length; i++) {
		if (input[i].value === "") {
			isEmpty = true
			if (txt1 !== "") {
				txt1 += ", " + input[i].id
			} else {
				txt1 += "Vui lòng nhập " + input[i].id
			}
		}
		if (isNaN(Number(input[i].value))) {
			isNotNumber = true
			if (txt2 !== "") {
				txt2 += ", " + input[i].id
			} else {
				txt2 += "Vui lòng nhập số ở hệ số " + input[i].id
			}
		}
	}
	if (isEmpty) {
		alert(txt1)
		// errorMessage.innerHTML = txt;
	} else if (isNotNumber) {
		alert(txt2)
	} else {
		solveQuadraticEquation(a,b,c)
	}
}
