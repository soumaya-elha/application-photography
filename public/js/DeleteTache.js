$(document).ready(function () {

    
        $("#DeleteData").click(function(){  // Recuperation des valeurs
         
            console.log(localStorage.getItem("id"));
                 $.ajax({
                    url:'/DeleteTache',
                    type:'delete',
                    data:{reservation:localStorage.getItem("id")},
                    success:function(response){
                      getData(response);
                    }
                   
                }); 

                
            
        });  
   
});
