//VideoRay
if(document.images){
	base = new Image;
	view = new Image;
	term = new Image;
	
	base.src = '../images/con_diag.png';
	view.src = '../images/con_diag.png';
	term.src = '../images/con_diag_term.png';
	
	function reset(){
		document.view.src = base.src;
	}
}