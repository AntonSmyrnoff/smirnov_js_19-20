//1. HTML:
/*
				<div class="carousel">	
					<div class="carousel-arrow-left"><span>Влево</span></div>
					<div class="carousel-hider">
						<ul class="carousel-list">
							<li class="carousel-element"><img><p>Описание 1</p></li>
							<li class="carousel-element"><img><p>Описание 2</p></li>
							.
							.
							.
							.
							<li class="carousel-element"><img><p>Описание N-1</p></li>
							<li class="carousel-element"><img><p>Описание N</p></li>
						</ul>
					</div>
					<div class="carousel-arrow-right"><span>Вправо</span></div>
				</div>
*/

// 2. CSS:
/*
				.carousel-hider {
				    overflow: hidden;
				    float: left;
				}
				 
				.carousel-list {    
				    list-style: none;
				    padding: 0;
				    position: relative;
				    background-color: blue;
				}
				 
				.carousel-element {
				    display: block;
				    float: left;
				}
				 
				.carousel-arrow-left, .carousel-arrow-right {
				    float: left;
				    display: block;
				    border: 1px solid grey;
				    background-color: lightgrey;
				    padding: 5px;
				    margin-top: 50px;
				}

				.carousel-arrow-left:hover, .carousel-arrow-right:hover {
				    cursor: pointer;
				    background-color: grey;
				}
				 
				.carousel-arrow-left {
				    margin-right: 25px;
				}
				 
				.carousel-arrow-right {
				    margin-left: 25px;
				}
*/

// 3. JS (значения полей задаются вручную):

$(document).ready(function () {
    $('.carousel').carouselPlugin({
        carouselWidth: 1000, // ширина видимой части карусели в пикселях
        itemNumberInWindow: 5, // количество снимков в видимой части карусели
        itemMarginRight: 25, // боковые отступы между снимками в пикселях
        animateDuration: 500 //время перелистывания в мс
    })
});


$(document).ready(function () {
	
	var profile = {
		number: 1,
		name: 'Смирнов Антон Сергеевич',
		photo: 'img/face.jpg',
		about: 'Инженер-эксперт в одной очень важной организации при очень важном строительном институте',
		reasonField: {
				fieldHead: 'Хочу учить FrontEnd, потому что:',
				reasonVariants: ['Хотелось бы, чтобы платили больше', 
								 'Хотелось бы чего-то более интересного', 
								 'Плоды трудов очень важной организации не сильно востребованы за пределами очень узкой сферы деятельности этой организации',
								 'Еще какая-то причина'
								]
		},
		contacts: [ {header: 'Мой контактный телефон:',
					 paragraphe: '+380509836759'},
				    {header: 'Мой профиль в соцсетях:',
				     paragraphe: '<a href="https://www.facebook.com/profile.php?id=100001530274310">Facebook</a>'},
				    {header: 'Мой фидбек:',
				     paragraphe: 'Забор, конечно, могу построить... Но надеюсь, что в скором будущем буду делать что-то поинтереснее.'},
				]
	};

	var template = $('#tmpl').html();
	var content = tmpl(template, profile);
	
	$('#template').append(content);
});



//Для эксперимента добавим второй профиль
$(document).ready(function () {
	
	var profile = {
		number: 2,
		name: 'Иванов Иван Иванович',
		photo: 'img/face_2.jpg',
		about: 'Студент заборостроительного института',
		reasonField: {
				fieldHead: 'Хочу учить FrontEnd, потому что:',
				reasonVariants: ['Заборы строить не интересно', 
								 'Платят мало', 
								 'Приходится работать по ночам'
								]
		},
		contacts: [ {header: 'Мой контактный телефон:',
					 paragraphe: '+380222222222'},
				    {header: 'Мой профиль в соцсетях:',
				     paragraphe: '<a href="https://www.vk.com">ВКонтакте</a>'},
				    {header: 'Мой фидбек:',
				     paragraphe: 'Если нужно, могу построить вам забор'},
				]
	};

	var template = $('#tmpl').html();
	var content = tmpl(template, profile);
	
	$('#template').append(content);
});