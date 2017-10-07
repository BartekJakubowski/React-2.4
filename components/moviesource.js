var MovieSource = React.createClass({
  propTypes: {
    image: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
      React.createElement('img', {src:this.props.src})
    )
  }
});