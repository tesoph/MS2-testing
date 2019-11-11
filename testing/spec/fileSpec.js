//import { exportAllDeclaration } from "@babel/types";


//loadFixtures('myfixture.html');
//loadStyleFixtures('mycssfixture.css');

describe('Testing the sketch', () => {
    var myp5;

    beforeEach(function () {
        affix('#sketch-container[style="width: 500px; height: 500px"]');
        let sketchContainer = document.getElementById('sketch-container');
        myp5 = new p5(sketch, document.getElementById("sketch-container"));
      /*  setFixtures(sandbox({
            id: 'sketch-container',
            //  class: 'my-class',
            width: '600',
            height: '600'
        }))*/
       
    });

    it('should display lines when linecheckbox is checked', () => {
        let lc = affix('input#linesCheckbox[type="checkbox"]');
       //$('#linesCheckbox').prop('checked', true);
        //loadFixtures('linesCheckboxFixture.html')
      //  $('#linesCheckbox').prop('checked', true);
       //expect($('#linesCheckbox')).toBeChecked();
       $('#linesCheckbox').prop('checked', false);
       displayLines();
      expect(myp5.lines).toBe(false);
       //$('#linesCheckbox').prop('checked', false);
       // expect(myp5.lines).toBeFalse();
    })

    it('sensitivity slider value should equal myp5. sensitivity value', () => {
     let sensivititySlider;
    })

    it('should create the sketch canvas size according to the width and height of the parent container', () => {
        let containerWidth =300;
        let containerHeight=400;
     
        myp5.resizeCanvas(containerWidth, containerHeight);
        expect(myp5.w).toBe(600);
    })

})
/*
    it('should change the background color', () => {
        let sketchContainer = document.getElementById('sketch-container');
        myp5 = new p5(sketch, document.getElementById("sketch-container"));

        //   let color = "white";
        // expect(myp5.changeBackgroundColor(color)).toBeDefined();
        // color = "green";
        // expect(myp5.changeBackgroundColor(color)).toThrow("InvalidColor");
    })
    */
/*
    it('should create the sketch canvas size according to the width and height of the parent container', () => {
        myp5.windowResized(100, 100);
         expect(myp5.w).toBe(100);
         expect(myp5.a.location.x).toBe(50);
         myp5.windowResized("1z", "d");
         expect(myp5.w).toBe(200);
         expect(myp5.a.location.x).toBe(100);
         let sketchContainer = document.getElementById('sketch-container');
        myp5 = new p5(sketch, document.getElementById("sketch-container"));
        let positionInfo = sketchContainer.getBoundingClientRect();
        let containerHeight = positionInfo.height;
        let containerWidth = positionInfo.width;
        myp5 = new p5(sketch, document.getElementById("sketch-container"));
        expect(myp5.w).toBe(600);
    })*/
/*
    it('should change the stroke weight when the stroke-weight-slider value is changed', () => {
        //let SWslider = $('<input id="stroke-weight-picker" type="range" value="6"/>');
        //  let swslider= document.getElementById("stroke-weight-picker");
        //  SWslider.oninput = changeStrokeWeight;
        // expect($(SWslider)).toHaveValue(3);
        // expect(swslider.changeStrokeWeight(3)).toBeDefined();
        expect($('<input type="range" value="6"/>').on("input", "3")).toHaveValue(3);

    })
*/
  







/*
 //   it('should change the stroke weight when the stroke-weight-slider value is changed', () => {
  //      let SWslider = $('<input id="stroke-weight-picker" type="range" value="6"/>');
  //      SWslider.oninput(3);
    //    expect($(SWslider)).toHaveValue(3);
   // })
    //Stroke Weight slider
    let SWslider = document.getElementById("stroke-weight-picker");
    SWslider.oninput = changeStrokeWeight;
    function changeStrokeWeight(event) {
        myp5.strokeWidth = event.target.value;
    }
    expect(if ($('<input type="range" value="6"/>').oninput(3){
        myp5.strokeWidth = event.target.value
    });

if (myp5.strokeWidth === 5) {
    expect($('<input type="range" value="6"/>')).toHaveValue('5');
}


})*/