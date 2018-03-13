const { expect } = require('chai');
const sinon = require('sinon');
const { JSDOM } = require('jsdom');


global.sinon = sinon;
global.expect = expect;
global.jsdom = JSDOM;
global.window = new JSDOM('', { pretendToBeVisual: true }).window;
global.document = global.window.document;
