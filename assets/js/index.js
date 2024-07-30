function sendMail(){
	var params = {
		name: document.getElementById("name").value,
		email:document.getElementById("email").value,
		number:document.getElementById("number").value,
		subject:document.getElementById("subject").value,
		message:document.getElementById("message").value,
	};
	
const serviceID = "service_8gp2vw3"
const templateID = "template_bove2sk"

emailjs.send(serviceID, templateID, params)
.then(
	res=>{
		document.getElementById("name").value="";
		document.getElementById("email").value="";
		document.getElementById("number").value="";
		document.getElementById("subject").value="";
		document.getElementById("message").value="";
		console.log(res);
		alert("Thank you, your message is sent successfully. If we don't reach back, please contact us")
	}
	).catch((err)=>console.log(err));
}
		
		