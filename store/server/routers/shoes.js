const { Router } = require("express");//importer router
const shoe = require("../models/shoe");

const router = Router();//now we have opportunity to use router


// Create record in MongoDB
router.post('/shoe', (request, response) => {
  const newShoe = new shoe.model(request.body);
  newShoe.save((err, shoe) => {
    return err ? response.sendStatus(500).json(err) : response.json(shoe);
  });
});
// Get all pizza records
router.get('/shoes', (request, response) => {
  pizza.model.find({}, (error, data) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(data);
  });
});

// Get a pizza by ID
router.get('/shoes/:id', (request, response) => {
  shoe.model.findById(request.params.id, (error, data) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(data);
  });
});

// Delete a pizza by ID
router.delete('/shoes/:id', (request, response) => {
  shoe.model.findByIdAndRemove(request.params.id, {}, (error, data) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(data);
  });
});

// Update a pizza by ID
router.put('/shoes/:id', (request, response) => {
  const body = request.body;
  shoe.model.findByIdAndUpdate(
    request.params.id,
    { $set: {
      "greenLaces": body.greenLaces,
      "extraSocks": body.extraSocks,
      "shoePolisher": body.shoePolisher,
      "bottomGripClay": body.bottomGripClay,
      "coloredLaces": body.coloredLaces
    } },
    (error, data) => {
      if (error) return response.sendStatus(500).json(error);
      return response.json(request.body);
    }
  );
});

module.exports = router;
