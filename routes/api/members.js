const express = require('express');
const router = express.Router();
const members = require('../../Members');


// THIS ROUTE GETS ALL MEMBERS - GET REQUEST TESTED IN INSOMNIA (IN ONE LINE SYNTAX , WE REMOVED CURLY BRACKETS AS IT'S ONLY 1 REQUEST)
router.get('/', (req, res) => res.json(members));

// THIS ROUTE GETS A SINGLE MEMBER
router.get('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));

    if(found) {
        res.json(members.filter(member => member.id === parseInt(req.params.id)));
    } else {
        res.status(400).json({ msg: `No member with the if of ${req.params.id}`});
    }
});

// CREATE A MEMBER

router.post('/',(req, res) => {
   const newMember = {
    id: uuid.v4(),
    name: req.body.name,
    email: req.bpdy.email,
    status: 'active'
   }

   if(!newMember.name || !newMember.email)  {
     res.status(400).json({ msg: 'Please include a name and email'});
   }

   members.push(newMember);
   res.json(members);
});

//  res.send(req.body);

module.exports = router;