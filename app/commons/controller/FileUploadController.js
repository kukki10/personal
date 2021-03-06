const fs = require('fs');
const AWS = require('aws-sdk');

const s3 = new AWS.S3({
    accessKeyId: process.env.accessKey,
    secretAccessKey: process.env.secretKey
});

const fileName = '/home/kukki/nodeBoilerPlate/node-boilerplate/FINAL450.xlsx';


const uploadFile = () => {
  fs.readFile(fileName, (err, data) => {
     if (err) throw err;
     const params = {
         Bucket: 'ghanghasbucket',
         Key: 'Final450.csv',
         Body: JSON.stringify(data, null, 2)
     };
     s3.upload(params, function(s3Err, data) {
         if (s3Err) throw s3Err
         console.log(`File uploaded successfully at ${data.Location}`)
     });
  });
};


module.exports = uploadFile;
