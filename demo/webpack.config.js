const path = require('path');

module.exports = {
    mode:'none',
    entry:'./src/app',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name].js'
    },
    module:{
        rules:[
            // {
            //     test
            // }
        ]
    }
}