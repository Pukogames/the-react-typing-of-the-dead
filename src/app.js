var RtodApp = React.createClass({
  displayName: 'RtodApp',
  getInitialState: function() {
    return {
      items: ['castle', 'sweeties', 'cat'],
      aimItem: '',
      currentTyping: ''
    };
  },
  onChange: function(e) {
    this.setState({
      currentTyping: e.target.value
    });
  },
  render: function() {
    return (
      React.createElement('div', {className: 'RtodApp'},
        React.createElement('h1', null, 'The React Type of the Dead'),
        React.createElement('input', {
          onChange: this.onChange
        }),
        React.createElement('div', {
          dangerouslySetInnerHTML: {
            __html: this.state.currentTyping
          }
        })
      )
    );
  }
});
React.render(
  React.createElement(RtodApp, null),
  document.getElementById('content')
);