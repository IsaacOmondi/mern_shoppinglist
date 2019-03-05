const express = require("express");
const router = express.Router();

// Item model
const Item = require("../../models/Item");


/* 
@route  GET api/items 
@desc   Get All Items
@access Public
*/
router.get("/", (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items));
});

/* 
@route  POST api/items 
@desc   Create an Item
@access Public
*/
router.post("/", (req, res) => {
  const newItem = new Item({
    name: req.body.name
  });

  newItem.save().then(item => res.status(201).json(item));
});

/* 
@route  GET api/items/:id 
@desc   Get an Item by ID
@access Public
*/
router.get("/:id", (req, res) => {
    Item.findById(req.params.id)
        .then(item => res.status(200).json(item))
        .catch(err => res.status(404).json({success: false}))
  })

/* 
@route  PUT api/items/:id 
@desc   Update an Item
@access Public
*/
router.put("/:id", (req, res) => {
    Item.findById(req.params.id, function(err, item) {
        if (err)
            res.send(err)
        
        item.name = req.body.name;
        item.save(function(err){
            if (err)
                res.send(err);

            res.status(200).json({success: true})
        })
    })
        
  })

/* 
@route  DELETE api/items/:id 
@desc   Delete an Item
@access Public
*/
router.delete("/:id", (req, res) => {
    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.status(204).json({success: true})))
        .catch(err => res.status(404).json({success: false}))
  })
module.exports = router;
