const mongoose = require('mongoose');

const CaseTypes = mongoose.Schema;

const CaseTypeSchema = new CaseTypes({
    caseType: 
    {
        type: String,
        required: true
    },
    subCaseType: 
    {
        type: String,
        required: true
    }
});

const Case = mongoose.model('Case', CaseTypeSchema);
exports.CaseTypeSchema = CaseTypeSchema
exports.Case = mongoose.model("Case", CaseTypeSchema)

module.exports = Case;