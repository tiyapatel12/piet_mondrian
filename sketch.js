const CanvasSize = 800;
const NumberOfCells = 20;
const CellSize = CanvasSize / NumberOfCells;
const ColorsArray = ["#fae317", "#f50f0f", "#0d7fbe", "#f3f3f3", "#000000"];
const PossibleSizes = [
    CellSize,
    CellSize,
    CellSize,
    CellSize * 2,
    CellSize * 3,
    CellSize * 4,
];

function preload() { }

function setup() {
    //create a canvas of 800 x 800 pixels
    createCanvas(CanvasSize, CanvasSize);

    //define a background color for the canvas
    background(220);

    //set stroke
    strokeWeight(5);

    //define x and y
    let x = 0;
    let y = 0;

    //loop through canvas to create grid
    while (y < CanvasSize) {
        //set height
        let height = random(PossibleSizes);
        if(y + height > CanvasSize) height = CanvasSize - y;
        //reset x
        x = 0;
        while (x < CanvasSize) {

            // calculate random color
            const cellColor = random(ColorsArray);

            //set fill
            fill(cellColor);

            //calculate width
            let width = random(PossibleSizes);
            if(x + width > CanvasSize) width = CanvasSize - x;

            //draw image
            rect(x, y, width, height);
            x = x + width;
        }
        y = y + height;
    }
}