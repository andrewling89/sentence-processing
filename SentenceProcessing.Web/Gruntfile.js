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
        open: {
            dev: {
                path: 'http://localhost:9000/index.html'
            }
        }
    });

    grunt.registerTask('dev', ['connect', 'open', 'watch']);
    grunt.registerTask('build', ['ts:build', 'sass:build']);
}