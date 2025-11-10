// Dates  in javaScript


/*

javaScript date and time 

in javaScript date and time are represtend by thje date  object ,the date object provieds the date and time  information  and also  provieds various  method 


 in java script data defines the ecmatScript epoch that represent millsecond since 1 januray 1970 utc .this date and time is the same as the unix epoch (predominant base value for computer - recorders date and time value).

 there are four ways to create a date object 

 new date ()
 new date(millisecond)
 new date( date string)
 new date(year,month,day,hours,minitues,second ,millisecond)

 javascript has a built -in date object to handle dates and times <div className="*/


 const currentDate = new Date();
 console.log(currentDate);


 const date1=new Date(2025,11,10)
 console.log(date1);

 const date3 = new Date(17000000000000)
 console.log(date3);

//  date methods 

// 1.getmillisecond()
// 2.getfullyear()
// 3.getMonts()
// 4.getDay()
// 5.getHours()
// 6.getMinute()
// 7.getSecond


let now =new Date();
console.log(now);

getMilliseconds=now.getMilliseconds()
console.log(getMilliseconds);   


// how to get till now milliseconds

console.log(date1.getTime());


// let now = new date()

let tillNowMillseconds = Date.now();
console.log(tillNowMillseconds);