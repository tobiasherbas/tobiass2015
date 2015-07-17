(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    $("body").append('<a id="golista" href="#servicios"></a>');
    
        /* button  ingresar */
    $(document).on("click", ".uib_w_5", function(evt)
    {
        /* your code goes here */ 
        
          var usuario= $("#idusario").val();
         var contraseña= $("#idcontraseña").val();
         
         
         var param = {};
         param.usuario= usuario;
         param.contraseña=contraseña;
         
         
         ajax({
         type: "POST",
          URL: "http://192.168.56.1:9095/getLogin",
          data:"data="+JSON.stringify(param),
          dataType:'text',
            
              success:function(data){
               var data=JSON.parse(data);
                
                if(data.estado===1){
                    navigator.notification.confirm('INGRESASTE',function(){  
                              $("#goservicios").click();
                                
                                                        
                                                    },'MENSAJE','ACEPTAR');
                }else{
                 navigator.notification.confirm('ACCESO DENEGADO',function(){
                        
                                                    },'MENSAJE','ACEPTAR');   
                }
            }
    
         
         });    
        
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
