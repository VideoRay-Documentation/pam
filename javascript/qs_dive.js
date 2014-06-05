//videoray
if(document.images){
	base = new Image;
	view = new Image;
	diagh = new Image;
	comms = new Image;
	
	base.src = '../images/con_diag.png';
	view.src = '../images/con_diag.png';
	diagh.src = '../images/diag_s1.png';
	comms.src = '../images/diag_s2.png';
	
	function reset(){
		document.view.src =  base.src;
	}
}