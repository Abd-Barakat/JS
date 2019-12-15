import { expect } from 'chai';
import fs from 'fs';
import jsdom from 'jsdom';

describe('First Unit Test', () => {
    it('should passed', () => {
        expect(true).equal(true);
    });
});

describe('index.html', () => {
    it('Should say hello', (finish) => {
        const file = fs.readFileSync('./src/index.html', 'utf-8');
        jsdom.env(file, function(err, window) {
            const h1 = window.document.getElementsByTagName('h1')[0];
            expect(h1.innerHTML).to.equal('Hello Abdel-Rahman Saleh Barakat ?');
            // this to convert env method from asynchronous to synchronous
            finish();
            window.close();
        });
    });
});