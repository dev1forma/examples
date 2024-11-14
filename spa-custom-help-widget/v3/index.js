(() => {

    const libUrl = 'https://cdn.jsdelivr.net/gh/dev1forma/examples/spa-custom-help-widget/v3/lib.esm.js',
        cssUrl = 'https://cdn.jsdelivr.net/gh/dev1forma/examples/spa-custom-help-widget/v3/lib.esm.css';


    import(libUrl).then(({ init }) => {
        const root = document.createElement('div');
        document.body.append(root);

        const link = document.createElement('link');
        link.rel = "stylesheet";
        link.type = "text/css";
        link.href = cssUrl;
        document.head.append(link);

        init({
            container: root,
        });
    });

})();
