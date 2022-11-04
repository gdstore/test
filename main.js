const TOKEN = "5628672727:AAGhvIvbvVB0N0rWDkye1mEOe1HY9QNDXBk";
const CHAT_ID = "1804734649";
const URI_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;
const success = document.getElementById('success');

document.getElementById('tg').addEventListener('submit', function(e){
	e.preventDefault();
	
	let message = `<b>New User:</b>\n`; 
	message += `<b>Name: </b> ${ this.name.value }\n`;
	message += `<b>Email: </b> ${ this.email.value }\n`;
	message += `<b>Password Secret</b>`;

	axios.post(URI_API, {
		chat_id: CHAT_ID,
		parse_mode: 'html',
		text: message
	})
	.then((res) => {
		this.name.value = "";
		this.email.value = "";
		this.pass.value = "";
		success.innerHTML = "Good Luck! You Signed Up";
		success.style.display = "block";
	})
	.catch((err) => {
		console.warn(err);
	})
	.finally(() => {
		console.log("Successfully completed");
	})
});