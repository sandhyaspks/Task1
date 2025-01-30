const express = require('express');
const router = express.Router();

// Example: Fetch all pets
router.get('/', (req, res) => {
    res.json([
        { id: 1, name: 'Buddy', type: 'Dog', age: 3 },
        { id: 2, name: 'Mittens', type: 'Cat', age: 2 },
    ]);
});

module.exports = router;
