// 判断用户左滑还是右滑
// 参数说明
// endX、endY=========手指离开屏幕的xy值
// startX、startY========手指按下的xy值
const getTouchData=(endX,endY,startX,startY)=>{//
  let slide ="";
  if(endX-startX>50&&Math.abs(endY-startY)<50){
    slide="right";
  }else if(endX - startX < -50 && Math.abs(endY - startY) < 50){
    slide="left";
  }
  return slide
}
export{
	getTouchData
}