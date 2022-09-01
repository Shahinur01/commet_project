const express= require('express');
const { homePageController, shopPage3Col,shopPageSingle } = require('../controller/homePageController');

const routes=express.Router()


routes.get('/',homePageController);
routes.get('/shop',shopPage3Col);
routes.get('/shopSingle',shopPageSingle);




module.exports = routes
