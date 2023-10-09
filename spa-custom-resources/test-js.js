/**
 * 
 * add to custom settings config
 * 
 * "spaResources": [
    {
      "type": "js",
      "src": "https://cdn.jsdelivr.net/gh/dev1forma/examples/spa-custom-resources/test-js.js"
    }
  ]
 */

;(() => {

    console.log('hello from custom initializer script')

    spaEvent('init', e => {
        console.log('spa init');
    });

    spaEvent('auth', e => {
        console.log('auth', e);
    });

})();