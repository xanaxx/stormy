import { remote } from 'electron';

/**
 *  - Check first run
 *  - Set first run
 *  - Clear first run
 */

export function checkFirstRun() {
    console.log('app path', remote.process.execPath);
}
