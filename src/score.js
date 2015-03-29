var RtodScore = (function() {
  var score = 0;
  var combo = 1;
  var elementScope;
  var element = React.createClass({
    displayName: "RtodScoreSection",
    render: function() {
      return React.createElement("div", null,
        React.createElement('span', null, 'Score: '),
        React.createElement('span', null, this.state.score),
        React.createElement('span', null,
          React.createElement('span', null, 'x'),
          React.createElement('span', null, this.state.combo)
        )
      );
    },
    getInitialState: function() {
      elementScope = this;
      return {
        score: 0,
        combo: 1
      };
    },
  });

  var refreshDom = function() {
    elementScope.setState({
      score: score,
      combo: combo
    });
  };

  return {
    increment: function() {
      combo += 1;
      refreshDom();
    },
    decrement: function() {
      combo = 1;
      refreshDom();
    },
    wordComplete: function() {
      score += 10 * combo;
      combo = 1;
      refreshDom();
    },
    reset: function() {
      score = 0;
      combo = 1;
      refreshDom();
    },
    getReactElement: function() {
      return element;
    }
  };
})();