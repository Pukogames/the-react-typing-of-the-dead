var RtodScore = (function() {
  var score = 0;
  return {
    increment: function() {
      score++;
    },
    decrement: function() {
      score--;
    },
    reset: function() {
      score = 0;
    },
    getReactElement: function() {
      return React.createClass({
        displayName: "RtodScoreSection",
        render: function() {
          return React.createElement("div", null,
            React.createElement('span', null, 'Score: '),
            React.createElement('span', null, score)
          );
        }
      });
    }
  };
})();