//VideoRay
if (document.images) 
{
   base = new Image
   view = new Image;
   enumerate = new Image;
   gid = new Image;
   rs = new Image;
   consav = new Image;
   condl = new Image;
   
   base.src = '../images/con_view.png';
   view.src = '../images/con_view.png';
   enumerate.src = '../images/con_ques.png';
   gid.src = '../images/con_id.png';
   rs.src = '../images/con_rs.png';
   consav.src = '../images/con_save.png';
   condl.src = '../images/con_dl.png';
   
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
   
   
   
    function reset()
    {
		document.view.src = base.src;
	}
	function resett()
	{
		document.viewt.src = baset.src;
	}
}
