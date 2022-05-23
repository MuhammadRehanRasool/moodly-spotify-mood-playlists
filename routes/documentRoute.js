const express = require("express");
const router = express.Router();
const documentModel = require("../models/documentModel");
const uuid4 = require("uuid4");
const path = require("path");

// router.post("/upload", function (request, responce) {
//   let uploadPath;
//   let allPaths = [];
//   let id = uuid4();
//   if (!request.files || Object.keys(request.files).length === 0) {
//     return responce.status(400).send("No files were uploaded.");
//   }
//   array = request.files;
//   [array.f0, array.f1, array.f2, array.f3, array.f4, array.f5, array.f6].map(
//     (one, i) => {
//       uploadPath =
//         __dirname +
//         "/../client/build/files/" +
//         id +
//         "" +
//         i +
//         path.extname(one.name);
//       allPaths.push(id + "" + i + path.extname(one.name));
//       one.mv(uploadPath, function (err) {
//         if (err) return responce.status(500).send(err);
//       });
//     }
//   );

//   let documentModelObject = new documentModel({
//     address: allPaths,
//   });
//   documentModelObject
//     .save()
//     .then((callbackData) => {
//       responce.json(callbackData);
//     })
//     .catch((error) => {
//       responce.json(error);
//     });
// });

router.post("/insert", (request, responce) => {
  let documentModelObject = new documentModel({
    address: request.body.address,
  });
  documentModelObject
    .save()
    .then((callbackData) => {
      responce.json(callbackData);
    })
    .catch((error) => {
      responce.json(error);
    });
});

router.get("/view", (request, responce) => {
  documentModel.find((error, data) => {
    if (error) {
      console.log(error);
    } else {
      responce.json(data);
    }
  });
});

router.get("/view/:id", (request, responce) => {
  documentModel.findById(request.params.id, (error, data) => {
    if (error) {
      console.log(error);
    } else {
      responce.json(data);
    }
  });
});

router.post("/delete/:id", (request, responce) => {
  documentModel.findByIdAndDelete(request.params.id, (error, data) => {
    if (error) {
      console.log(error);
    } else {
      responce.json(data);
    }
  });
});

router.post("/update/:id", (request, responce) => {
  documentModel.findByIdAndUpdate(
    request.params.id,
    {
      address: request.body.address,
    },
    { new: true },
    (error, data) => {
      if (error) {
        console.log(error);
      } else {
        responce.json(data);
      }
    }
  );
});

module.exports = router;
