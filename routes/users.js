var router = express.Router();

/* GET users listing. */
router.get('/', async (req, res, next) => {
  try {
    res.send("welcome to users");
  }
  catch (err) {
    next(err);
  }
});

router.get('/user', async (req, res, next) => {
  try {
    const user = await getUser();
    res.send(user);
  }
  catch (err) {
    next(err);
  }
});

module.exports = router;
