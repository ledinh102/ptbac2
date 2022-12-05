let calculateBtn = document.querySelector(".calculate-btn");
let errorMessage = document.querySelector(".answer");
let txt;
calculateBtn.onclick = function () {
	let input = document.querySelectorAll("input");
	let isEmpty = false;
	txt = "";
	for (i = 0; i < input.length; i++) {
		if (input[i].value === "") {
			isEmpty = true;
			if (txt !== "") {
				txt += ", " + input[i].id;
			} else {
				txt += "Vui lòng nhập " + input[i].id;
			}
		}
	}
	if (isEmpty) {
		alert(txt);
		// errorMessage.innerHTML = txt;
	}
};

// let x;
// let x1, x2;
// let delta = b * b - 4 * a * c;
// if (b == 0 && c == 0) {
// 	// Phuong trinh co vo so nghiem
// 	console.log("Vo so nghiem");
// } else {
// 	if (a == 0) {
// 		// Giai phuong trinh bac 1 (a==0)
// 		if (b == 0 && c != 0) {
// 			console.log("Vo nghiem");
// 		} else {
//             x = -c / b
// 			console.log(x.toFixed(2));
// 		}
// 	} else {
// 		// Giai phuong trinh bac 2 (a!=0)
// 		if (delta < 0) {
// 			console.log("Vo nghiem");
// 		} else if (delta == 0) {
//             x = -b / (2 * a)
// 			console.log(x.toFixed(2));
// 		} else {
// 			x1 = (-b - sqrt(delta)) / (2 * a);
// 			x2 = (-b + sqrt(delta)) / (2 * a);
// 			console.log(x1.toFixed(2), x2.toFixed(2));
// 		}
// 	}
// }
