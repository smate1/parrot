document.addEventListener('DOMContentLoaded', function () {
	document.getElementById('burger').addEventListener('click', function () {
		document.querySelector('header').classList.toggle('open')
	})

	document.getElementById('search-btn').addEventListener('click', function () {
		document.querySelector('.stock__exchange-form').classList.toggle('open')
	})
})
