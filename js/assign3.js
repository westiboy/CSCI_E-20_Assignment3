//Flashacard view and tester

$(document).ready(function(){
	//Array of known school names
	var schArray = ["Harvard Extension School", "School for Engineering and Applied Sciences", "Graduate Schol of Education"];
	var crestArray = ["https://en.wikipedia.org/wiki/Harvard_Extension_School#/media/File:ExtensionFlag.png", "https://en.wikipedia.org/wiki/Harvard_John_A._Paulson_School_of_Engineering_and_Applied_Sciences#/media/File:HSEAS_Seal_New.png", "https://en.wikipedia.org/wiki/Harvard_Graduate_School_of_Education#/media/File:Harvard_shield-Education.png"];	

	$('#school').change(function(){
		var school = $('#school').val();
		var schimg;
		switch(school) {
			case 'HES':
				schimg="https://upload.wikimedia.org/wikipedia/en/8/89/ExtensionFlag.png";
				break;
			case 'SEAS':
				schimg="https://upload.wikimedia.org/wikipedia/en/f/f3/HSEAS_Seal_New.png";
				break;
			case 'GSE':
				schimg="https://upload.wikimedia.org/wikipedia/en/4/4a/Harvard_shield-Education.png";
				break;
			default:
				schimg="http://upload.wikimedia.org/wikipedia/en/thumb/3/3a/Harvard_Wreath_Logo_1.svg/1051px-Harvard_Wreath_Logo_1.svg.png";		
		} //end switch
		$('#schimg').attr("src",schimg);
	}); //end school focusout
	

}); //end ready














