var RtodApp = React.createClass({displayName: 'RtodApp',
  word: RtodDico.getRandomWord(),
  getInitialState: function() {
    var vm = this;
    RtodDico.setTimeoutCallback(function() {
      vm.word = RtodDico.getRandomWord();
      vm.setState({
        aim: vm.word,
        remaining: vm.word
      });
      RtodLife.decrement();
    });
    RtodLife.setDeadCallback(function() {
      RtodDico.reset();
      vm.word = "";
      vm.setState({
        aim: "",
        remaining: ""
      });
    });
    return {
      aim: this.word,
      remaining: this.word
    };
  },
  onKeyDown: function(e) {
    if (e.target.value.length === 0) {
      return;
    }
    if (e.target.value.length > 0 && this.word.indexOf(e.target.value) === 0) {
      RtodScore.increment();
      this.word = this.word.substring(e.target.value.length, this.word.length);
      this.setState({
        remaining: this.word
      });
      if (this.word.length === 0) {
        RtodScore.wordComplete();
        this.word = RtodDico.getRandomWord();
        this.setState({
          aim: this.word,
          remaining: this.word
        });
      }
    }
    else {
      RtodScore.decrement();
    }
    e.target.value = '';
  },
  render: function() {
    var aimDiv = "";
    if (this.state.aim.length > 0) {
      aimDiv = React.createElement('div', {className: 'aim'},
        React.createElement('div', {
          dangerouslySetInnerHTML: {
            __html: this.state.aim
          }
        }),
        React.createElement('div', {
          className: 'remaining',
          dangerouslySetInnerHTML: {
            __html: this.state.remaining
          }
        })
      );
    }
    var deadDiv = "";
    if (this.state.aim.length === 0) {
      aimDiv = React.createElement('div', {className: 'dead'}, "You're dead");
    }
    return (
      React.createElement('div', {className: 'RtodApp'},
        React.createElement('h1', null, 'The React Typing of the Dead'),
        React.createElement(RtodScore.getReactElement()),
        aimDiv,
        deadDiv,
        React.createElement('input', {
          onKeyUp: this.onKeyDown,
          autoFocus: true
        }),
        React.createElement(RtodLife.getReactElement())
      )
    );
  }
});

React.render(
  React.createElement(RtodApp, null),
  document.getElementById('content')
);