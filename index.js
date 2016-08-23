/*
 * fis
 * http://fis.baidu.com/
 * yqt0221@gmail.com
 */

'use strict';

var dust = require('dustjs-linkedin');

module.exports = function(content, file, conf){
	var name = conf.basePath ? conf.basePath + file.filename : file.subpathNoExt;
    return "define('" + file.getId() + "', function (require, exports, module) {\n\t" + dust.compile(content.toString(), name) + "\n});";
};
