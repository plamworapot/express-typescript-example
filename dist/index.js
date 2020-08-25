'use strict';
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
const express_1 = __importDefault(require('express'));
const common_1 = require('./configs/common');
const hello_1 = __importDefault(require('./controller/hello'));
const server = express_1.default();
server.get('/hello', hello_1.default);
server.all('*', (_req, res) => {
    return res.status(404).end('404');
});
server.listen(common_1.port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${common_1.port}`);
});
//# sourceMappingURL=index.js.map
