var firstName="kishore";
var lastName="T";
var uid="12345678kis";
var emailId="thillkishore@gmail.com";
var state="tamil nadu";
var city="Tiruvannamalai";
var password="Kishoretvm@123";
var isLoggedinfromGoogle=false;
var isLoggedinfromFacebook=false;
var apexInch=37;
var apexheight=6;
var apexTC=(apexInch+apexheight);
var apextc=apexheight < apexInch;
console.log(
    `My full name is: ${firstName + lastName};
     MY uid is: ${uid};
     My Email Id is: ${emailId};
     My State is:${state};
     My city is: ${city};
     apexTc is:${apexTC};
     apextc is:${typeof apextc};
    `
)
