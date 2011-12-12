(function (){
  var height=window.innerHeight*.95// 95% of screen
  var width=window.innerWidth*.9
  var div=document.getElementById('djangoprofiler-report')
  var div_left = window.innerWidth/2-(width/2)
  var div_top = -(height-30)
  div.style.position = 'absolute'
  div.style.height = height+'px'
  div.style.width=width+'px'
  div.style.top=div_top+'px'
  div.style.background='rgba(42,42,42,.9500)'
  div.style.left=div_left+'px'
  div.style.zIndex=9999;// One index to rule them all
  try{
    div.style.borderRadius = '0 0 8px 8px'
  }catch(e){}

  var pre = div.getElementsByTagName('pre')[0]
  var pre_height, p_height = 30;
  pre_height=height-p_height;
  pre.style.height=pre_height+'px';
  pre.style.overflow='auto';
  pre.style.margin='0 2px'
  pre.style.fontFamily='courier'
  pre.style.fontSize='10px'
  pre.style.color='#DFC484'

  var p = div.getElementsByTagName('p')[0]
  p.style.display='block'
  p.style.width='100%';

  var a = p.getElementsByTagName('a')[0]
  a.style.display='block'
  a.style.margin='0 auto'
  a.style.width='156px'
  a.style.marginTop='7px'
  a.style.color = 'white'
  a.style.cursor='pointer'
  a.addEventListener('click', function(){
    if(div.style.top!='0px'){
      div.style.top='0px'
    }else{
      div.style.top=div_top+'px'
    }
  })

})()
