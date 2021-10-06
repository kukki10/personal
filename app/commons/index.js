'use strict';

let express = require('express');
const fileUpload = require('express-fileupload');
let router = express.Router();
let TestController = require('./controller/TestController');
let FileUploadController = require('./controller/FileUploadController');

router.get('/human', TestController.getHuman);
router.post('/human', TestController.createHuman);

router.post('/file', FileUploadController);


module.exports = router;
