import 'core-js/es6';
import 'core-js/es7/reflect';
// import '../node_modules/core-js/client/shim.min.js'
// import '../node_modules/reflect-metadata/Reflect.js'
require('zone.js/dist/zone');

if (process.env.ENV === 'production') {
    // Production
} else {
    // Development
    Error['stackTraceLimit'] = Infinity;
    require('zone.js/dist/long-stack-trace-zone');
}