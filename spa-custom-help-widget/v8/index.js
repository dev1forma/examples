(() => {

	const folder = document.currentScript.src.slice(0, document.currentScript.src.lastIndexOf('/') + 1);
    const libUrl = folder + 'lib.esm.js',
        cssUrl = folder + 'lib.esm.css';


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
