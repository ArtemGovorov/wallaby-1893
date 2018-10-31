const chaiEnzyme = require('chai-enzyme');
const chaiString = require('chai-string');
const enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

enzyme.configure({adapter: new Adapter()});