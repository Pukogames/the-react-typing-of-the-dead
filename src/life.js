var RtodLife = (function() {
  var life = 3;
  var vm;
  var deadCallback = function() {};
  var element = React.createClass({
    displayName: "RtodLife",
    render: function() {
      var hearts = [],
          i = 0;
      for (i=0; i<this.state.life; i++) {
        hearts.push(React.createElement('span', {className: 'heart', key:i}));
      }
      return React.createElement("div", {className: 'life'},
        hearts
      );
    },
    getInitialState: function() {
      vm = this;
      return {
        life: 3
      };
    },
  });

  var refreshDom = function() {
    vm.setState({
      life: life
    });
  };

  return {
    decrement: function() {
      life--;
      if (life <= 0) {
        deadCallback();
      }
      refreshDom();
    },
    setDeadCallback: function(callback) {
      deadCallback = callback;
    },
    reset: function() {
      life = 3;
      refreshDom();
    },
    getReactElement: function() {
      return element;
    }
  };
})();