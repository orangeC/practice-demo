import React from 'react';
import {render} from 'react-dom';

import { renderRoutes } from './routes';
import "bootstrap/dist/css/bootstrap.min.css"

render(renderRoutes(),document.getElementById('root'));
