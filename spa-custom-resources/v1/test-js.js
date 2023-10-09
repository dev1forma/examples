/**
 * 
 * add to custom settings config
 * 
 * "spaResources": [
    {
      "type": "js",
      "src": "https://cdn.jsdelivr.net/gh/dev1forma/examples/spa-custom-resources/v1/test-js.js"
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

        const sessionUser = spaApi.getSessionUser();

        console.log(sessionUser)
    });

})();