(()=>{"use strict";!function(){const e=document.getElementById("board");for(let t=0;t<8;t++)for(let d=0;d<8;d++){const s=document.createElement("div"),a=document.createElement("div");s.id=`${t}x${d}`,s.classList.add("square"),(t+d)%2==0?s.classList.add("cream"):s.classList.add("tan"),e.append(s),(t+d)%2==1&&t<3&&a.classList.add("red"),(t+d)%2==1&&t>4&&a.classList.add("black"),s.append(a)}}()})();