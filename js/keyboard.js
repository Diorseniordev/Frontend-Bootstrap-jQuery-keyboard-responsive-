
let Keyboard = window.SimpleKeyboard.default;

let myKeyboard = new Keyboard(".message", {

    onChange: input => onChangeKeyboard(input),
    onKeyPress: button => onKeyPressKeyboard(button),
  	layout: {
		default: [
		  "@ @gmail.com @aol.com @hotmail.com @yahoo.com",
		  "q w e r t y u i o p",
		  "a s d f g h j k l",
		  "{shift} z x c v b n m {backspace}"
		],
		shift: [
		  "Q W E R T Y U I O P",
		  "A S D F G H J K L",
		  "{shift} Z X C V B N M {backspace}",
		  "{numbers} {space} {ent}"
		],
		numbers: ["1 2 3", "4 5 6", "7 8 9", "{abc} 0 {backspace}"]
	},
	display: {
		"{numbers}": "123",
		"{ent}": "return",
		"{escape}": "esc ⎋",
		"{tab}": "tab ⇥",
		"{backspace}": "⌫",
		"{capslock}": "caps lock ⇪",
		"{shift}": "⇧",
		"{controlleft}": "ctrl ⌃",
		"{controlright}": "ctrl ⌃",
		"{altleft}": "alt ⌥",
		"{altright}": "alt ⌥",
		"{metaleft}": "cmd ⌘",
		"{metaright}": "cmd ⌘",
		"{abc}": "ABC"
	},
	theme: "simple-keyboard hg-theme-default hg-layout-default"
});

//myKeyboard.setInput("________________");

function onChangeKeyboard(input) {

	//input = input.substr(-10);
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)){
		$('#email_btn').show();
	}
	else {
		$('#email_btn').hide();
	}
	$('#email_msg').hide();
  document.querySelector("#message").value = input;
  //console.log("Input changed", input);
}

function onKeyPressKeyboard(button) {
  //console.log("Button pressed", button);
}

let dialPad = new Keyboard(".phone", {


	onChange: input => onChangeDialpad(input),
	onKeyPress: button => onKeyPressDialpad(button),
	layout: {
    	default: ["1 2 3", "4 5 6", "7 8 9", "+ 0 {backspace}"]
  	},

  	display:{
  		"{backspace}": "⌫"
  	},

	theme: "simple-keyboard hg-theme-default hg-layout-default"
	
});

dialPad.setInput("________________");

function onChangeDialpad(input) {

	input = input.substr(-10);
	if (/^(\+)?([0-9]{10})$/.test(input)){
	 	$('#phone_btn').show();

	}
	else {
	 	$('#phone_btn').hide();
	}

	$('#phone_msg').hide();
	
    document.querySelector("#phone").value = input;
  	console.log("Input changed", input);
}

function onKeyPressDialpad(button) {

    //if (button === "{shift}" || button === "{lock}") handleShift();
    //console.log("Button pressed", button);
}

function handleShift() {
  let currentLayout = keyboard.options.layoutName;
  let shiftToggle = currentLayout === "default" ? "shift" : "default";

  keyboard.setOptions({
    layoutName: shiftToggle
  });
}
