import { throttle, has } from 'lodash';
import config from 'config';

export function throttledAction(fn) {
  return throttle(fn, 1000, { trailing: false });
}

export const isDevMode = has(config, 'env') ? config.env === 'development' : process.env.NODE_ENV === 'development';
