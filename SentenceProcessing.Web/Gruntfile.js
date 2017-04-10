module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-ts');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-open');

    var rewrite = require("connect-modrewrite");

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            options: {
                middleware: function (connect, options, middlewares) {
                    var rules = [
                        "!\\.html|\\.js|\\.ts|\\.css|\\.svg|\\.jp(e?)g|\\.png|\\.gif|\\.woff|\\.woff2|\\.ttf$ /index.html"
                    ];
                    middlewares.unshift(rewrite(rules));
                    return middlewares;
                }
            },
            server: {
                options: {
                    port: 9000,
                    base: './'
                }
            }
        },
        ts: {
            build: {
                src: ["**/*.ts", "!node_modules/**"],
                options: {
                    experimentalDecorators: true,
                    module: 'commonjs',
                    target: 'es5'
                }
            }
        },
        sass: {
            build: {
                options: {
                    sourcemap: 'none'
                },
                files: {
                    'css/style.css': 'css/style.scss'
                }
            }
        },
        watch: {
            css: {
                files: 'css/**/*.scss',
                tasks: ['sass']
            },

            ts: {
                files: '**/*.ts',
                tasks: ['ts']
            }
        },
        jasmine_nodejs: {
            options: {
                useHelpers: true,
                helpers: [
                    "specHelper.js",
                    "node_modules/zone.js/dist/zone-node.js",
                    "node_modules/reflect-metadata/Reflect.js",
                    "node_modules/systemjs/dist/system.js"
                ],
                traceFatal: false
            },
            test: {
                specs: [
                    "app/**/*.spec.js"
                ],
            }
        },
        open: {
            dev: {
                path: 'http://localhost:9000/index.html'
            }
        }
    });

    grunt.loadNpmTasks('grunt-jasmine-nodejs');

    grunt.registerTask('dev', ['connect', 'open', 'watch']);
    grunt.registerTask('build', ['ts:build', 'sass:build']);
    grunt.registerTask('test', ['ts:build', 'jasmine_nodejs:test']);
}