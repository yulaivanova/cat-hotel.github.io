ymaps.ready(function(){var e=new ymaps.Map("map",{center:[59.938635,30.323118],zoom:17},{searchControlProvider:"yandex#search"}),a=(ymaps.templateLayoutFactory.createClass('<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'),new ymaps.Placemark(e.getCenter(),{hintContent:"Cat hotel",balloonContent:"ул. Большая Конюшенная, 19/8"},{iconLayout:"default#image",iconImageHref:"../img/map_marker.png",iconImageSize:[57,79]}));e.geoObjects.add(a)});