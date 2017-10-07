var movies = [
    {
      id: 1,
      title: 'Harry Potter', 
      desc: 'film o czarodzieju',
      src: 'https://img.cinemablend.com/filter:scale/quill/b/b/f/b/3/c/bbfb3c1ed393ec47b44de8709af71c8589cfa1db.jpg?mw=600'
    },
    {
      id: 2,
      title: 'Król Lew',
      desc: 'Film o królu sawanny',
      src: 'http://1.fwcdn.pl/po/68/78/6878/6927221.3.jpg'
    },
    {
      id: 3,
      title: 'To',
      desc: 'Horror o porywającym dzieci klaunie',
      src: 'http://1.fwcdn.pl/po/11/14/571114/7783885.3.jpg'
    },
    {
      id: 4,
      title: 'Matrix',
      desc: 'Film o genialnym hakerze Neo, który pewnego dnia nawiązuje kontakt z tajemniczym Morfeuszem',
      src: 'http://1.fwcdn.pl/po/06/28/628/7685907.3.jpg'
    },
    {
      id: 5,
      title: 'Avengers',
      desc: 'Film o grupie superbohaterów łączących swe siły w walce o Nowy Jork.',
      src: 'http://1.fwcdn.pl/po/15/15/371515/7611932.3.jpg'
    }
];

var movieElements = React.createElement(MovieElements, {movies: movies});
ReactDOM.render(movieElements, document.getElementById('app'));