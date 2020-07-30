exports.logoutController = {
  logout: (req, res, next) => {
    /**
     * @description remove cookie after logout
     */
    if (req.cookies.token) {
      res.clearCookie('token')
      res.clearCookie('express-session')
      res.redirect('/user/login')
    }
  }
}
