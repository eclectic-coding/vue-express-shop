import { Router } from 'express';

const router = Router();

router.get('/', (req, res, next) => {
  res.send('Hello routes');
});

export default router;
