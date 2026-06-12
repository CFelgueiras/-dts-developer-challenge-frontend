import axios from 'axios';
import { Application } from 'express';

const API_URL = 'http://localhost:4000/tasks';

export default function(app: Application): void {

  app.get('/', async (req, res) => {
    try {
      const response = await axios.get(API_URL);

      const tasks = response.data.map((task: any) => ({
        ...task,
        dueDateTime: new Date(task.dueDateTime).toLocaleDateString('en-GB'),
        status: task.status.replace('_', ' '),
      }));

      res.render('home', {
        tasks,
      });

    } catch (error) {
      console.error(error);

      res.render('home', {
        tasks: []
      });
    }
  });

}
