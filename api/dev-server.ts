import app from '.';
import { config } from './config';

function init() {
  app.listen(config.port, () => {
    console.log('Server is running on port ' + config.port);
  });
}

init();
