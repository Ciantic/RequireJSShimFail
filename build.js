({
    baseUrl: ".",
    include: ['requirejs'],
    name: "index",
    out: "index.min.js",
    mainConfigFile : "index.js",
    optimize: 'uglify2',
    generateSourceMaps: true,
    preserveLicenseComments: false
})