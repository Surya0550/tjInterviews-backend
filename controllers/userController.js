const express = require('express');
const nodemailer = require('nodemailer');
const mongoose = require('mongoose');

const UserModel = mongoose.model('User');

// Mail Function to send to tj group when user submits his interest in UI
let mailFunction = (req, res) => {

    let transporter = nodemailer.createTransport({

        service: "gmail",
        secure: false,
        port: 25,
        auth: {
            user: "tjgroup573@gmail.com",
            pass: "myttoz-zIxzez-0tocdu"
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    let mailList = [];
    let mails = req.body.email.split('|');
    for(let i = 0; i < mails.length; i++) {
        mailList.push(mails[i]);
    }
  
    let HelperOptions = {
  
        from: '"TJ Interviews" <tjgroup573@gmail.com>',
        to: mailList,
        subject: "New Interest!",
        text: " Customer Email: " + req.body.custemail,
    };
  
    transporter.sendMail(HelperOptions, (error, info) => {
  
        if(error)
        {
            return console.log(error);
        }
        else{
            console.log("Message was sent!");
            console.log(info);
            res.send(info);
        }
    });
}

let createUser = (req, res) => {

    let newUser;

    UserModel.countDocuments({})
        .lean()
        .exec((err, result) => {
            if (err) {
                console.log(err)
                res.send(err)
            } else if (result == undefined || result == null || result == '') {
                console.log('No User Details Found')
                newUser = new UserModel({

        
                    id: 1,
                    name: req.body.name,
                    college: req.body.college,
                    branch: req.body.branch,
                    p_year: req.body.p_year,
                    c_address: req.body.c_address,
                    email: req.body.email,
                    password: req.body.password
                }) // end new user model

                newUser.save((err, result) => {
                    if (err) {
                        console.log(err)
                        res.send(err)
                    } else {
                        res.send(result)
            
                    }
                }) // end new user save
            } else {
                newUser = new UserModel({

        
                    id: result+1,
                    name: req.body.name,
                    college: req.body.college,
                    branch: req.body.branch,
                    p_year: req.body.p_year,
                    c_address: req.body.c_address,
                    email: req.body.email,
                    password: req.body.password
                }) // end new user model

                newUser.save((err, result) => {
                    if (err) {
                        console.log(err)
                        res.send(err)
                    } else {
                        res.send(result)
            
                    }
                }) // end new user save
            }
        })

}

module.exports = {
    mailFunction: mailFunction,
    createUser: createUser
}
