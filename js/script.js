const navlinkEls = document.querySelectorAll('.nav-link');

navlinkEls.forEach(navlinkEl => { 
	navlinkEl.addEventListener('click',function(){
	 document.querySelector('.active')?.classlist.remove('active');
	this.classlist.add('active');
 });
});