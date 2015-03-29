var RtodScore = React.createClass({displayName: "RtodScoreSection",
  score: 0,
  render: function() {
    return React.createElement("div", null, 
      React.createElement('span', null, 'Score: '),
      React.createElement('span', null, this.score)
    );
  }
});