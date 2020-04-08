/**
 * Functions are mapped to blocks using various macros in comments starting with % (e.g., //% block).
 * //%是做定義使用非備註功能
 * The most important macro "block" specifies that a block should be generated for a **exported** function.
 * block = " "之後的內容是在定義積木的完整樣貌
 */
 
//% block="test_music" color="#AA278D" 
//block積木群組名稱,color積木顏色
namespace test_music {

    // note that Caml casing yields lower case
    // block text with spaces

    //% weight=20
    //% blockId=playtone 
    //% block="playtone|%value|for|$ms"
    //% value.defl=262
	//% beat.defl=1
    export function playtone(value: Note, beat: BeatFraction ): void {
        music.beat(BeatFraction.Whole)
    }		
}