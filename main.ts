//step 1 currency conversion rates
import inquirer from "inquirer"

const currency:any={
    
        USD: 1, // Base currency
        GBP: 0.0037,
        PKR: 280,
        EUR:0.91,
        INR:74.57

    };
    let user_answer = await inquirer.prompt(
        [
        
            {
                name:"from",
                message:"enter from currency",
                type: "list",
                choices: ["USD","EUR", "GBP","INR", "PKR"]
            },
    {
        name:"to",
        message:"enter to currency",
        type: "list",
        choices: ["USD","EUR", "GBP","INR", "PKR"]
    },

    {
        name: "amount",
        message:"enter your amount",
        type: "number",
    }
]
)
   let fromAmount = currency[user_answer.from]
   let toAmount = currency[user_answer.to]
   let amount = user_answer.amount
   let baseAmount= amount/fromAmount
   let convertedAmount = baseAmount * toAmount
   //console.log(convertedAmount);
     console.log(Math.round(convertedAmount));
   