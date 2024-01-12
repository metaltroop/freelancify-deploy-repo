const Admin = require('../models/userSchema');

// const adminGet= async (req, res) => {
//     try {
//       const users = await User.find({}, { password: 0 });
  
//       res.render('admin', { users });
//     } catch (error) {
//       console.error('Error:', error);
//       res.status(500).json({ error: 'Internal server error' });
//     }
//   };

//   module.exports ={adminGet};
// adminController.js
const getAdminPage = (req, res) => {
  // Handle logic for rendering the admin page
  res.render('admin', { userInfo: req.userInfo });
};

module.exports = {
  getAdminPage,
};
