import axios from 'axios';
import { Application } from 'express';

const API_URL = 'http://localhost:4000/tasks';

export default function (app: Application): void {
  app.get('/tasks/create', (req, res) => {
    console.log('CREATE PAGE OPENED');
    res.render('create');
  });

  app.post('/tasks/create', async (req, res) => {
    await axios.post(API_URL, {
      title: req.body.title,
      description: req.body.description,
      status: req.body.status,
      dueDateTime: req.body.dueDateTime,
    });

    res.redirect('/');
  });
}
