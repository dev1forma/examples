/**
 * 
 * add to custom settings config
 * 
 * "spaResources": [
    {
      "type": "js",
      "src": "https://cdn.jsdelivr.net/gh/dev1forma/examples/spa-custom-resources/v3/test-js.js"
    }
  ]
 */

;(() => {

    console.log('hello from custom initializer script')

    spaEvent('init', e => {
        console.log('spa init');
    });

    spaEvent('auth', async e => {
        console.log('auth', e);

       console.log( await spaApi.getSessionUser().data )
    });

})();