// document.write("Hello!")


// var man = confirm("Are you a man?")

// if(man == true)
// {
//     let name = prompt("Enter ur name:")

//     document.write("hello Mr." + name)
// }

let Name = prompt("Enter your Name:");

let marks = prompt("Enter your Marks:");

switch (true) 
{
    case marks>90 && marks<=100:
        Grade = "A"
        break;
            
    case marks>80 && marks<=90:
        Grade = "B"
        break;

        
    case marks>70 && marks<=80:
        Grade = "C"
        break;

        
    case marks>50 && marks<=70:
        Grade = "D"
        break;

        
    case marks>50 && marks<=0:
        Grade = "Fail"
        break;

    
    default:
        Grade = "Invalid Marks"
        break;
}

document.write("Grade of " + Name + " is " + Grade)