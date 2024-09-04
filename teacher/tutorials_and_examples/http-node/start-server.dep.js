const nodemon = require('nodemon');
const browserSync = require('browser-sync').create();

nodemon({
    script: 'server.js',
    ext: 'js',
    ignore: ['*.test.js', 'db/*', 'node_modules/*'],
})
    .on('start', function () {
        console.log('Node.js server has started');
        browserSync.init(null, {
            proxy: "http://localhost:3000",
            files: ["*.html", "*.css", "server-started.txt"],
            browser: "default",
            port: 3001,
            open: true
        });
    })
    .on('restart', function () {
        console.log('Node.js server restarted');
        setTimeout(function () {
            browserSync.reload();
        }, 1000);
    });