const express = require("express")
const path = require("path")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
mongoose.connect('mongodb://localhost:27017/tarot-cards', {useNewUrlParser: true});
const Card = require('./models/card')

const App = express()
const router = express.Router()

App.use(bodyParser.urlencoded({ extended: true }));
App.use(bodyParser.json());

// localhost:3000/api/tarotcards
router.use((req, res, next) => {
    console.log("yep, its working")
    next()
})

// localhost:3000/api/
router.get('/',(req, res) => {
    res.json({ message: 'hooray! welcome to our api!' });
})

// localhost:3000/api/card/
router.route('/card')
.post((req, res) => {

  const card = new Card();
  card.type = req.body.type;
  card.name_short = req.body.name_short;
  card.name = req.body.name;
  card.value = req.body.value;
  card.value_int = req.body.value_int;
  card.meaning_up = req.body.meaning_up;
  card.meaning_rev = req.body.meaning_rev;
  card.desc = req.body.desc;

  card.save((err) => {
    if (err)
      res.send(err);


    res.json({ message: 'Card created!' });
  })
})
.get((req, res) => {
  Card.find((err, cards) => {
    if(err){
      res.send(err);
    } else {
      res.json(cards)
    }
  })
})

router.route('/card/:card_id')
  .delete((req, res) => {
    Card.findById(req.params.card_id, (err, card) => {
      if(err){
        res.send(err);
      } else {
        card.remove()
        res.json({ message: 'Card deleted!' });
      }
    })
  })

App.use('/api', router);

App.listen(3000, () => {
  console.log("serving port 3000")
})
