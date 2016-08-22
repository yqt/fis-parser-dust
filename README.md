# fis-parser-dust

A parser plugin for fis to compile dust file.

## usage

    $ npm install -g fis-parser-dustjs
    $ vi path/to/project/fis-conf.js

```javascript
//file : path/to/project/fis-conf.js
//NOTE : name of template registed in dust will be '/relative/path/to/.dust/file', one more '/' than the output of grunt-dust.
fis.config.merge({
    roadmap : {
        ext : {
            dust : 'js'
        },
        path : [{  // maybe you need fis.config.concat instead of fis.config.merge
            reg: /\/dust\/(.*)\.dust$/,    // your location of dust files
            isMod: true,
            useParser: true,
            useCompile: true,
            isJsLike: true,
            release: '/static/dust/$1.js'  // your release path of dust files
        }]
    },
    modules : {
        parser : {
            dust : 'dustjs'
        }
    },
    settings : {
        parser : {
            dust : {
                basePath : "" //optional: rewrite prefix before filename
            }
        }
    }
});
```
