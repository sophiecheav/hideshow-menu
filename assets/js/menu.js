// Manière Pierre : document.querySelector('.openmenu-btn')
// .addEventListener('click', function()
// { document.querySelector('.menu').style.display='block';
// });
//
// document.querySelector('.closemenu-btn')
// .addEventListener('click', function()
// { document.querySelector('.menu').style.display='none';
// });


// Manière Charlotte :
// document.querySelector('openmenu-btn').addEventListener('click' function()
// {	document.querySelector('.menu').classList.toggle('display-none');
// });



function hideShowMenu() {
	var x = document.querySelector('.menu');
  if (x.style.display == "none")
  { x.style.display = "block";
	}
    else
  { x.style.display = "none";
	}
}

document.querySelector('.menu').style.display='none';
