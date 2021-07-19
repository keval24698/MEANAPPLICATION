const routers = require("express").Router();
const Listing = require("../model/Listing");
const bodyParser = require('body-parser');
const cJSON = require("circular-json");
routers.use(bodyParser.json()); 
routers.use(bodyParser.urlencoded({ extended: true }));

routers.delete("/:id",async(req,res)=>{
    //return ("Hello Users!");
    //const titleData = Listing.findOne(req.body.title);
    //if(titleData==req.body.title) return res.send("Title Exist!");
    const listing = new Listing(
        {
            title:req.body.title,
            Name:req.body.Name
        }
    );
    listing._id = req.params.id;
    try{
        res.setHeader('Access-Control-Allow-Origin', '*');
        const saveData = await Listing.findByIdAndDelete({_id:req.params.id});
        
        res.json(saveData);
    }catch(error)
    {
        console.log(error);
        res.send(error.json);
    }
});

routers.put("/:id",async(req,res)=>{
    const listing = new Listing(
        {
            title:req.body.title,
            Name:req.body.Name
        }
    );
    listing._id = req.params.id;
    //delete listing._id;
    console.log(listing);
    try{
        res.setHeader('Access-Control-Allow-Origin', '*');
        const saveData = await Listing.findByIdAndUpdate(
            {_id:req.params.id},
            listing
        );
        res.json(listing.Name);
    }catch(error)
    {
        console.log(error);
        res.send({message:error});
    }
});

routers.post("/",async (req,res)=>{
    //return ("Hello Users!");
    //const titleData = await Listing.findOne(req.body.title);
    //if(titleData==req.body.title) return res.send("Title Exist!");
    const listing = new Listing(
        {
            title:req.body.title,
            Name:req.body.Name
        }
    );
    try{
        res.setHeader('Access-Control-Allow-Origin', '*');
        console.log(req.body.Name);
        const saveData = await listing.save();
        res.json(saveData);
    }catch(error)
    {
        console.log(req.body.Name);
        res.status(404).send('Sorry, Cant Save!');
    }
});

routers.get("/",async (req,res)=>{

try{
    res.setHeader('Access-Control-Allow-Origin', '*');
    const datas =await Listing.find();
    if(datas.length==0) return res.status(404).send("not found");
    res.json(datas);
}catch(error){
    res.send({message:error});
}
    
    
});

routers.get("/:id",async (req,res)=>{

    try{
        res.setHeader('Access-Control-Allow-Origin', '*');
        const datas =await Listing.findById(req.params.id);
        if(datas.length==0) return res.status(404).send("not found");
        res.json(datas);
    }catch(error){
        res.send({message:error});
    }
        
        
    });
module.exports = routers;