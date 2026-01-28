var doCoolStuff = function() {
    if (document.getElementById('cool').className == 'cool green')   {
        document.getElementById('cool').className = 'cool red';}
    else {
        document.getElementById('cool').className = 'cool green';}
    }

var car = {
            make: 'VW',
            type: 'polo',
            color: 'blue',
            isTurnedOn: false,
            numberOfWheels: 4,
            seats: ['seat 1', 'seat 2', 'seat 3', 'seat 4'],
            turnOn: function() {
                this.isTurnedOn = true;
            },
            fly: function() {
                alert('the car is flying');
                },
            switchCar: function(isOn) {
                console.log('turn car ' + isOn);
                if (isOn == true) {
                    this.turnOn = true;}
                else {
                    this.turnOn = false;}
            }
}
console.log('initial');