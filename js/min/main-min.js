!function(){var c="a5e95177da353f58113fd60296e1d250",i="24662369@N07",o="https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key="+c+"&user_id="+i+"&format=json&nojsoncallback=1";$.getJSON(o,{format:"json"}).done(function(c){$.each(c.photos.photo,function(c,i){var o="",s="https://farm"+i.farm+".staticflickr.com/"+i.server+"/"+i.id+"_"+i.secret+".jpg";return o="<div class='sm-col sm-col-6 md-col-4 lg-col-3 item'>",o+="<div class='pic-card mx2 mb3'><div class='pic-crop'>",o+="<img src='"+s+"' alt='"+i.title+"' /></div>",o+="<p class='p2 m0'>"+i.title+"</p>",o+="</div></div>",$("#images").append(o),23===c?!1:void 0})})}();