import express from 'express';
var router = express.Router();

/* GET home page. */
router.get('/',  (request, response, next)=> {
  response.render('index', { title: 'Express' });
});



export default router;