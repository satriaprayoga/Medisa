export const helper={
    convertToCurrency(value,currency){
        var output;
        if(isNaN(value)){
            output=value;
        }else{
            const formatter=Intl.NumberFormat('id-ID',{
                style:'currency',
                currency:currency,
                minimumFractionDigits:2
            });
            output=formatter.format(value);
        }
        return output;
    }
}