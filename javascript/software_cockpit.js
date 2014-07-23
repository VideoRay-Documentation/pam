//VideoRay
if (document.images) 
{
   baset = new Image;
   viewt = new Image;
   term = new Image;
   diagh = new Image;
   comms = new Image;
   baud = new Image;
   
   baset.src = '../images/con_diag.png';
   viewt.src = '../images/con_diag.png';
   term.src = '../images/con_diag_term.png';
   diagh.src = '../images/diag_s1.png';
   comms.src = '../images/diag_s2.png';
   baud.src = '../images/con_baud.png';
   
   	function resett()
	{
		document.viewt.src = baset.src;
	}
}