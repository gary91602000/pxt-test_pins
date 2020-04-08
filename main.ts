/**
 * Functions are mapped to blocks using various macros in comments starting with % (e.g., //% block).
 * //%是做定義使用非備註功能
 * The most important macro "block" specifies that a block should be generated for a **exported** function.
 * block = " "之後的內容是在定義積木的完整樣貌
 */
 
//% block="test_pins" color="#AA278D" 
//block積木群組名稱,color積木顏色
namespace test_pins {

    // note that Caml casing yields lower case
    // block text with spaces

    //% weight=20
    //% blockId=analog_writepin 
	//% block="analog output|%led|value|%value"
    //% led.fieldEditor="gridpicker" 
	//% led.fieldOptions.columns=3 
	//% value.defl=1023
	//% value.min=0
	//% value.max=1023	
	
    export function analog_writepin(led: AnalogPin, value: number): void {
        pins.analogWritePin(led, value)
    }
	
	
	//% weight=20
    //% blockId=digital_writepin 
	//% block="digital output|%led|value|%value"
    //% led.fieldEditor="gridpicker" 
	//% led.fieldOptions.columns=3 
	//% value.defl=0
	//% value.min=0
	//% value.max=1	
	export function digital_writepin(led: DigitalPin, value: number): void {
        pins.digitalWritePin(led, value)
    }
	
}
