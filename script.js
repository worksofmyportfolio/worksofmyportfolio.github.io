var lang = document.getElementsByClassName('lang')[0];
var lang_list = document.getElementsByClassName('lang_list')[0];
var en = document.getElementById('en');
var ru = document.getElementById('ru');

function lang_list_click() {
	var icon = document.getElementsByTagName('i')[1];
	var lang_inner = document.getElementById('lang_inner');
	lang.onclick = function(){
		if(lang_list.style.display != 'block'){
           lang_list.style.display = 'block';
           icon.setAttribute('class', 'fa fa-sort-asc');

		}
		else{
			lang_list.style.display = 'none';
			icon.setAttribute('class', 'fa fa-sort-desc');
		}
	}

	en.onclick = function(){
		lang_inner.innerHTML = 'English';
		lang_list.style.display = 'none';
		icon.setAttribute('class', 'fa fa-sort-desc');
	}

	ru.onclick = function(){
		lang_inner.innerHTML = 'Russian';
		lang_list.style.display = 'none';
		icon.setAttribute('class', 'fa fa-sort-desc');
	}
}

lang_list_click();