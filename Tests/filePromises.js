module.exports = (() => {
    let fs = require("fs");

    /**
     * Utilities for reading files asynchronously as promises.
     */
    let filePromises = {
        /**
         * Previously accessed file contents, by name.
         */
        cache: {},
        
        /**
         * Reads a file.
         * 
         * @param filename   The name of the file.
         * @param encoding   An optional encoding to specify.
         * @returns A Promise for reading the file. 
         */
        cacheFile: (fileName, encoding) => new Promise((resolve, reject) => {
            "use strict";
            
            if (filePromises.cache.hasOwnProperty(fileName)) {
                resolve(cache[fileName]);
                return;
            }
            
            fs.readFile(fileName, encoding, (error, result) => {
                if (error) {
                    console.error(error.toString());
                    reject(error);
                    return;
                }
                
                let contents = result.toString();
                
                filePromises.cache[fileName] = contents;
                resolve(contents);
            });
        }),
        
        /**
         * Reads multiple files.
         * 
         * 
         */
        cacheFiles: (fileNames, encoding) => new Promise((resolve, reject) => {
            "use strict";
            
            Promise
                .all(fileNames.map(fileName => filePromises.cacheFile(fileName, encoding)))
                .then(contents => resolve(contents));
        }),
        
        /**
         * 
         */
        getCached: fileName => filePromises.cache[fileName]
    };
    
    return filePromises;
})();
