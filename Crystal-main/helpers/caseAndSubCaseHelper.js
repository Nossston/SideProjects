const arrayHelpers = require("./arrayHelper");

const caseTypes = [
  {
    name: "Temporary Residence (visiting, studying, working)",
    id: "TR",
  },
  {
    name: "Economic Immigration",
    id: "EI",
  },
  {
    name: "Family Sponsorship",
    id: "FS",
  },
];

const subCaseTypes = [
  {
    id: "vvoc",
    name: "Visitor visa (from outside Canada)",
    caseTypeID: "TR",
  },
  {
    id: "vvic",
    name: "Visitor visa (from inside Canada)",
    caseTypeID: "TR",
  },
  {
    id: "ve",
    name: "Visitor extension (Visitor record)",
    caseTypeID: "TR",
  },
  {
    id: "sv",
    name: "Super visa (parents or grandparents)",
    caseTypeID: "TR",
  },
  {
    id: "spoc",
    name: "Study permit (from outside Canada)",
    caseTypeID: "TR",
  },
  {
    id: "spic",
    name: "Study permit (from inside Canada)",
    caseTypeID: "TR",
  },
  {
    id: "spe",
    name: "Study permit extension",
    caseTypeID: "TR",
  },
  {
    id: "wpoc",
    name: "Work permit (from outside Canada)",
    caseTypeID: "TR",
  },
  {
    id: "wpic",
    name: "Work permit from inside Canada (initial and extension)",
    caseTypeID: "TR",
  },
  {
    id: "aip",
    name: "Atlantic Immigration Pilot",
    caseTypeID: "EI",
  },
  {
    id: "cec",
    name: "Canadian Experience Class",
    caseTypeID: "EI",
  },
  {
    id: "c",
    name: "Caregivers",
    caseTypeID: "EI",
  },
  {
    id: "pn",
    name: "Provincial Nominees",
    caseTypeID: "EI",
  },
  {
    id: "sepf",
    name: "Self-employed persons (Federal)",
    caseTypeID: "EI",
  },
  {
    id: "qbc",
    name: "Quebec Business Class",
    caseTypeID: "EI",
  },
  {
    id: "swf",
    name: "Skilled workers (Federal)",
    caseTypeID: "EI",
  },
  {
    id: "stf",
    name: "Skilled trades (Federal)",
    caseTypeID: "EI",
  },
  {
    id: "swq",
    name: "Skilled workers (Quebec)",
    caseTypeID: "EI",
  },
  {
    id: "suv",
    name: "Start-up visa",
    caseTypeID: "EI",
  },
  {
    id: "sclic",
    name: "Spouse or common-law partner living inside Canada",
    caseTypeID: "FS",
  },
  {
    id: "scloc",
    name: "Spouse or common-law partner living outside Canada",
    caseTypeID: "FS",
  },
  {
    id: "dc",
    name: "Dependent child",
    caseTypeID: "FS",
  },
  {
    id: "pgp",
    name: "Parents or grandparents",
    caseTypeID: "FS",
  },
  {
    id: "acor",
    name: "Adopted child or other relative",
    caseTypeID: "FS",
  },
];

const getCaseAndSubCase = () => {
  let caseWithSubCases = [];

  for (let i = 0; i < caseTypes.length; i++) {
    const c = caseTypes[i];

    const subC = arrayHelpers.where(subCaseTypes, (x) => x.caseTypeID === c.id);

    caseWithSubCases.push({
      name: c.name,
      id: c.id,
      subCType: arrayHelpers.sortAsc(subC),
    });
  }
  caseWithSubCases = arrayHelpers.sortAsc(caseWithSubCases);
  return caseWithSubCases;
};

module.exports = { getCaseAndSubCase, caseTypes, subCaseTypes };
