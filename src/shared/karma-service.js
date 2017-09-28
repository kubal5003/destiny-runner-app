import openSocket from 'socket.io-client';
import store from './store';
import { immutableReplace } from "./immutableHelpers";

export class KarmaService {

    constructor() {
        if(!store.browsers){
            store.browsers = [];
        }
        this.specsSubscriptions = [];
    }

    connect(updated) {
        console.log('Trying to connect to your destiny...');

        const socket = openSocket('ws://localhost:3000');

        socket.on('hello', hello => {
            console.log(hello);
        });

        socket.on('bye_bye', bye => {
            console.log(bye);
        });

        socket.on('browser_register', (browser, ...rest) => {
            console.log('Browser registered', browser, rest);
            store.browsers = [...store.browsers, browser];
            updated(store.browsers);
        });

        socket.on('browser_start', (browser, info) => {
            console.log('Browser started', browser, info);

            store.browsers = immutableReplace(store.browsers, browser, b => b.id === browser.id);
            updated(store.browsers, store);

            let subscriptions = this.specsSubscriptions.filter(s => s.id === browser.id);
            subscriptions.forEach(s => s.callback(info.specs));
        });

        // socket.on('browser_complete', (browser, run_info, x, y) => {
        //     //this one has information about coverage etc.
        //     console.log('Browser completed. Browser:', browser, 'Run info:', run_info, x, y);
        // });

        // socket.on('run_complete', (browsers, results, x, y) => {
        //     //this one has information about test result
        //     console.log('Run complete. Browsers:', browsers, ' Results:', results, x, y);
        // });

        // socket.on('browser_error', (...rest) => {
        //     //this one has information about test result
        //     console.log('Browser error:', rest);
        // });

        // socket.on('browser_change', (...rest) => {
        //     //this one has information about test result
        //     console.log('Browser change:', rest);
        // });

        // socket.on('spec_complete', (...rest) => {
        //     //this one has information about test result
        //     console.log('Spec complete:', rest);
        // });
    }

    subscribeForSpecs(browserId, callback) {
        this.specsSubscriptions.push({id: browserId, callback: callback});
    }
}



