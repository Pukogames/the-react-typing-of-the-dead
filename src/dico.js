var RtodDico = (function() {
  var dico = ['aim', 'for', 'delivery', 'gentleman', 'roger'];
  var getRandomInt = function(max, min) {
    min = min || 0;
    return Math.floor((Math.random() * (max - min)) + min);
  };
  return {
    getRandomWord: function() {
      return dico[getRandomInt(0, dico.length)];
    }
  }
})();