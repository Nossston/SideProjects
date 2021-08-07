const jwt = require("jsonwebtoken");
const moment = require("moment");
const bcryptjs = require("bcryptjs");
const nodemailer = require("nodemailer");
const {google} = require("googleapis");
const OAuth2 = google.auth.OAuth2;

//------------ Keys ------------//
const JWT_KEY = "jwtactive987";
const JWT_RESET_KEY = "jwtreset987";
const CLIENT_SECRET = "DJNRA3lX5XOlvkcBBuQrXpAl";
const CLIENT_ID = process.env.CLIENT_ID;
const REFRESH_TOKEN =
  "1//04C4ByrkPN-edCgYIARAAGAQSNwF-L9Ir9NxJvAdXF3VB6mwUAikFKdMUkojZSjgVEkdndtsVgdF1Y-t72kWQJSsGcrBUmeDdrmk";

//------------ User Model ------------//
const Employee = require("../models/Employee");

//------------ Auth functions ------------//
module.exports = {
  //------------ Login Handle ------------//
  getLogin: (req, res, next) => {
    res.render("Login/login", {});
  },

  //------------ Loggot Handle ------------//
  getLogout: (req, res) => {
    // clear up session
    req.logout();
    // add flash message
    req.flash("success_msg", "You have logged out.");
    // redirect back to login page
    console.log("log out");
    res.redirect("/login");
  },
  //------------ Register Handle ------------//
  getRegister: (req, res) => {
    res.render("Login/register");
  },
  postRegister: (req, res) => {
    const {
      firstName,
      lastName,
      phone,
      address,
      email,
      password,
      confirmPassword,
    } = req.body;
    let error = "";
    //------------ Checking required fields ------------//
    if (!firstName || !email || !password || !confirmPassword) {
      error = "Please enter all fields";
    }
    //------------ Checking password upper case ------------//
    var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/;
    // console.log(re.test(password));
    if (re.test(password) == false) {
      error = "Password must have at least one upper character";
    }

    //------------ Checking password mismatch ------------//
    if (password != confirmPassword) {
      error = "Passwords do not match";
    }

    //------------ Checking password length ------------//
    //TODO: add regrex validation
    if (password.length < 8) {
      error = "Password must be at least 8 characters";
    }

    if (error) {
      res.render("Login/register", {
        error,
        firstName,
        lastName,
        phone,
        address,
        email,
      });
    } else {
      //------------ Validation passed ------------//
      Employee.findOne({email: email}).then(user => {
        if (user) {
          //------------ User already exists ------------//
          error = "Email ID already registered";
          res.render("Login/register", {
            errors,
            firstName,
            lastName,
            phone,
            address,
            email,
            password,
            confirmPassword,
          });
        } else {
          const oauth2Client = new OAuth2(
            CLIENT_ID,
            CLIENT_SECRET,
            "https://developers.google.com/oauthplayground" // Redirect URL
          );
          oauth2Client.setCredentials({
            refresh_token: REFRESH_TOKEN,
          });
          const accessToken = oauth2Client.getAccessToken();

          const token = jwt.sign(
            {firstName, lastName, phone, address, email, password},
            JWT_KEY,
            {
              expiresIn: "30m",
            }
          );
          const CLIENT_URL = "http://" + req.headers.host;

          const output = `
                  <h2>Please click on below link to activate your account</h2>
                  <a href=${CLIENT_URL}/activate/${token} style="font-size: 20px;">Activation Link</a>
                  <p><b>NOTE: </b> The above activation link expires in 30 minutes.</p>
                  <p
                  style="
                    color: #ffcc00;
                    font-size: 10px;
                    font-family: 'Times New Roman', Times, serif;
                  "
                >
                  <b style="font-size: 20px">A</b>RETÉ
                  <b style="font-size: 20px">I</b>NTERNATIONAL
                  <b style="font-size: 20px">I</b>NC.
                  <div class="auto" style="color: black;">
                </p>
                  `;
          const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
              type: "OAuth2",
              user: "no-reply@areteinternational.ca",
              clientId: CLIENT_ID,
              clientSecret: CLIENT_SECRET,
              refreshToken: REFRESH_TOKEN,
              accessToken: accessToken,
            },
          });

          // send mail with defined transport object
          const mailOptions = {
            from: " Auth", // sender address
            to: email, // list of receivers
            subject: "Account Verification: Crstal Auth ✔", // Subject line
            generateTextFromHTML: true,
            html: output, // html body
          };

          transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
              console.log(error);
              req.flash(
                "error_msg",
                "Something went wrong on our end. Please register again."
              );
              res.redirect("/login");
            } else {
              console.log("Mail sent : %s", info.response);
              req.flash(
                "success_msg",
                "Activation link sent to email ID. Please activate to log in."
              );
              res.redirect("/login");
            }
          });
        }
      });
    }
  },

  //------------ Reset & Forgot Password Handle ------------//
  gotoReset: (req, res) => {
    const {token} = req.params;
    if (token) {
      jwt.verify(token, JWT_RESET_KEY, (err, decodedToken) => {
        if (err) {
          console.log("errr1: " + err);
          req.flash(
            "error_msg",
            "Incorrect or expired link! Please try again."
          );
          res.redirect("/login");
        } else {
          const {_id} = decodedToken;
          console.log("id: " + _id);
          // Employee.findById(_id).then(res.redirect(`/reset/${_id}`));
          Employee.findById(_id, (err, user) => {
            if (err) {
              console.log(err);
              req.flash(
                "error_msg",
                "User with email ID does not exist! Please try again."
              );
              res.redirect(`forgotReset/${_id}`);
            } else {
              //http://localhost:3000/reset/60e07a445f2e43c59bff8714
              console.log("to this");
              res.redirect(`/forgotReset/${_id}`);
            }
          });
        }
      });
    } else {
      console.log("Password reset error!");
    }
  },
  getForgotReset: (req, res) => {
    let id = req.params.id;
    res.render(`Login/forgotReset`, {
      id,
    });
  },
  postForgotReset: (req, res) => {
    const _id = req.params.id;
    console.log("post id: " + _id);
    let {password, confirmPassword} = req.body;
    //------------ Checking required fields ------------//
    if (!password || !confirmPassword) {
      req.flash("error_msg", "Please enter all fields.");
      res.redirect(`/forgotReset/:${_id}`);
    }
    //------------ Checking password length ------------//
    else if (password.length < 8) {
      req.flash("error_msg", "Password must be at least 8 characters.");
      res.redirect(`/forgotReset/:${_id}`);
    }
    //------------ Checking password mismatch ------------//
    else if (password != confirmPassword) {
      req.flash("error_msg", "Passwords do not match.");
      res.redirect(`/forgotReset/:${_id}`);
    } else {
      bcryptjs.genSalt(10, (err, salt) => {
        bcryptjs.hash(password, salt, (err, hash) => {
          if (err) throw err;
          password = hash;
          Employee.findByIdAndUpdate(
            _id,
            {
              _id,
              password,
            },
            {new: true}
          ).then(res.redirect(`/login`));
        });
        console.log("Change Pwd succeed");
      });
    }
  },
  activeAccount: (req, res) => {
    const token = req.params.token;
    let errors = [];
    if (token) {
      jwt.verify(token, JWT_KEY, (err, decodedToken) => {
        if (err) {
          req.flash(
            "error_msg",
            "Incorrect or expired link! Please register again."
          );
          res.redirect("/register");
        } else {
          //TODO: add lastName, other fields
          const {firstName, lastName, address, phone, email, password} =
            decodedToken;
          console.log(decodedToken);
          Employee.findOne({email: email}).then(user => {
            if (user) {
              //------------ User already exists ------------//
              req.flash(
                "error_msg",
                "Email ID already registered! Please log in."
              );
              res.redirect("/login");
            } else {
              const newUser = new Employee({
                firstName,
                lastName,
                phone,
                address,
                email,
                password,
                isVerified: true,
              });

              bcryptjs.genSalt(10, (err, salt) => {
                bcryptjs.hash(newUser.password, salt, (err, hash) => {
                  if (err) throw err;
                  newUser.password = hash;
                  newUser
                    .save()
                    .then(user => {
                      req.flash(
                        "success_msg",
                        "Account activated. You can now log in."
                      );
                      // Login succeed
                      res.redirect("/");
                    })
                    .catch(err => console.log(err));
                });
              });
            }
          });
        }
      });
    } else {
      console.log("Account activation error!");
    }
  },
  forgotPassword: (req, res) => {
    const {email} = req.body;
    let errors = [];
    //------------ Checking required fields ------------//
    if (!email) {
      errors.push({msg: "Please enter an email ID"});
    }
    if (errors.length > 0) {
      res.render("Login/forgot", {
        errors,
        email,
      });
    } else {
      Employee.findOne({email: email}).then(user => {
        if (!user) {
          //------------ User already exists ------------//
          errors.push({msg: "User with Email ID does not exist!"});
          res.render("Login/forgot", {
            errors,
            email,
          });
        } else {
          const oauth2Client = new OAuth2(
            CLIENT_ID, // ClientID
            CLIENT_SECRET, // Client Secret
            "https://developers.google.com/oauthplayground" // Redirect URL
          );

          oauth2Client.setCredentials({
            refresh_token: REFRESH_TOKEN,
          });
          const accessToken = oauth2Client.getAccessToken();

          const token = jwt.sign({_id: user._id}, JWT_RESET_KEY, {
            expiresIn: "30m",
          });
          const CLIENT_URL = "http://" + req.headers.host;
          const output = `
                  <h2>Please click on below link to reset your account password</h2>
                  <p>${CLIENT_URL}/forgot/${token}</p>
                  <p><b>NOTE: </b> The activation link expires in 30 minutes.</p>
                  `;
          Employee.updateOne({resetLink: token}, (err, success) => {
            if (err) {
              errors.push({msg: "Error resetting password!"});
              res.render("Login/forgot", {
                errors,
                email,
              });
            } else {
              const transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                  type: "OAuth2",
                  user: "no-reply@areteinternational.ca",
                  clientId: CLIENT_ID,
                  clientSecret: CLIENT_SECRET,
                  refreshToken: REFRESH_TOKEN,
                  accessToken: accessToken,
                },
              });

              // send mail with defined transport object
              const mailOptions = {
                from: '"Auth Admin" ', // sender address
                to: email, // list of receivers
                subject: "Account Password Reset", // Subject line
                html: output, // html body
              };

              transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                  console.log(error);
                  req.flash(
                    "error_msg",
                    "Something went wrong on our end. Please try again later."
                  );
                  res.redirect("/forgot");
                } else {
                  console.log("Mail sent : %s", info.response);
                  req.flash(
                    "success_msg",
                    "Password reset link sent to email ID. Please follow the instructions."
                  );
                  res.redirect("/login");
                }
              });
            }
          });
        }
      });
    }
  },
  getResetPwd: (req, res) => {
    let {_id, firstName} = req.user;
    res.render("Login/reset", {
      _id,
      firstName,
    });
  },
  postResetPwd: (req, res) => {
    const _id = req.params.id;
    let {password, confirmPassword} = req.body;
    //------------ Checking required fields ------------//
    if (!password || !confirmPassword) {
      console.log("No match");
      req.flash("error_msg", "Please enter all fields.");
      res.redirect(`/reset/:${_id}`);
    }
    //------------ Checking password length ------------//
    else if (password.length < 8) {
      req.flash("error_msg", "Password must be at least 8 characters.");
      res.redirect(`/reset/:${_id}`);
    }
    //------------ Checking password mismatch ------------//
    else if (password != confirmPassword) {
      req.flash("error_msg", "Passwords do not match.");
      res.redirect(`/reset/:${_id}`);
    } else {
      bcryptjs.genSalt(10, (err, salt) => {
        bcryptjs.hash(password, salt, (err, hash) => {
          if (err) throw err;
          password = hash;
          Employee.findByIdAndUpdate(
            _id,
            {
              _id,
              password,
            },
            {new: true}
          ).then(res.redirect(`/reset/:${_id}`));
        });
        console.log("Change Pwd succeed");
      });
    }
  },

  //------------ Send Email Handle ------------//
  getSendEmail: (req, res) => {
    res.render("Login/sendEmail", {user: req.user});
  },
  postSendEmail: (req, res) => {
    // construct auto-signature
    const signature = `<div >
    <p
      style="
        color: #ffcc00;
        font-size: 10px;
        font-family: 'Times New Roman', Times, serif;
      "
    >
      <b style="font-size: 20px">A</b>RETÉ
      <b style="font-size: 20px">I</b>NTERNATIONAL
      <b style="font-size: 20px">I</b>NC.
      <div class="auto" style="color: black;">
    </p>
    <p style="color: black;">tel: +1 647-350-3366<p/>
    <p style="color: black;">Email: ${req.user.email}<p/>
    <p style="color: black;">Address: 250 Consumer Road, Unit 204 North York, ON M2J4V6<p/>
    <img
      style="display: block; margin-left: auto; margin-right: auto"
      src="https://i.imgur.com/LN2lFSC.png"
    />
    <p style="font-size: 8px;color: black;">
      (This e-mail may contain confidential and/or privileged information. If you
      are not the intended recipient (or have received this e-mail in error)
      please notify the sender immediately and destroy this e-mail. Any
      unauthorized copying, disclosure or distribution of the material in this
      e-mail is strictly forbidden.)
    </p>
    <div/>
  </div>`;

    const oauth2Client = new OAuth2(
      CLIENT_ID,
      CLIENT_SECRET,
      "https://developers.google.com/oauthplayground" // Redirect URL
    );
    oauth2Client.setCredentials({
      refresh_token: REFRESH_TOKEN,
    });
    const accessToken = oauth2Client.getAccessToken();
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "no-reply@areteinternational.ca",
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });
    console.log(req.body.Content);
    const output = `<div>${req.body.Content}</div>` + signature;
    // send mail with defined transport object
    const mailOptions = {
      from: "Auth", // sender address
      to: req.body.To, // list of receivers
      subject: req.body.Subject, // Subject line
      generateTextFromHTML: true,
      html: output, // html body
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        req.flash(
          "error_msg",
          "Something went wrong on our end. Please send the email again."
        );
        res.redirect("/sendEmail");
      } else {
        console.log("Mail sent : %s", info.response);
        req.flash("success_msg", `The email sent to ${req.body.to} is succeed`);
        res.redirect("/user");
      }
    });
  },

  //------------ Edit Own File Handle ------------//
  getEditEmployee: (req, res) => {
    let {
      _id,
      lastName,
      firstName,
      address,
      phone,
      email,
      isManager,
      commission,
      SIN,
      hireDate,
      salary,
      positionName,
    } = req.user;
    hireDate = moment(hireDate).format("YYYY-MM-DD");

    res.render("Login/employee", {
      user: req.user,
      _id,
      firstName,
      lastName,
      address,
      email,
      phone,
      commission,
      SIN,
      hireDate,
      salary,
      positionName,
    });
  },
  postEditEmployee: (req, res) => {
    let {address, phone, commission, SIN, hireDate, salary, positionName} =
      req.body;
    let error = "";
    if (SIN.length != 9) {
      error = "SIN number can only have 9 digits";
      res.render("Login/employee", {
        error,
        firstName: req.user.firstName,
        lastName: req.user.lastName,
        address,
        phone,
        commission,
        SIN,
        hireDate,
        salary,
        positionName,
      });
    } else {
      Employee.findByIdAndUpdate(
        req.params.id,
        {
          address,
          phone,
          commission,
          SIN,
          hireDate,
          salary,
          positionName,
        },
        {new: true}
      ).then(
        res.render("Login/employee", {
          user: req.user,
          success: "Edit Succeed",
          firstName: req.user.firstName,
          lastName: req.user.lastName,
          address,
          phone,
          commission,
          SIN,
          hireDate,
          salary,
          positionName,
        })
      );
    }
  },

  //------------ Employee List Handle ------------//
  getAllEmployee: (req, res) => {
    try {
      Employee.find()
        .lean()
        .then(Employees => {
          goToEmployeesPage(res, Employees, null, req.user);
        })
        .catch(err => {
          console.error(`Error :${err}`);
          goToEmployeesPage(res, null, err.message, req.user);
        });
    } catch (ex) {
      console.error(`Error :${ex}`);
      goToEmployeesPage(res, null, ex.message, req.user);
    }
  },

  //------------ Admin Edit Employee Handle ------------//
  getAdminEditEmployee: (req, res) => {
    console.log(req);
    let falseChecked,
      trueChecked = "";
    Employee.findById(req.params.id)
      .lean()
      .then(emp => {
        if (emp.isManager) {
          trueChecked = "checked";
        } else {
          falseChecked = "checked";
        }
        res.render(`Login/adminEditEmployee`, {
          // res.redirect(`/adminEditEmployee/${req.params.id}}`, {
          user: req.user,
          id: req.params.id,
          firstName: emp.firstName,
          lastName: emp.lastName,
          address: emp.address,
          phone: emp.phone,
          email: emp.email,
          trueChecked,
          falseChecked,
          commission: emp.commission,
          SIN: emp.SIN,
          hireDate: moment(emp.hireDate).format("YYYY-MM-DD"),
          salary: emp.salary,
          positionName: emp.positionName,
        });
      })
      .catch(err => console.log(`Error : ${err}`));
  },
  postAdminEditEmployee: (req, res) => {
    let {
      firstName,
      lastName,
      address,
      phone,
      commission,
      SIN,
      hireDate,
      salary,
      positionName,
      trueChecked,
      falseChecked,
    } = req.body;
    const errors = [];
    let check = false;
    console.log(req.body);
    if (trueChecked == "on") check = true;
    else check = false;

    Employee.findByIdAndUpdate(
      req.params.id,
      {
        firstName,
        lastName,
        address,
        phone,
        commission,
        SIN,
        hireDate,
        salary,
        positionName,
        isManager: check,
      },
      {new: true}
    ).then(
      req.flash(
        "success_msg",
        `The employee ${firstName} is edited successfully`
      ),
      res.redirect(`/employees`)
    );
  },
};

// Supporting Employee List
function goToEmployeesPage(res, Employees, error, user) {
  res.render("Login/EmployeeList", {
    Employees,
    error,
    user,
  });
}
