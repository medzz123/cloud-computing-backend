import { Request, Response } from 'express';

import { db } from '../db';

const getUser = async (req: Request, res: Response) => {
  const { userId } = req.params;

  if (!userId) {
    res.status(400).send('User id is required!');
  }

  try {
    const ref = db.collection('users').doc(userId);

    const userSnapshot = await ref.get();

    const userData = userSnapshot.data();

    const responseData = {
      ...userData,
      events: [],
    };

    const eventSnapshot = await ref.collection('events').get();

    const data = [];

    eventSnapshot.forEach((event) => {
      data.push(event.data());
    });

    responseData.events = data;

    res.send(responseData);
  } catch (err) {
    console.log('Error getting a user', err);
    res.status(500).send('Internal Server Error');
  }
};

export { getUser };
