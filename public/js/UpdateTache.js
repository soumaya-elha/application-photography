$(document).ready(function () {

    
    $("#sub").click(function(){  // Recuperation des valeurs
     
        console.log(localStorage.getItem("id"));
        var name = $("#nom").val();
        var prenom = $("#prenom").val();
        var email = $("#email").val();
        var telphone = $("#telphone").val();
        var version = $("#version").val();
             $.ajax({
                url:'/UpdateTache',
                type:'post',
                data:{index:localStorage.getItem("id"),tache:{name,prenom,email,telphone,version}},
                success:function(response){
                  getData(response);
                }
               
            }); 

            
        
    });  
    $("#sub").click(function(){  // Recuperation des valeurs
     
        console.log(localStorage.getItem("id"));
        var name = $("#nom").val();
        var prenom = $("#prenom").val();
        var email = $("#email").val();
        var telphone = $("#telphone").val();
        var version = $("#version").val();
             $.ajax({
                url:'/UpdateTache',
                type:'post',
                data:{index:localStorage.getItem("id"),tache:{name,prenom,email,telphone,version}},
                success:function(response){
                  getData(response);
                }
               
      }); 

            
        
    });  

});