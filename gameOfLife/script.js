function matrixGenerator(matrixSize,grass){
        var matrix = []

         for(let i = 0; i < matrixSize;i++){
             matrix.push([])
            for(let j = 0; j < matrixSize;j++){
                    matrix[i].push(0)
            }
         }

         for(let i = 0; i < grass;i++){
            let x  = Math.floor(Math.random() * matrixSize )     
            let y  = Math.floor(Math.random() * matrixSize )  
               matrix[y][x] = 1
         }


         return matrix
}

let matrix = matrixGenerator(20,10)
let side = 50
///օբյեկտներ պահելու զանգվածներ
var grassArr = []

function setup(){
  frameRate(15)
    createCanvas(matrix[0].length * side, matrix.length * side)
    for(let y = 0 ; y < matrix.length;y++){
        for(let x = 0; x < matrix[y].length;x++){
                if(matrix[y][x] == 1){
                       let grass = new Grass(x,y)
                       grassArr.push(grass)

                }
             
        }
}
    
}


function draw(){
    for(let y = 0 ; y < matrix.length;y++){
            for(let x = 0; x < matrix[y].length;x++){
                    if(matrix[y][x] == 1){
                            fill ("green")
                    }else{
                            fill ("gray")
                    }
                rect (x * side,y * side,side,side)  
                 
            }
    }



    for(let i in grassArr){
        grassArr[i].mul()
    }


}
