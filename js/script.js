function calculateInsurance() {
   
    var horse_power = parseInt(document.getElementById("horsepower").value); 
    var age = parseInt(document.getElementById("age").value);
    var country = document.getElementById("country").value;
    var name = document.getElementById("name").value;

    if (age >= 18) {
        if (country == 'Austria' ) {
        var insurance = Math.floor((horse_power*100)/age+50);    
    }
        if (country == 'Hungary' ) {
        var insurance =  Math.floor((horse_power*120)/age+100);    
    }
        if (country == 'Greece' ) {
        var insurance =  Math.floor(((horse_power*150)/(age+3))+50);    
    }
        document.getElementById("message").innerHTML = "Dear " + name + "!" + "<br>" + "Your insurance would be " + insurance + " &euro; / year.";

    } else {
        document.getElementById("message").innerHTML = "Get a driving licence first!"}; 

        return insurance;
 }



 
/* 

For Austria : insurance = horse_power x 100 / age   + 50;

For Hungary: insurance = horse_power x 120 / age  + 100;

For Greece: insurance = horse_power x 150 / (age+3)  + 50; 

*/


