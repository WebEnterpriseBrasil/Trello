const resizeBoxHeight=()=>{if(jQuery(window).width()>1099){jQuery(".page-template-home-template section").each(function(){const e=jQuery(this).find(".image img").height();jQuery(this).find(".text .inner").css("min-height",e)});const e=jQuery(".page-template-home-template .terceira-sessao .text .inner").css("min-height").replace("px","");jQuery(".page-template-home-template .g-letter").height(2*e)}else jQuery(this).find(".text .inner").css("min-height","auto")};window.addEventListener("load",function(e){resizeBoxHeight()}),window.addEventListener("resize",function(e){resizeBoxHeight()});