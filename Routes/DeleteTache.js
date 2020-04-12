var express = require('express');
const fs = require('fs');


module.exports = (function() {
    var api = express.Router();
    api.route("/DeleteTache").delete((req,res)=>{   
     
        
                                                //Recuperation d'un fichier Json 
                                                
                                                fs.readFile('../public/users.json', 'utf8', (err, jsonString) => {
                                                    if (err) {
                                                        console.log("File read failed:", err)
                                                        return
                                                    }
                                                data =JSON.parse(jsonString) ;
                                                //Get parameters
                                                data.splice(req.body.index,1);
                                                //update file data Login.json
                                                dataUpdated=JSON.stringify(data);
                                                fs.writeFileSync('../public/users.json', dataUpdated);
                                                //Response to clients
                                                res.send({request:true,data});
                                                res.end();

                                            }) 
    
    });
    return api;
})();