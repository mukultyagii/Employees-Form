const dbService = require('../Services/dbService');
// action
async function get(req, res) {
    try {
        res.json("Api called for get student");
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
}

// action
async function post(req,res)
{
    try{
        const {firstname, lastname, email, phonenumber, address} = req.body;
        const sql = "INSERT INTO `login` (`firstname`, `lastname`, `email`, `phonenumber`, `address`) VALUES (?, ?, ?, ?, ?)";
        const values = [firstname, lastname, email, phonenumber, address];
        const result = dbService.executeQuery(sql, values);
        res.json(result);
    }catch(error){
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
}

// Exporting controller methods
module.exports = {
    get,
    post
};