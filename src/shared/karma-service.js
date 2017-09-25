import openSocket from 'socket.io-client';


export class KarmaService {

    constructor() {
        this.browsers = [];
    }

    connect(updated) {
        console.log('Trying to connect');

        const socket = openSocket('ws://localhost:3000');

        socket.on('hello', hello => {
            console.log(hello);
        });

        socket.on('bye_bye', bye => {
            console.log(bye);
        });

        socket.on('browser_register', browser => {
            console.log('Browser registered', browser);
            this.browsers = [...this.browsers, browser];
            updated(this.browsers);
        });
        socket.on('browser_start', start_info => {
            console.log('Browser started', start_info)
            let browser = start_info.browser;
            browser.info = start_info.info;
            this.browsers = [browser];
            updated(this.browsers);
        });

        // this.socket.on('browser_completed_run', () => {
        //     //this one has information about coverage etc.
        // });
        //
        // this.socket.on('run_complete', () => {
        //     //this one has information about test result
        // });
    }
}

//browser: id,name