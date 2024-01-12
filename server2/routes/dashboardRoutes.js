const ensureAuthenticated=require('../auth');
const { createDashboard,
    getDashboard,
    getDashboardById,
    updateDashboardById,
    deleteDashboardById ,
} = require('../controllers/dashboardController');

const router = require('express').Router();

// router.post('/', createDashboard);
router.put('/:id',ensureAuthenticated,  createDashboard);//secure
router.get('/', getDashboard);
router.get('/:id', getDashboardById);
router.put('/:id', ensureAuthenticated, updateDashboardById);//secure
router.delete('/:id',ensureAuthenticated, deleteDashboardById);//secure

module.exports= router