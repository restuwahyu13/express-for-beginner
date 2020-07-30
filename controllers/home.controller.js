module.exports.homeController = {
  home: (req, res, next) => {
    res.render('home_view', { title: 'Home Page' })
  }
}
