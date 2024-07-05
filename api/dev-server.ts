import app from '.';
import './config';

function init() {
  app.listen(process.env.PORT, () => {
    console.log('Server is running on port ' + process.env.PORT);
  });
}

init();
