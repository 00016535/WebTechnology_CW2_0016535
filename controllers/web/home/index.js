
const home_controller = {
    index: async (req, res) =>{
        res.render('home');
    },
    add: async (req, res) =>{
        res.render('home/add_update');
    },
    update: async (req, res) =>{
        res.render('home/add_update');
    }
};
  
module.exports = home_controller;
