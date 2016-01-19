module.exports = function() {
  return function *(next) {
    try {
      yield next;
    } catch (err) {
      console.log(err);
    }
  }
};
