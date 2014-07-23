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
     
    function reset()
    {
		document.view.src = base.src;
	}
}