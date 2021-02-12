import { NextFunction, Request, Response } from 'express';

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.headers['api-key'] === 'some-secret') {
    next();
  } else {
    res
      .status(403)
      .send('You shall not be allowed to access the sacred records!');
  }
};
