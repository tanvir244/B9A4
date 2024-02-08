
function calculateMoney(ticketSale){
    if(ticketSale < 0){
        return "Invalid Number";
    }
    const totalTicketPrice = 120 * ticketSale;
    const totalCost = 500 + (50 * 8);
    const saveAmount = totalTicketPrice - totalCost;
    return saveAmount;
}

function checkName(name){
    if(typeof name !== 'string'){
        return 'invalid';
    }
    else{
        const nameLowerCase = name.toLowerCase();
        const lastLetter = ['a', 'y', 'i', 'e', 'o', 'u', 'w']
        for(const iteration of lastLetter){
            if(iteration === nameLowerCase.slice(-1)){
                return "Good Name";
            }
        }
        return "Bad Name";
    }
}

function deleteInvalids(array) {
    if (Array.isArray(array) === false) {
        return "please give an array!"
    }
    else {
        let numberArray = [];
        for (const iterator of array) {
            if (typeof iterator === 'number') {
                numberArray.push(iterator);
            }
        }
        let filterNaN = numberArray.filter(value => !isNaN(value));
        return filterNaN;
    }
}

function password(obj) {
    const stringType = String(obj.birthYear);
    if (obj.name == undefined || obj.birthYear == undefined || obj.siteName == undefined || stringType.length !== 4) {
        return 'invalid';
    }
    else {
        const name = obj.name;
        const birthYear = obj.birthYear;
        const siteName = obj.siteName;

        const firstLetter = siteName.slice(0, 1);
        const afterFristLetter = siteName.slice(1);
        const upperCase = firstLetter.toUpperCase();
        const lowerCase = afterFristLetter.toLowerCase();
        const concatination = upperCase.concat(lowerCase);

        const passwordStructre = `${concatination}#${name}@${birthYear}`
        return passwordStructre;
    }
}

function monthlySavings(incomeArray, livingCost){
    let incomeAfterTax = [];
    let totalSavings;
    let sum = 0;

    if(Array.isArray(incomeArray) === false || typeof livingCost !== 'number'){
        return "invalid input";
    }
    else{
        for(const iterator of incomeArray){
            if(iterator < 3000){
                incomeAfterTax.push(iterator);
            }
            else{
                const tax = (iterator * 20) / 100;
                const remainingBalance = iterator - tax;
                incomeAfterTax.push(remainingBalance);
            }
        }
        for(const iterator2 of incomeAfterTax){
            sum = sum + iterator2;
            totalSavings = sum - livingCost;
        }
        if(totalSavings < 0){
            return "earn more";
        }
        else{
            return totalSavings;
        }
    }
}
