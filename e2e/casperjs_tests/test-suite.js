var fs = require('fs');
var assertComponents = require('assert-components.js');
var addRegister = require('add-register.js');
var host = 'http://localhost:3000/';
var device = {
    name: 'Windows, Chrome 41',
    casperOptions: {
        userAgent: 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36',
        viewportSize: {
            width: 1280,
            height: 768
        }
    }
};
var devicePresetName = device.name;
var deviceUA = device.casperOptions.userAgent;
var vw = device.casperOptions.viewportSize.width;
var vh = device.casperOptions.viewportSize.height;

casper.test.begin('Various Master ASP e2e tests', 2, function suite(test) {

    // setup casper run
    casper.start(host);
    casper.userAgent(deviceUA);
    casper.viewport(vw, vh);

    casper.then(function () {
        // inject jQuery
        this.page.injectJs('../../../node_moduls/jquery/dist/jquery.js');

        var jqueryVer = this.evaluate(function() {
            return jQuery.fn.jquery;
        });

        this.echo('\n\n*************************************************************');
        this.echo('****** ' + host);
        this.echo('****** Profile: ' + devicePresetName);
        this.echo('****** Screen: ' + vw + 'x' + vh);
        this.echo('****** jQuery: '+jqueryVer);
        this.echo('*************************************************************');

        // Courtesy capture
        this.capture('foo.jpg', undefined, {
            format: 'jpg',
            quality: 75
        });

        assertComponents(this, test);
        addRegister(this, test);
    });

    casper.run(function () {
        this.echo('\n///// Done.\n\n\n');
        test.done();
    });

});
