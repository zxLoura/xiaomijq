$(function () {
    //购物车
    $(".barshop").mouseenter(function () {
        $(".side").clearQueue().slideDown();
    })
    $(".barshop").mouseleave(function () {
        $(".side").clearQueue().slideUp();
    })

    //侧导航
    let fathers=$(".fathers");
    let sons=$(".sons");
    // console.log(fathers, sons);

    fathers.mouseenter(function () {
        $(".sons").css("display","none");
        $(this).children(".sons").css("display","block");
    })
    fathers.mouseleave(function () {
        $(this).children(".sons").css("display","none");
    })

    //家电选项卡
    let hotBox=$(".hotBox");
    let rightBox=$(".rightBox");
    // console.log(hotBox, rightBox);
    hotBox.mouseenter(function () {
        let i=$(this).index();
        hotBox.removeClass("hot2").eq(i).addClass("hot2");
        rightBox.css("display","none").eq(i).css("display","block");
    })
    hotBox.triggerHandler("mouseenter");

    //轮播图
    let img=$(".imgs img");
    let dotBox=$(".dotBox");
    // console.log(img,dotBox);
    img.first().css("z-index",10);
    dotBox.first().addClass("active");
    let now=0;
    $(".dotBox").click(function () {
        let nn= $(this).index();
        // console.log(nn);
        dotBox.removeClass("active").eq(nn).addClass("active");
        img.css("z-index",5).eq(nn).css("z-index",10);
        now=nn;
    });
    let t=setInterval(move,2000);
    function move() {
        now++;
        if (now==img.length){
            now=0;
        }
        img.css("z-index",5).eq(now).css("z-index",10);
        dotBox.removeClass("active").eq(now).addClass("active");
    }

    function moveL() {
        now--;
        if(now<0){
           now=4;
        }
        img.css("z-index",5).eq(now).css("z-index",10);
        dotBox.removeClass("active").eq(now).addClass("active");
    }

    let leftBtn=$(".leftBtn");
    let rightBtn=$(".rightBtn");
    // console.log(leftBtn, rightBtn);
    $(".leftBtn").click(function () {
        moveL();
    })
    $(".rightBtn").click(function () {
        move();
    });

    $(".banner").mouseenter(function() {
            clearInterval(t);
        });
    $(".banner").mouseleave(function() {
        t=setInterval(move,2000);
    });
    // console.log($(".banner"));

    //小米闪购
    let times=0;
    let button=$(".button");
    let miList=$(".miList");
    let w=miList.width()/2.;
    // console.log(button, miList, w);
    button.eq(0).addClass("hot3");
    //右
    button.eq(0).click(function () {
        times++;
        if(times==2){
            times=1;
        }
        miList.css("transform",`translate(${-w*times}px)`);
        console.log(-w*times);
        button.eq(1).addClass("hot3");
        button.eq(0).removeClass("hot3");
    })



    // //左
    button.eq(1).click(function () {
        times--;
        if(times==-1){
            times=0;
        }
        miList.css("transform",`translate(${-w*times}px)`);
        button.eq(1).removeClass("hot3");
        button.eq(0).addClass("hot3");
    })


    //为你推荐
    let buttons1=$(".buttons1");
    let buttons2=$(".buttons2");
    let reList=$(".reList");
    let wi=reList.width()/3;
    let times1=0;
    // console.log(buttons1);
    // console.log(buttons1,buttons2,reList,wi);
    buttons1.click(function () {
        times1++;
        if(times1==3){
            times1=2;
        }
        reList.css("transform",`translate(${-wi*times1}px)`);
        console.log(-wi*times1);
        buttons2.addClass("hot3");
        buttons1.removeClass("hot3");
    })
    buttons2.click(function () {
        times1--;
        if(times1==-1){
            times1=0;
        }
        reList.css("transform",`translate(${-wi*times1}px)`);
        buttons2.addClass("hot3");
        buttons1.removeClass("hot3");
    })





    //内容轮播图
    let lunbo1=$(".lunbo1");
    let point1=$(".touch1");
    let leftbtn1=$(".leftbtn1");
    let rightbtn1=$(".rightbtn1");
    let widths1=lunbo1.width();
    // console.log(lunbo1,point1,leftbtn1,rightbtn1,widths1);

    lunbo1.eq(0).css({left:0});
    point1.eq(0).addClass("active1");
    let now1=0;
    let next1=0;
    let flag=true;

    function move1(){
        next1++;
        if(next1==lunbo1.length){
            next1=0;
        }
        lunbo1.eq(next1).css({left:widths1});
        lunbo1.eq(now1).animate({left:-widths1});
        lunbo1.eq(next1).animate({left:0},function () {
            flag=true;
        });
        point1.eq(now1).removeClass("active1");
        point1.eq(next1).addClass("active1");
        now1=next1;
    }
    // 图片向右滑动
    function moveL1() {
        next1--;
        if(next1<0){
            next1=lunbo1.length-1;
        }
        //确保下一张图片永远在最左侧
        lunbo1.eq(next1).css({left:-widths1});
        lunbo1.eq(now1).animate({left:widths1});
        lunbo1.eq(next1).animate({left:0},function () {
            flag=true;
        });
        point1.eq(now1).removeClass("active1");
        point1.eq(next1).addClass("active1");
        now1=next1;
    }
    //点击左箭头
    leftbtn1.click(function () {
        if(now1==0){
            return;
        }
        if(!flag){
            return;
        }
        flag=false;
        moveL1();
    });

    //点击右箭头
    rightbtn1.click(function () {
        if(now1==point1.length-1){
            return;
        }
        if(!flag){
            return;
        }
        flag=false;
        move1();
    });
    //鼠标点击轮播点
    point1.click(function () {
        let i=$(this).index();
        // console.log(i);
        if(now1==i){
            return;
        }else if(now1<i){
            lunbo1.eq(i).css({left:widths1});
            lunbo1.eq(now1).animate({left:-widths1});
            lunbo1.eq(i).animate({left:0},function () {
                flag=true;
            });
            point1.removeClass("active1").eq(i).addClass("active1");
            now1=next1=i;
        }else if(now1>i){
            lunbo1.eq(i).css({left:-widths1});
            lunbo1.eq(now1).animate({left:widths1});
            lunbo1.eq(i).animate({left:0},function () {
                flag=true;
            });
            point1.removeClass("active1").eq(i).addClass("active1");
            now1=next1=i;
        }

    })

    //内容轮播图
    let lunbo2=$(".lunbo2");
    let point2=$(".touch2");
    let leftbtn2=$(".leftbtn2");
    let rightbtn2=$(".rightbtn2");
    let widths2=lunbo2.width();

    lunbo2.eq(0).css({left:0});
    point2.eq(0).addClass("active1");
    let now2=0;
    let next2=0;
    let flag1=true;

    function move2(){
        next2++;
        if(next2==lunbo2.length){
            next2=0;
        }
        lunbo2.eq(next2).css({left:widths2});
        lunbo2.eq(now2).animate({left:-widths2});
        lunbo2.eq(next2).animate({left:0},function () {
            flag1=true;
        });
        point2.eq(now2).removeClass("active1");
        point2.eq(next2).addClass("active1");
        now2=next2;
    }
    // 图片向右滑动
    function moveL2() {
        next2--;
        if(next2<0){
            next2=lunbo2.length-1;
        }
        //确保下一张图片永远在最左侧
        lunbo2.eq(next2).css({left:-widths2});
        lunbo2.eq(now2).animate({left:widths2});
        lunbo2.eq(next2).animate({left:0},function () {
            flag1=true;
        });
        point2.eq(now2).removeClass("active1");
        point2.eq(next2).addClass("active1");
        now2=next2;
    }
    //点击左箭头
    leftbtn2.click(function () {
        if(now2==0){
            return;
        }
        if(!flag1){
            return;
        }
        flag1=false;
        moveL2();
    });

    //点击右箭头
    rightbtn2.click(function () {
        if(now2==point2.length-1){
            return;
        }
        if(!flag1){
            return;
        }
        flag1=false;
        move2();
    });
    //鼠标点击轮播点
    point2.click(function () {
        let n=$(this).index();
        console.log(n);
        if(now2==n){
            return;
        }else if(now2<n){
            lunbo2.eq(n).css({left:widths2});
            lunbo2.eq(now2).animate({left:-widths2});
            lunbo2.eq(n).animate({left:0},function () {
                flag1=true;
            });
            point2.removeClass("active1").eq(n).addClass("active1");
            now2=next2=n;
        }else if(now2>n){
            lunbo2.eq(n).css({left:-widths2});
            lunbo2.eq(now2).animate({left:widths2});
            lunbo2.eq(n).animate({left:0},function () {
                flag1=true;
            });
            point2.removeClass("active1").eq(n).addClass("active1");
            now2=next2=n;
        }

    })


    //内容轮播图
    let lunbo3=$(".lunbo3");
    let point3=$(".touch3");
    let leftbtn3=$(".leftbtn3");
    let rightbtn3=$(".rightbtn3");
    let widths3=lunbo3.width();

    lunbo3.eq(0).css({left:0});
    point3.eq(0).addClass("active1");
    let now3=0;
    let next3=0;
    let flag2=true;

    function move3(){
        next3++;
        if(next3==lunbo3.length){
            next3=0;
        }
        lunbo3.eq(next3).css({left:widths3});
        lunbo3.eq(now3).animate({left:-widths3});
        lunbo3.eq(next3).animate({left:0},function () {
            flag2=true;
        });
        point3.eq(now3).removeClass("active1");
        point3.eq(next3).addClass("active1");
        now3=next3;
    }
    // 图片向右滑动
    function moveL3() {
        next3--;
        if(next3<0){
            next3=lunbo3.length-1;
        }
        //确保下一张图片永远在最左侧
        lunbo3.eq(next3).css({left:-widths3});
        lunbo3.eq(now3).animate({left:widths3});
        lunbo3.eq(next3).animate({left:0},function () {
            flag2=true;
        });
        point3.eq(now3).removeClass("active1");
        point3.eq(next3).addClass("active1");
        now3=next3;
    }
    //点击左箭头
    leftbtn3.click(function () {
        if(now3==0){
            return;
        }
        if(!flag2){
            return;
        }
        flag2=false;
        moveL3();
    });

    //点击右箭头
    rightbtn3.click(function () {
        if(now3==point3.length-1){
            return;
        }
        if(!flag2){
            return;
        }
        flag2=false;
        move3();
    });
    //鼠标点击轮播点
    point3.click(function () {
        let m=$(this).index();
        console.log(m);
        if(now3==m){
            return;
        }else if(now3<m){
            lunbo3.eq(m).css({left:widths3});
            lunbo3.eq(now3).animate({left:-widths3});
            lunbo3.eq(m).animate({left:0},function () {
                flag2=true;
            });
            point3.removeClass("active1").eq(m).addClass("active1");
            now3=next3=m;
        }else if(now3>m){
            lunbo3.eq(m).css({left:-widths3});
            lunbo3.eq(now3).animate({left:widths3});
            lunbo3.eq(m).animate({left:0},function () {
                flag2=true;
            });
            point3.removeClass("active1").eq(m).addClass("active1");
            now3=next3=m;
        }

    })


    //内容轮播图
    let lunbo4=$(".lunbo4");
    let point4=$(".touch4");
    let leftbtn4=$(".leftbtn4");
    let rightbtn4=$(".rightbtn4");
    let widths4=lunbo4.width();

    lunbo4.eq(0).css({left:0});
    point4.eq(0).addClass("active1");
    let now4=0;
    let next4=0;
    let flag3=true;

    function move4(){
        next4++;
        if(next4==lunbo4.length){
            next4=0;
        }
        lunbo4.eq(next4).css({left:widths4});
        lunbo4.eq(now4).animate({left:-widths4});
        lunbo4.eq(next4).animate({left:0},function () {
            flag3=true;
        });
        point4.eq(now4).removeClass("active1");
        point4.eq(next4).addClass("active1");
        now4=next4;
    }
// 图片向右滑动
    function moveL4() {
        next4--;
        if(next4<0){
            next4=lunbo4.length-1;
        }
        //确保下一张图片永远在最左侧
        lunbo4.eq(next4).css({left:-widths4});
        lunbo4.eq(now4).animate({left:widths4});
        lunbo4.eq(next4).animate({left:0},function () {
            flag3=true;
        });
        point4.eq(now4).removeClass("active1");
        point4.eq(next4).addClass("active1");
        now4=next4;
    }
//点击左箭头
    leftbtn4.click(function () {
        if(now4==0){
            return;
        }
        if(!flag3){
            return;
        }
        flag3=false;
        moveL4();
    });

//点击右箭头
    rightbtn4.click(function () {
        if(now4==point4.length-1){
            return;
        }
        if(!flag3){
            return;
        }
        flag3=false;
        move4();
    });
//鼠标点击轮播点
    point4.click(function () {
        let k=$(this).index();
        console.log(k);
        if(now4==k){
            return;
        }else if(now4<k){
            lunbo4.eq(k).css({left:widths4});
            lunbo4.eq(now4).animate({left:-widths4});
            lunbo4.eq(k).animate({left:0},function () {
                flag3=true;
            });
            point4.removeClass("active1").eq(k).addClass("active1");
            now4=next4=k;
        }else if(now4>k){
            lunbo4.eq(k).css({left:-widths4});
            lunbo4.eq(now4).animate({left:widths4});
            lunbo4.eq(k).animate({left:0},function () {
                flag3=true;
            });
            point4.removeClass("active1").eq(k).addClass("active1");
            now4=next4=k;
        }

    })


    //小米倒计时
  let span=document.querySelectorAll(".spans");
  console.log(span);

    setDate();
    setInterval(setDate,1000);
    function setDate(){
        let arr=fn();
        span.forEach((v,index)=>{
            v.innerHTML=arr[index];
        })
    }

    function fn(){
        let now=new Date();
        let future=new Date(2018,9,1);
        let time=Math.floor((future.getTime()-now.getTime())/1000);
        // console.log(time);
        let arr=[];
        //小时
        let hour=Math.floor(time%(30*24*60*60)%(24*60*60)/(60*60));
        if (Math.floor(hour/ 10) == 0) {
            arr.push('0' + hour);
        } else {
            arr.push(hour);
        }
        
        // console.log(hour);
        //分钟
        let min=Math.floor(time%(30*24*60*60)%(24*60*60)%(60*60)/60);
         if (Math.floor(min/ 10) == 0) {
            arr.push('0' + min);
        } else {
            arr.push(min);
        }
        // console.log(min);
        //秒
        let s=Math.floor(time%(30*24*60*60)%(24*60*60)%(60*60)%60);
         if (Math.floor(s/ 10) == 0) {
            arr.push('0' + s);
        } else {
            arr.push(s);
        }
        // console.log(s);

        return arr;

    }



     let back=$(".return4");

    back.click(function () {
        $(document.body).animate({scrollTop:0});
        $(document.documentElement).animate({scrollTop:0});
    })
    $(window).scroll(function () {
        if(document.body.scrollTop>500){
            back.css({display:"block"});
        }else if(document.documentElement.scrollTop>500){
            back.css({display:"block"});
        }else{
            back.css("display","none");
        }
    })

       












})