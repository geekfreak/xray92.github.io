q58="style.visibility=\"visible\"";q59="style.visibility=\"hidden\"";var q20=new Array();var q21=new Array();off_y=0;off_x=0;if((mac)&&(ie5)&&(!ie6)&&(!ie4)&&(!ns5)){off_x=DQM_ie5mac_offset_X;off_y=DQM_ie5mac_offset_Y;}if(!window.DQM_cancel_onload)onload=DQM_handleOnload;onresize=q31;while(eval("window.DQM_subdesc"+q18+"_0")){q0(q18+"");q18++;}for(var j=0;j<q19.length;j++)q0(q19[j]);;function q0(mindex){level=0;i=0;while((i=mindex.indexOf("_",i+1))>-1)level++;bw=getLevelVal(mindex,"_width",DQM_border_width);q50=q15("DQM_sub_menu_width"+mindex,DQM_sub_menu_width);sd="";tin="";if((!ns5)&&(!mac)&&(!ie4))tin=" background-color:#ffffff;filter:alpha(opacity=0);";q47="position:absolute;top:"+0+";left:"+0+";visibility:hidden;width:";sd+="<div id=qmevent"+mindex+" style='z-index:901"+level+";"+q47+(q50+2)+";"+tin+"'";sd+=" onmousemove=\"q2(event,'"+mindex+"')\"";sd+=" onmouseout=\"q3(event,'"+mindex+"')\"";sd+=" onclick=\"q12(event,'"+mindex+"')\"";sd+="></div>";bc=getLevelVal(mindex,"_color",DQM_border_color);sd+="<div id=qm"+mindex+" style='z-index:900"+level+";"+q47+q50+";";if(bc!="transparent")sd+=" background-color:"+bc+";";sd+="'>";i=0;while(eval("window.DQM_subdesc"+mindex+"_"+i)){id=mindex+"_"+i;if(eval("window.DQM_subdesc"+id+"_0"))q19=q19.concat(new Array(id));iid=-1;tval=eval("window.DQM_icon_index"+mindex+"_"+i);if((tval || tval==0)&& eval("window.DQM_icon_image"+tval)){iid=tval;q52=q33(eval("DQM_icon_image_wh"+iid));q51=eval("window.DQM_icon_rollover"+iid);}ttn=0;if(ns5)ttn=DQM_margin_left;tpx=DQM_fontsize+"px";if(ie4)tpx=DQM_fontsize_ie4+"pt";q47="style='position:absolute;left:"+bw+";top:"+bw+";width:"+(q50-(bw*2)-ttn)+";";q48=" font-weight:"+DQM_fontweight+";font-size:"+tpx+";font-family:"+DQM_fontfamily+";padding-left:"+DQM_margin_left+";padding-top:"+DQM_margin_top+";padding-bottom:"+DQM_margin_bottom+";";q49="";if(iid>-1)q49="' border=0 width='"+q52[0]+"' height='"+q52[1]+"'>";sd+="<div id=qmitem"+id+" "+q47+" background-color:"+DQM_menu_bgcolor+";";sd+=q48+" text-decoration:"+DQM_textdecoration+";color:"+DQM_textcolor+";";sd+="'>";if(iid>-1)sd+="<img src='"+eval("DQM_icon_image"+iid)+q49;sd+=eval("DQM_subdesc"+id)+"</div>";sd+="<div id=qmitemhl"+id+" "+q47+" visibility:hidden;background-color:"+DQM_hl_bgcolor+";";sd+=q48+" text-decoration:"+DQM_hl_textdecoration+";color:"+DQM_hl_textcolor+";";sd+="'>";if(iid>-1)sd+="<img src='"+q51+q49;sd+=q15("hl_DQM_subdesc"+id,eval("DQM_subdesc"+id))+"</div>";i++;}document.write(sd+"</div>");};function q1(id,main){sub=q16("qm"+id);sube=q16("qmevent"+id);bw=getLevelVal(id+"","_width",DQM_border_width);sub.bw=bw;if(!q61){(ns5)? subc=sub.getElementsByTagName("div"):subc=sub.children;q53=new Array(subc.length/2);q54=new Array(subc.length/2);ih=bw;rc=0;for(j=0;j<subc.length;j=j+2){subc[j].style.top=ih;subc[j+1].style.top=ih;q53[rc]=ih;q54[rc]=subc[j].offsetHeight;ih+=q54[rc]+dh;if(j>subc.length-3)ih=ih - dh;rc++;}ih+=bw;sub.style.height=ih;sub.q55=q53;sub.q56=q54;sub.lasthl=null;sub.q60=null;sube.style.height=ih+2;}sxy=q33(q15("DQM_sub_xy"+id,DQM_sub_xy));if(main){q85=q16("menu"+id);tc=q17(q85);sub.style.left=tc.x+sxy[0]+q85.offsetWidth+off_x;sub.style.top=tc.y+sxy[1]+off_y;sube.style.left=tc.x+sxy[0]+q85.offsetWidth-1+off_x;sube.style.top=tc.y+sxy[1]-1+off_y;}};function q2(e,id){menu=q16("qm"+id);bw=menu.bw;x=e.clientX;y=e.clientY;mx=menu.offsetLeft+off_x;my=menu.offsetTop+off_y;mw=menu.offsetWidth;s=q14();for(i=0;i<menu.q55.length;i++){if(x>mx+bw-s.x && x<mx+mw-bw-s.x && y>my+menu.q55[i]-s.y && y<my+menu.q55[i]+menu.q56[i]-s.y){if(menu.lasthl!=(id+"_"+i))q5(menu,id+"_"+i);return;}}q30(menu);};function q3(e,id){menu=q16("qm"+id);q30(menu);if((ti=id.indexOf("_"))>-1)id=id.substring(0,ti);if(!q7(e.clientX,e.clientY,id)){if(!q7(e.clientX,e.clientY,id,true)){q6(id);q27(id);}}};function q4(menu){hl_obj=q16("qmitemhl"+menu.lasthl);eval("hl_obj."+q59);menu.lasthl=null;};function q5(menu,hl_id){if((menu.lasthl!=null)&&(menu.lasthl!=hl_id))q4(menu);hl_obj=q16("qmitemhl"+hl_id);eval("hl_obj."+q58);if(menu.q60!=null)q6(menu.q60);(showMenu(null,hl_id))? menu.q60=hl_id:menu.q60=null;menu.lasthl=hl_id;};function showMenu(e,id){if(!q61)return;if(!id){(ns5)?id=(e.target.id+"").substring(4):id=(e.srcElement.id+"").substring(4);if(eval("window.DQM_rollover_image"+id)){timg=q16("menu"+id);timg.src=q20[id].src;}}if(q15("DQM_subdesc"+id+"_0",null)!=null){menu=q16("qm"+id);q57=q16("qmevent"+id);eval("menu."+q58);eval("q57."+q58);return true;}return false;};function q6(id){tm=q16("qm"+id);tme=q16("qmevent"+id);eval("tm."+q59);eval("tme."+q59);ts=tm.q60;if(ts!=null){tm.q60=null;q30(tm);q6(ts);}};function hideMenu(e,id){if(!q61)return;nid=id;if(!id)(ns5)?nid=(e.target.id+"").substring(4):nid=(e.srcElement.id+"").substring(4);fxy=0;if(ns5)fxy=2;if((q15("DQM_subdesc"+nid+"_0",null)!=null)&&(!q7(e.clientX+fxy,e.clientY+fxy,nid))){q6(nid);if(!id) q27(nid);}};function q7(x,y,id,main){if(main)tm=q16("menu"+id);else tm=q16("qm"+id);mx=tm.offsetLeft+off_x;my=tm.offsetTop+off_y;mw=tm.offsetWidth+1;mh=tm.offsetHeight+1;s=q14();if((x>mx-s.x)&&(x<mx+mw-s.x)&&(y>my-s.y)&&(y<my+mh-s.y))return true;if(!main){if(tm.q60!=null)return q7(x,y,tm.q60);else return false;}};function q12(e,id){menu=q16("qm"+id);if(menu.lasthl!=null)q32(menu.lasthl);};function q14(){q69=new Object();if(ns5){q69.y=window.pageYOffset;q69.x=window.pageXOffset;}else {q69.y=document.body.scrollTop;q69.x=document.body.scrollLeft;}return q69;};function q15(pname,rv){if(eval("window."+pname))return eval(pname);else return rv;};function q16(id){if(ns5)return eval("document.getElementById(\""+id+"\")");else return eval(id);};function q17(o){var q70=new Object();q70.x=o.offsetLeft;q70.y=o.offsetTop;q64=o.offsetParent;while(q64 !=null){q70.y+=q64.offsetTop;q70.x+=q64.offsetLeft;q64=q64.offsetParent;}return q70;}
