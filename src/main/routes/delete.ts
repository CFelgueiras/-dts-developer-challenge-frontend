import axios from 'axios';
import { Application } from 'express';

export default function (app: Application): void {
  app.get('/tasks/:id/delete', async (req, res) => {
    await axios.delete(`http://localhost:4000/tasks/${req.params.id}`);

    res.redirect('/');
  });
}
