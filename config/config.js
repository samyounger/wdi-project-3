module.exports = {
  port: process.env.PORT || 3000,
  // db: process.env.MONGOLAB_URI || 'mongodb://localhost/novelistdb',
  db: process.env.MONGOLAB_URI || 'mongodb://heroku_gktrp6lq:rscimcadkfrsc2prf4e8sou3tf@ds049496.mlab.com:49496/heroku_gktrp6lq',
  secret: process.env.SECRET || "novelists super secrets"
};
