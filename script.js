var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'Film o czarodzieju',
    src: 'images/Harry_Potter_i_więzień_Azkabanu.jpg'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    src: 'images/krol_lew.jpg'
  },
  {
    id: 3,
    title: 'Nietykalni',
    desc: 'Sparaliżowany milioner zatrudnia do opieki młodego chłopaka.',
    src:'images/nietykalni.jpg'
  },
  {
    id: 4,
    title: 'Forrest Gump',
    desc: 'Historia życia Forresta Gumpa',
    src:'images/forrest_gump.jpg'
  },
  {
    id: 5,
    title: "Śniadanie u Tiffany'ego ",
    desc: 'Film o pisarzu, który wprowadza się do nowojorskiej kamienicy.',
    src: 'images/Sniadanie-u-Tiffaniego.png'
  },
  {
    id: 6,
    title: 'Interstellar',
    desc: 'Film o grupie naukowców, którzy odkrywaja tunel czasoprzestrzenny.',
    src:'images/interstellar.jpg'
  }
];

var GalleryItem = React.createClass({
  propTypes: {
    movies: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
      React.createElement('div', {},
        //React.createElement('h2', {}, this.props.movies.title),
        React.createElement('img', {src: this.props.movies.src})
      )
    )
  },
});

var moviesElements = movies.map(function(movie) {
  return React.createElement('li', {key: movie.id},
      React.createElement('h2', {}, movie.title),
      React.createElement('p', {}, movie.desc),
      React.createElement(GalleryItem, {movies: movie})
    );
});

var element =
  React.createElement('div', {}, 
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements),
       
  );

  ReactDOM.render(element, document.getElementById('app'));