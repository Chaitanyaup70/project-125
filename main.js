r_wrist_x=0;
l_wrist_x=0;
h1=document.getElementById("h1");
function preload(){

}
function draw(){
   
    h1.style.fontSize = Math.floor(l_wrist_x-r_wrist_x);
    
}
function setup(){
    canvas=createCanvas(600,475);
    canvas.position(50,0);
    camera=createCapture(VIDEO);

    poseNet=ml5.poseNet(camera,modeloaded);
    poseNet.on('pose',gotResult);
    
}
function modeloaded(){
    console.log("model loaded sucsesfully")
}
function gotResult(result){
    if(result.length>0){
        console.log(result);
        l_wrist_x=result[0].pose.leftWrist.x;
        r_wrist_x=result[0].pose.rightWrist.x;
        diff=Math.floor(l_wrist_x-r_wrist_x);
        console.log(l_wrist_x);
        console.log(r_wrist_x);
        console.log("diff ===="+diff);
    }
    else{
        console.log("code has problem");
    }
    }