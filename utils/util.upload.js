const multer = require('multer')
const { extname, resolve } = require('path')

const diskStorage = multer.diskStorage({
  destination: (req, file, done) => {
    if (file) {
      return done(null, resolve(process.cwd(), 'public/images'))
    }
  },
  filename: (req, file, done) => {
    const imagePattern = /(jp?g|png|gif|svg)/gi
    const matchFile = extname(file.originalname).replace('.', '')
    if (imagePattern.test(matchFile)) {
    	req.avatar = file.originalname;
      return done(null, file.originalname)
    }
  }
})

const fileUpload = multer({
  storage: diskStorage,
  limits: 1000000
})

module.exports = { fileUpload }
