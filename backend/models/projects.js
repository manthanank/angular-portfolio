const mongoose = require('mongoose');

const Projects = mongoose.model('projects', {
    title : {type: String},
    codeurl: {type: String},
    previewurl: {type: String},
    imgurl: {type: String}
});

module.exports = Projects;