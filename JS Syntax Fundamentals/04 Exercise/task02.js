const prices = {
    'Students': {'Friday': 8.45, 'Saturday': 9.80, 'Sunday': 10.46},
    'Business': {'Friday': 10.90, 'Saturday': 15.60, 'Sunday': 16},
    'Regular': {'Friday': 15, 'Saturday': 20, 'Sunday': 22.50}

}

function priceVacation(count, group, day) {
    group = prices[group]
    day = prices[group][day]
    
}