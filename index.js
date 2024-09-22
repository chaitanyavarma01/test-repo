const express = require("express");
const app = express()

app.use(express.json());

const users = [{
    name: "Ram",
    kidneys: [{
        healthy: false
    }]
}]

app.get("/", function(req, res){
    const totalKidneys = users[0].kidneys;
    const noKidneys = totalKidneys.length;
    let healthyKidneys = 0;
    for (let i=0; i<noKidneys; i++) {
        if (totalKidneys[i].healthy) {
            healthyKidneys = healthyKidneys + 1;
        }
    }
    res.json({
        noKidneys,
        healthyKidneys
    })
})

app.post("/", function(req, res) {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push ({
        healthy: isHealthy
    })
    res.json({
        msg:"Done!"
    })
})

app.delete("/", function(req, res) {
    const newKidneys = [];
    for ( let i=0; i< users[0].kidneys.length; i++) {
        if (users[i].kidneys[i].healthy) {
            newKidneys.push ({ 
                healthy: true
            })
        }
    }
    users[0].kidneys=newKidneys;
    res.json ({
        msg: "Done"
    })
})

app.listen(3002);