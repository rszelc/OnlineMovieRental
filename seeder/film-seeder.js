var Film = require('../models/film');

var mongoose = require('mongoose');

mongoose.connect("mongodb://szmelu:A2wzr8uc@ds239903.mlab.com:39903/mongobase", { useNewUrlParser: true });

var films = [
    new Film({
        img: 'https://trzynasty-schron.net/obrazki/postkultura/filmy/bladerunner-2049.jpg',
        title: 'Blade Runner 2049',
		date: 2017,
		rate: 7.6,
		ratesum: 76,
		ratelicz: 10,
		genre: 'Sci-Fi',
        description: 'Oficer policji Los Angeles trafia na ukrywaną przez lata informację, która może pogrążyć resztki społeczeństwa w chaosie. Odkrycie prowadzi go do poszukiwań Ricka Deckarda, byłego łowcy androidów, który zaginął trzydzieści lat temu.',
        price: 10
    }),
	new Film({
        img: 'http://www.jungpoland.org/sites/default/files/foto-filmoteka/wladca-pierscieni-druzyna-pierscienia.jpg',
        title: 'Władca Pierścieni: Drużyna Pierścienia',
		date: 2001,
		rate: 8.0,
		ratesum: 80,
		ratelicz: 10,
		genre: 'Fantasy',
        description: 'Podróż hobbita z Shire i jego ośmiu towarzyszy, której celem jest zniszczenie potężnego pierścienia pożądanego przez Czarnego Władcę - Saurona.',
        price: 15
    }),
	new Film({
        img: 'https://i.wpimg.pl/O/453x660/d.wpimg.pl/1272778202-1734846890/siedem.jpg',
        title: 'Siedem',
		date: 1995,
		rate: 8.3,
		ratesum: 83,
		ratelicz: 10,
		genre: 'Thriller',
        description: 'Dwóch policjantów stara się złapać seryjnego mordercę wybierającego swoje ofiary wg specjalnego "klucza".',
        price: 15
    }),
	new Film({
        img: 'https://ssl-gfx.filmweb.pl/po/08/91/500891/7354571.3.jpg',
        title: 'Incepcja',
		date: 2010,
		rate: 8.3,
		ratesum: 83,
		ratelicz: 10,
		genre: 'Thriller',
        description: 'Czasy, gdy technologia pozwala na wchodzenie w świat snów. Złodziej Cobb ma za zadanie wszczepić myśl do śpiącego umysłu.',
        price: 15
    }),
	new Film({
        img: 'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
        title: 'Matrix',
		date: 1999,
		rate: 7.5,
		ratesum: 75,
		ratelicz: 10,
		genre: 'Sci-Fi',
        description: 'Haker komputerowy Neo dowiaduje się od tajemniczych rebeliantów, że świat, w którym żyje, jest tylko obrazem przesyłanym do jego mózgu przez roboty.',
        price: 10
    }),
	new Film({
        img: 'https://ssl-gfx.filmweb.pl/po/57/47/95747/7683234.3.jpg',
        title: 'Mad Max: Na drodze gniewu',
		date: 2015,
		rate: 7.2,
		ratesum: 72,
		ratelicz: 10,
		genre: 'Sci-Fi',
        description: 'Max przyłącza się do grupy uciekinierek z Cytadeli - osady rządzonej przez Wiecznego Joe. Tyran wraz ze swoją bandą rusza za nimi w pościg.',
        price: 10
    }),
	new Film({
        img: 'https://vignette.wikia.nocookie.net/movies/images/a/ae/Nosferatu_–_symfonia_grozy.jpg/revision/latest?cb=20171210145548&path-prefix=pl',
        title: 'Nosferatu - Symfonia Grozy',
		date: 1922,
		rate: 7.7,
		ratesum: 77,
		ratelicz: 10,
		genre: 'Horror',
        description: 'Młody agent nieruchomości wyrusza w podróż, aby podpisać umowę o zakupie posiadłości. Nieświadomie udaje się do zamku wampira Nosferatu.',
        price: 10
    }),
	new Film({
        img: 'https://ssl-gfx.filmweb.pl/po/35/84/273584/7379615.6.jpg',
        title: 'Drzewo Życia',
		date: 2011,
		rate: 5.8,
		ratesum: 58,
		ratelicz: 10,
		genre: 'Dramat',
        description: 'Mimo skomplikowanych relacji z ojcem Jack ma szczęśliwe dzieciństwo. Gdy wkracza w dorosłość, staje się zagubiony i wyobcowany. ',
        price: 5
    }),
	new Film({
        img: 'http://www.jurassicworld.com/sites/default/files/2016-08/jp_cover.jpg',
        title: 'Jurassic Park',
		date: 1993,
		rate: 7.0,
		ratesum: 70,
		ratelicz: 10,
		genre: 'Sci-Fi',
        description: 'W parku ze sklonowanymi dinozaurami, tuż przed oficjalnym otwarciem, dochodzi do awarii zasilania, a przebywający w nim ludzie muszą ratować życie.',
        price: 10
    }),
	new Film({
        img: 'https://images-na.ssl-images-amazon.com/images/I/41dkwOlFjYL.jpg',
        title: 'Forrest Gump',
		date: 1994,
		rate: 8.5,
		ratesum: 85,
		ratelicz: 10,
		genre: 'Dramat',
        description: 'Historia życia Forresta, chłopca o niskim ilorazie inteligencji z niedowładem kończyn, który staje się miliarderem i bohaterem wojny w Wietnamie.',
        price: 15
    }),

];


var done = 0;
for (var i = 0; i < films.length; i++) {
    films[i].save(function(err, result) {
        done++;
        if (done === films.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}