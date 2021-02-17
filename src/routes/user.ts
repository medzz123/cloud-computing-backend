import { Request, Response } from 'express';

import { db } from '../db';

const USER_ID = 'FTdPkCzvCONxHShgR9Dl';

const getUser = async (_: Request, res: Response) => {
  try {
    const ref = db.collection('users').doc(USER_ID);

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
