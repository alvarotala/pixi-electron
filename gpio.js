

const options = {
        gpiomem: true,          /* Use /dev/gpiomem */
        mapping: 'gpio',        /* Use the P1-P40 numbering scheme */
        mock: 'raspi-3',        // Emulate specific hardware in mock mode \\ undefined
        close_on_exit: true,    /* On node process exit automatically close rpio */
}

const triggerpulsewidth = 0.0005 // 5E-6 # 0.0000005
const poll_time = 0.01 // 0.05 # 0.0066 # 0.066

const hopper_timeout_error = 1.0 // in seconds

const base_path = '/home/alvarotala/cfdata'

const filename_counter_in  = 'cfgpio_counter_in.data'
const filename_counter_out = 'cfgpio_counter_out.data'
const filename_error       = 'cfgpio_error.data'


const p_leds = { r: 18, b: 23, g: 24 }
const p_coa = { power: 20, sensor: 16 }
const p_hopper = { power: 25, sensor: 12 }



// order Key - Led
const kmapping = [

    [4, 8],  // 0
    [5, 9],  // 1
    [6, 10], // 2
    [7, 11], // 3

    [0, 12], // 4
    [1, 13], // 5
    [2, 14], // 6
    [3, 15], // 7

    [12, 0], // 8
    [13, 1], // 9
    [14, 2], // 10
    [15, 3], // 11

    [8, 4],  // 12
    [9, 5],  // 13
    [10, 6], // 14
    [11, 7], // 15

];




const rpio = require('rpio');
// https://github.com/jperkin/node-rpio

// bugs with electron:

// https://stackoverflow.com/questions/60106922/electron-non-context-aware-native-module-in-renderer
// https://github.com/serialport/node-serialport/issues/2051





p_coa.sensor_fn = () => {
  rpio.msleep(20);
  if (rpio.read(p_coa.sensor)) return;

  console.log('Button pressed on pin P%d', p_coa.sensor);
}


(function() {

  rpio.init(options);

  rpio.open(p_leds.r, rpio.OUTPUT, rpio.LOW);
  rpio.open(p_leds.g, rpio.OUTPUT, rpio.LOW);
  rpio.open(p_leds.b, rpio.OUTPUT, rpio.LOW);

  rpio.open(p_coa.power, rpio.OUTPUT, rpio.LOW);
  rpio.open(p_coa.sensor, rpio.INPUT, rpio.PULL_UP);

  rpio.open(p_hopper.power, rpio.OUTPUT, rpio.LOW);
  rpio.open(p_hopper.sensor, rpio.INPUT, rpio.PULL_DOWN);

  rpio.poll(p_coa.sensor, p_coa.sensor_fn, rpio.POLL_LOW);

})()


const gpio = {

};

module.exports = gpio;
