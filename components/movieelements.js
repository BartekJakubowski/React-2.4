var MovieElements = React.createClass({
  propTypes: {
    movies: React.PropTypes.array.isRequired
  },

  render: function() {
    return (
      React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement('ul', {},
          this.props.movies.map(function(movie) {
            return React.createElement(Movie, {key: movie.id, movie: movie});
          })
        )
      )
    )
  }
});