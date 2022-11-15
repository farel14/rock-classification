import express from 'express';
import UserController from "../controllers/user";
import AuthController from '../middlewares/auth';
const router = express.Router();

/* GET users listing. */
router.post('/register', UserController.createUser)
router.post('/login', UserController.loginUser)

// auth guard
router.use(AuthController.verify)
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

export default router;
