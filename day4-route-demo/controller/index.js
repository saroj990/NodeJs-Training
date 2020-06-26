module.exports = {
  getDate: function (req, res) {
    return res.render('view', { date: getCurrentTime() });
  },
};

function getCurrentTime() {
  return new Date();
}
