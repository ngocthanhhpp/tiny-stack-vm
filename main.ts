import{readdirSync as R,readFileSync as F,writeFileSync as W,mkdirSync as K}from'fs'
const E=process.env,I=E.MAKEFUN_INPUT_DIR||'/input',O=E.MAKEFUN_OUTPUT_DIR||'/output'
let a,b,v,y,t,u,w
for(const d of R(I)){let f=`${I}/${d}/`,p=F(f+'program.bin'),q=F(f+'input.bin'),n=p.length,D=new Int32Array(257),M=new Int32Array(256),C=[],o=Buffer.alloc(65536),s=0,l=0,i=0,c=0,x=0,e=0
try{for(;;){v="2Cs57:;>        999999969996999 999             RUUR2           68              5535".charCodeAt(t=p[x])-48
if(e=c++==1e6?10:x<0|x>=n?9:!(v>=0)?5:(y=x-~(v>>4))>n?9:s<(v>>2&3)?2:s+(v&3)>258?3:0)throw 0;x=y
switch(t){case 0:throw 0
case 1:D[s++]=p[y-1]<<24>>24;break
case 2:D[s++]=p.readInt32LE(y-4);break
case 3:s--;break
case 4:case 6:D[s]=D[s++-t/2+1];break
case 5:case 7:D[s]=D[a=s-t/2+.5];D.copyWithin(a,a+1);break
case 23:D[s-1]*=-1;break
case 27:D[s-1]^=-1;break
case 49:case 50:if(!D[--s]==t-49)break
case 48:x+=p.readInt16LE(y-2);break
case 51:if(C.length>63)throw e=7;C.push(y);x=p.readUInt16LE(y-2);break
case 52:if(!C.length)throw e=8;x=C.pop();break
case 64:case 65:a=D[s-1];if(a>>>0>255)throw e=6;t>64?(M[a]=D[s-2],s-=2):D[s-1]=M[a];break
case 80:case 81:a=t>80?[D[s-1]]:Buffer.from(''+D[s-1]);if(l+a.length>65536)throw e=11;o.set(a,l);l+=a.length;s--;break
case 82:D[s++]=q[i++]??-1;break
case 83:throw e=D[--s]&255
default:b=D[--s];a=D[s-1];if(t>18&t<23&&!b)throw e=4;D[s-1]=[a+b,a-b,Math.imul(a,b),a/b,a%b,(u=a>>>0)/(w=b>>>0),u%w,,a&b,a|b,a^b,,a<<b,a>>b,a>>>b,,a==b,a<b,u<w][t-16]}}}catch{}
K(f=O+'/'+d,{recursive:!0});W(f+'/stdout.bin',o.subarray(0,l));W(f+'/exit.txt',''+e)}
