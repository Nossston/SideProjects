/*********************ADMIN ROUTES***************************/
const express = require("express");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const router = express.Router();

const caseAndSubCaseHelper = require("../helpers/caseAndSubCaseHelper");

// const CaseType = require("../models/CaseType");
// const Payment = require("../models/Payment");
const App = require("../models/Application");
var Employee = require("../models/Employee");

const hasAccessAdmin = require("../middleware/authAdmin");
const { forEach } = require("lodash");

router.get("/", hasAccessAdmin, (req, res) => {
  // LEFT CHART
  const perRecordFormatLeft = {
    caseType: String,
    subCaseName: String,
    subCaseId: String,
    signed: 0,
    paid: 0,
    submitted: 0,
  };
  let monthlySummary = [];
  let currentYear = new Date().getFullYear().toString();
  let currentMonth = ("0" + ((new Date().getMonth() + 1).toString())).slice(-2);
  caseAndSubCaseHelper.getCaseAndSubCase().forEach((i) => {
    i.subCType.forEach((j) => {
      const current = Object.create(perRecordFormatLeft);
      current.subCaseName = j.name;
      current.subCaseId = j.id;
      current.caseType = j.caseTypeID;
      monthlySummary.push(current);
    });
  });

  // RIGHT CHART
  const perRecordFormatRight = {
    empName: String,
    empId: String,
    visa: 0,
    immi: 0,
    edu: 0,
    amount: 0,
  };
  let empSummary = [];

  Employee.find()
    .lean()
    .then((emps) => {
      App.find()
        .lean()
        .then((apps) => {
            // LEFT CHART
            monthlySummary.forEach( msr => {
                apps.forEach( app => {
                    if(app.subCaseType == msr.subCaseId)
                    {
                        let contractDateArray = app.contractDate.split("-");
                        let contractYear = contractDateArray[0];
                        let contractMonth = parseInt(contractDateArray[1]);

                        let paymentDateArray = app.payment.date.split("-");
                        let paymentYear = paymentDateArray[0];
                        let paymentMonth = parseInt(paymentDateArray[1]);

                        let submitDateArray = app.submitDate.split("-");
                        let submitYear = submitDateArray[0];
                        let submitMonth = parseInt(submitDateArray[1]);

                        // console.log(currentYear);
                        // console.log(currentMonth);
                        // console.log(contractYear);
                        // console.log(("0" + contractMonth).slice(-2));
                        // console.log(paymentYear);
                        // console.log(("0" + paymentMonth).slice(-2));
                        // console.log(submitYear);
                        // console.log(("0" + submitMonth).slice(-2));

                        if(contractMonth == currentMonth && contractYear == currentYear)
                        {
                            msr.signed++;
                        }
                        // if(app.payment.date.getMonth() == currentMonth && app.payment.date.getFullYear() == currentYear)

                        if(paymentMonth == currentMonth && paymentYear == currentYear)
                        {
                            msr.paid++;
                        }

                        if(submitMonth == currentMonth && submitYear == currentYear)
                        {
                            msr.submitted++;
                        }
                    }
                })
            })
            // RIGHT CHART
            emps.forEach(e => {
                const currentEmp = Object.create(perRecordFormatRight);
                currentEmp.empName = e.firstName + " " + e.lastName;
                currentEmp.empId = e._id; //employeeId
                apps.forEach( app => {

                    if(app.agent._id.toString() == e._id.toString()) //employeeId
                    {
                        monthlySummary.forEach( record => {
                            if(app.subCaseType == record.subCaseId)
                            {
                                let contractDateArray = app.contractDate.split("-");
                                let contractYear = contractDateArray[0];
                                let contractMonth = parseInt(contractDateArray[1]);

                                if(contractMonth == currentMonth && contractYear == currentYear)
                                {
                                    if(record.caseType == "TR")
                                    {
                                        currentEmp.visa++;
                                        currentEmp.amount += parseFloat(app.payment.amount);
                                    }
                                    else if(record.caseType == "ED")
                                    {
                                        currentEmp.edu++;
                                        currentEmp.amount += parseFloat(app.payment.amount);
                                    }
                                    else
                                    {
                                        currentEmp.immi++;
                                        currentEmp.amount += parseFloat(app.payment.amount);
                                    }
                                }
                            }
                        })
                    }
                })
                // console.log(currentEmp.empId);
                empSummary.push(currentEmp);
            })

            // RENDER PAGE WITH DATA
            res.render('Admin/adminDash',{
                user: req.user,
                casetypes: monthlySummary,
                employees: empSummary,
                currentMonth: currentMonth,
                currentYear: currentYear
            });
        })
    })
});


router.post("/", hasAccessAdmin, (req, res)=>
{

    // LEFT CHART
    const perRecordFormatLeft = {
        caseType: String,
        subCaseName: String,
        subCaseId: String,
        signed: 0,
        paid: 0,
        submitted: 0
    }
    let monthlySummary = [];

    let searchedMonthYear = req.body.month.split("-");
    let searchedYear = searchedMonthYear[0];
    let searchedMonth = searchedMonthYear[1];

    caseAndSubCaseHelper.getCaseAndSubCase().forEach( i => {
        
        i.subCType.forEach ( j => {
            const current = Object.create(perRecordFormatLeft);
            current.subCaseName = j.name;
            current.subCaseId = j.id;
            current.caseType = j.caseTypeID;
            monthlySummary.push(current);
        })        
    });

    // RIGHT CHART
    const perRecordFormatRight = {
        empName: String,
        empId: String,
        visa: 0,
        immi: 0,
        edu: 0,
        amount: 0
    }
    let empSummary = [];

    Employee.find()
    .lean()
    .then((emps) => {
        App.find()
        .lean()
        .then((apps) => {
            // LEFT CHART
            monthlySummary.forEach( msr => {
                apps.forEach( app => {
                    if(app.subCaseType == msr.subCaseId)
                    {
                        let contractDateArray = app.contractDate.split("-");
                        let contractYear = contractDateArray[0];
                        let contractMonth = parseInt(contractDateArray[1]);

                        let paymentDateArray = app.payment.date.split("-");
                        let paymentYear = paymentDateArray[0];
                        let paymentMonth = parseInt(paymentDateArray[1]);

                        let submitDateArray = app.submitDate.split("-");
                        let submitYear = submitDateArray[0];
                        let submitMonth = parseInt(submitDateArray[1]);

                        // console.log(searchedYear);
                        // console.log(searchedMonth);
                        // console.log(contractYear);
                        // console.log(("0" + contractMonth).slice(-2));
                        // console.log(paymentYear);
                        // console.log(("0" + paymentMonth).slice(-2));
                        // console.log(submitYear);
                        // console.log(("0" + submitMonth).slice(-2));

                        if(("0" + contractMonth).slice(-2) == searchedMonth && contractYear == searchedYear)
                        {
                            msr.signed++;
                        }
                        if(("0" + paymentMonth).slice(-2) == searchedMonth && paymentYear == searchedYear)
                        {
                            msr.paid++;
                        }
                        if(("0" + submitMonth).slice(-2) == searchedMonth && submitYear == searchedYear)
                        {
                            msr.submitted++;
                        }
                    }
                })
            })
            // RIGHT CHART
            emps.forEach(e => {
                const currentEmp = Object.create(perRecordFormatRight);
                currentEmp.empName = e.firstName + " " + e.lastName;
                currentEmp.empId = e._id; //employeeId
                apps.forEach( app => {
                    if(app.agent._id.toString() == e._id.toString()) //employeeId
                    {
                        monthlySummary.forEach( record => {
                            if(app.subCaseType == record.subCaseId)
                            {
                                let contractDateArray = app.contractDate.split("-");
                                let contractYear = contractDateArray[0];
                                let contractMonth = parseInt(contractDateArray[1]);

                                if(contractMonth == searchedMonth && contractYear == searchedYear)
                                {
                                    if(record.caseType == "TR")
                                    {
                                        currentEmp.visa++;
                                        currentEmp.amount += parseFloat(app.payment.amount);
                                    }
                                    else if(record.caseType == "ED")
                                    {
                                        currentEmp.edu++;
                                        currentEmp.amount += parseFloat(app.payment.amount);
                                    }
                                    else
                                    {
                                        currentEmp.immi++;
                                        currentEmp.amount += parseFloat(app.payment.amount);
                                    }
                                }
                            }
                        })
                    }
                })
                // console.log(currentEmp.empId);
                empSummary.push(currentEmp);
            })

            // RENDER PAGE WITH DATA
            res.render('Admin/adminDash',{
                user: req.user,
                casetypes: monthlySummary,
                employees: empSummary,
                currentMonth: searchedMonth,
                currentYear: searchedYear
            });
        });

    });
});


router.get("/empMonthly/:id", hasAccessAdmin, (req, res) => {

    const perRecordFormatLeft = {
        caseType: String,
        subCaseName: String,
        subCaseId: String,
        signed: 0,
        paid: 0,
        submitted: 0
    }
    let monthlySummary = [];

    let currentYear = new Date().getFullYear().toString();
    let currentMonth = ("0" + ((new Date().getMonth() + 1).toString())).slice(-2);

    caseAndSubCaseHelper.getCaseAndSubCase().forEach( i => {
        
        i.subCType.forEach ( j => {
            const current = Object.create(perRecordFormatLeft);
            current.subCaseName = j.name;
            current.subCaseId = j.id;
            current.caseType = j.caseTypeID;
            monthlySummary.push(current);
        })        
    });

    Employee.findById(req.params.id)
    .lean()
    .then((emp) => {
        App.find()
        .lean()
        .then((apps) => {
            monthlySummary.forEach( msr => {
                apps.forEach( app => {
                    if(app.agent._id.toString() == emp._id.toString())
                    {
                        if(app.subCaseType == msr.subCaseId)
                        {
                            let contractDateArray = app.contractDate.split("-");
                            let contractYear = contractDateArray[0];
                            let contractMonth = parseInt(contractDateArray[1]);

                            let paymentDateArray = app.payment.date.split("-");
                            let paymentYear = paymentDateArray[0];
                            let paymentMonth = parseInt(paymentDateArray[1]);

                            let submitDateArray = app.submitDate.split("-");
                            let submitYear = submitDateArray[0];
                            let submitMonth = parseInt(submitDateArray[1]);

                            if(contractMonth == currentMonth && contractYear == currentYear)
                            {
                                msr.signed++;
                            }
                            if(paymentMonth == currentMonth && paymentYear == currentYear)
                            {
                                msr.paid++;
                            }
                            if(submitMonth == currentMonth && submitYear == currentYear)
                            {
                                msr.submitted++;
                            }
                        }
                    }
                })
            })
            // console.log(currentEmp.empId);
            
            // RENDER PAGE WITH DATA
            res.render('Admin/empMonthlyReport',{
                emp: emp,
                casetypes: monthlySummary,
                user: req.user,
                currentMonth: currentMonth,
                currentYear: currentYear
            });
        })
    })
    .catch((err) => console.log(`Error : ${err}`));
});


router.post("/empMonthly/:id", hasAccessAdmin, (req, res) => {

    const perRecordFormatLeft = {
        caseType: String,
        subCaseName: String,
        subCaseId: String,
        signed: 0,
        paid: 0,
        submitted: 0
    }
    let monthlySummary = [];

    let searchedMonthYear = req.body.month.split("-");
    let searchedYear = searchedMonthYear[0];
    let searchedMonth = searchedMonthYear[1];

    caseAndSubCaseHelper.getCaseAndSubCase().forEach( i => {
        
        i.subCType.forEach ( j => {
            const current = Object.create(perRecordFormatLeft);
            current.subCaseName = j.name;
            current.subCaseId = j.id;
            current.caseType = j.caseTypeID;
            monthlySummary.push(current);
        })        
    });

    Employee.findById(req.params.id)
    .lean()
    .then((emp) => {
        App.find()
        .lean()
        .then((apps) => {
            monthlySummary.forEach( msr => {
                apps.forEach( app => {
                    if(app.agent._id.toString() == emp._id.toString())
                    {
                        if(app.subCaseType == msr.subCaseId)
                        {
                            let contractDateArray = app.contractDate.split("-");
                            let contractYear = contractDateArray[0];
                            let contractMonth = parseInt(contractDateArray[1]);

                            let paymentDateArray = app.payment.date.split("-");
                            let paymentYear = paymentDateArray[0];
                            let paymentMonth = parseInt(paymentDateArray[1]);

                            let submitDateArray = app.submitDate.split("-");
                            let submitYear = submitDateArray[0];
                            let submitMonth = parseInt(submitDateArray[1]);

                            if(contractMonth == searchedMonth && contractYear == searchedYear)
                            {
                                msr.signed++;
                            }
                            if(paymentMonth == searchedMonth && paymentYear == searchedYear)
                            {
                                msr.paid++;
                            }
                            if(submitMonth == searchedMonth && submitYear == searchedYear)
                            {
                                msr.submitted++;
                            }
                        }
                    }
                })
            })
            // console.log(currentEmp.empId);
            
            // RENDER PAGE WITH DATA
            res.render('Admin/empMonthlyReport',{
                user: req.user,
                emp: emp,
                casetypes: monthlySummary,
                currentMonth: searchedMonth,
                currentYear: searchedYear
            });
        })
    })
    .catch((err) => console.log(`Error : ${err}`));
});
/* Case Types */
// router.get("/addCaseType", (req, res)=>
// {
//     res.render('Admin/addCaseType');
// });

// router.post("/addCaseType", jsonParser, (req, res)=>
// {
//     const newCaseType=
//     {
//         caseType: req.body.caseType,
//         subCaseType: req.body.subCaseType
//     }
//     console.log(req.body.caseType);
//     console.log(req.body.subCaseType);

//     const n_case = new CaseType(newCaseType);

//     console.log(n_case);

//     n_case.save()
//     .then(n_case=>{
//         console.log(`Case Type added to the database`)
//         res.redirect("/");
//     })
//     .catch(err=>console.log(`Error :${err}`));
// });

/* Payments */
// router.get("/addPayment", (req, res) => {
//   res.render("Admin/addPayment");
// });

// router.post("/addPayment", jsonParser, (req, res) => {
//   const newPayment = {
//     amount: req.body.amount,
//     date: req.body.payDate,
//     method: req.body.methd,
//   };

//   const n_pment = new Payment(newPayment);

//   console.log(n_pment);

//   n_pment
//     .save()
//     .then((n_pment) => {
//       console.log(`Payment added to the database`);
//       res.redirect("/");
//     })
//     .catch((err) => console.log(`Error :${err}`));
// });

module.exports = router;
