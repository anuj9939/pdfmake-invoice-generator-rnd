﻿var wsDialogHtml=function(){this.updateCulturesSelect=function(d,b){var a=document.getElementById(d._.inputId);for(var c=a.options.length-1;c>=0;c--){a.remove(c)}for(var c=0;c<b.length;c++){a.options.add(new Option(b[c],b[c]))}}};CKEDITOR.dialog.add("webspeechDialog",function(b){var c=new wsDialogHtml();var a=b.ckWebSpeech._currentCulture.val;return{title:"WebSpeech Settings",minWidth:400,minHeight:200,contents:[{id:"tab-basic",label:"Basic Settings",elements:[{type:"select",id:"wslanguages",label:"Languages",items:b.ckWebSpeech.getLanguages(),"default":b.ckWebSpeech._currentCulture.langVal,onChange:function(g){var f=CKEDITOR.dialog.getCurrent();var e=f.getContentElement("tab-basic","wscultures");var d=b.ckWebSpeech.getCultures(g.data.value);e.setup({selCultures:e,options:d});e.fire("change",{value:d[0][0]},b)},onShow:function(f){var d=CKEDITOR.dialog.getCurrent();var e=d.getContentElement("tab-basic","wslanguages");document.getElementById(e._.inputId).value=b.ckWebSpeech._currentCulture.langVal}},{type:"select",id:"wscultures",label:"Culture",items:b.ckWebSpeech.getCultures(),"default":b.ckWebSpeech._currentCulture.val,onChange:function(d){a=d.data.value},setup:function(d){c.updateCulturesSelect(d.selCultures,d.options)},onShow:function(f){var e=CKEDITOR.dialog.getCurrent();var d=e.getContentElement("tab-basic","wscultures");document.getElementById(d._.inputId).value=b.ckWebSpeech._currentCulture.val}}]},{id:"tab-adv",label:"Advanced Settings",elements:[]}],onOk:function(){b.ckWebSpeech.setDialectByCulture(a)}}});