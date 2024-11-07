import('https://cdn.jsdelivr.net/gh/dev1forma/examples/spa-custom-help-widget/v1/lib.esm.js').then(({ init }) => {
    const root = document.createElement('div');
    document.body.append(root);

    const link = document.createElement('link');
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = "https://cdn.jsdelivr.net/gh/dev1forma/examples/spa-custom-help-widget/v1/lib.esm.css";
    document.head.append(link);

    spaEvent('init', e => {
        init({
            container: root,
        });
    });
});