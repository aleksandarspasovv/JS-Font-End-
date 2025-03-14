function printMonth(month) {
    const months = [
        'January', 'February' , 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
    ];

    if (month >= 1 && month <= 12) {
        console.log(months[month - 1]);
    } else {
        console.log('Error');
    }
}

printMonth(5)