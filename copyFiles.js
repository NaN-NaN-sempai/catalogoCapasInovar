var fs = require("fs");

//var location = "../CAPAS"
var location = "./models"

var obj = {}

var nowi = 0;

fs.readdirSync(location).forEach(cat => {
    
    if(!fs.lstatSync(location + "/" + cat).isDirectory()) return;


    fs.readdirSync(location + "/" + cat).forEach(mod => {
        if(!fs.lstatSync(location + "/" + cat + "/" + mod).isDirectory()) return;

        
        fs.readdirSync(location + "/" + cat + "/" + mod).forEach(arq => {
            var arqL = arq.toLowerCase();

            var isImg = arqL.includes(".jpg") ||
                        arqL.includes(".jpeg") ||
                        arqL.includes(".png");

            if(!isImg) return;

            if(!obj[cat]) obj[cat] = {};

            if(!Array.isArray(obj[cat][mod])){
                obj[cat][mod] = [];/* 
                if(!fs.existsSync("./models/" + cat)) fs.mkdirSync("./models/" + cat);
                if(!fs.existsSync("./models/" + cat + "/" + mod)) fs.mkdirSync("./models/" + cat + "/" + mod); */
            }
/* 
            fs.copyFileSync(location + "/" + cat + "/" + mod + "/" + arq, "models/" + cat + "/" + mod + "/" + arq); */
            obj[cat][mod].push(arq);

            console.clear();
            console.log("Now: "+ nowi++)

        })
    })
})


fs.writeFileSync('modelos.json', JSON.stringify(obj, null, 4), 'utf8');