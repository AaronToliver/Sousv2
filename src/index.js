import ReactDOM from 'react-dom';
import './index.css';
//import '~/node_modules/bootstrap/dist/bootstrap.css';
import { makeMainRoutes } from './routes';

const routes = makeMainRoutes();

ReactDOM.render(
  routes,
  document.getElementById('root')
);

