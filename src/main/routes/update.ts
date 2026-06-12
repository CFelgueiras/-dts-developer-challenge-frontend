import axios from 'axios';
import { Application } from 'express';

export default function (app: Application): void {
  app.get('/tasks/:id/status', (req, res) => {
    res.render('status', {
      id: req.params.id,
    });
  });

  app.post('/tasks/:id/status', async (req, res) => {
    await axios.patch(`http://localhost:4000/tasks/${req.params.id}/status`, {
      status: req.body.status,
    });

    res.redirect('/');
  });
}
