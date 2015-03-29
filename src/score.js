var RtodScore = (function() {
  var score = 0;
  var elementScope;
  var element = React.createClass({
    displayName: "RtodScoreSection",
    render: function() {
      return React.createElement("div", null,
        React.createElement('span', null, 'Score: '),
        React.createElement('span', null, this.state.score)
      );
    },
    getInitialState: function() {
      elementScope = this;
      return {
        score: 0
      };
    },
  });
  return {
    increment: function() {
      score++;
      elementScope.setState({ score: score });
    },
    decrement: function() {
      score--;
      elementScope.setState({ score: score });
    },
    reset: function() {
      score = 0;
      elementScope.setState({ score: score });
    },
    getReactElement: function() {
      return element;
    }
  };
})();