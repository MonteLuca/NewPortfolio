import { environmentSecret } from './environment.secret';

export const environment = {
  production: true,
  apiBase: environmentSecret.productionApiBase
};
