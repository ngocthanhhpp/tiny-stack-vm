import{readdirSync as R,readFileSync as F,writeFileSync as W,mkdirSync as K}from'fs'
for(const d of R('/input')){let f=`/input/${d}/`,p=F(f+'program.bin'),q=F(f+'input.bin'),n=p.length,D=new Int32Array(257),M=new Int32Array(256),C=[],o=Buffer.alloc(65536),s=0,l=0,i=0,c=0,x=0,e=0,a,b,v,y,t
r:for(;;){if(c++==1e6){e=10;break}if(x<0||x>=n){e=9;break}v="2Cs57:;>        999999969996999 999             RUUR2           68              5535".charCodeAt(t=p[x])-48
if(!(v>=0)){e=5;break}y=x-~(v>>4);if(y>n){e=9;break}if(s<(v>>2&3)){e=2;break}if(s+(v&3)>258){e=3;break}x=y
if(v==9){b=D[--s];a=D[s-1];if(t>18&&t<23&&!b){e=4;break}D[s-1]=[a+b,a-b,Math.imul(a,b),a/b,a%b,(a>>>0)/(b>>>0),(a>>>0)%(b>>>0),,a&b,a|b,a^b,,a<<b,a>>b,a>>>b,,a==b,a<b,a>>>0<b>>>0][t-16];continue}
switch(t){case 0:break r
case 1:D[s++]=p[y-1]<<24>>24;break
case 2:D[s++]=p.readInt32LE(y-4);break
case 3:s--;break
case 4:D[s]=D[s++-1];break
case 5:a=D[s-1];D[s-1]=D[s-2];D[s-2]=a;break
case 6:D[s]=D[s++-2];break
case 7:a=D[s-3];D[s-3]=D[s-2];D[s-2]=D[s-1];D[s-1]=a;break
case 23:D[s-1]*=-1;break
case 27:D[s-1]=~D[s-1];break
case 49:case 50:if(!D[--s]==t-49)break
case 48:x+=p.readInt16LE(y-2);break
case 51:if(C.length>63){e=7;break r}C.push(y);x=p.readUInt16LE(y-2);break
case 52:if(!C.length){e=8;break r}x=C.pop();break
case 64:case 65:a=D[s-1];if(a>>>0>255){e=6;break r}if(t>64)M[a]=D[s-2],s-=2;else D[s-1]=M[a];break
case 80:a=''+D[s-1];if(l+a.length>65536){e=11;break r}l+=o.write(a,l);s--;break
case 81:if(l>65535){e=11;break r}o[l++]=D[--s];break
case 82:D[s++]=i<q.length?q[i++]:-1;break
case 83:e=D[--s]&255;break r}}
K(f='/output/'+d,{recursive:true});W(f+'/stdout.bin',o.subarray(0,l));W(f+'/exit.txt',''+e)}
