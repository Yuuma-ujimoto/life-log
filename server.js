const express = require("express")
const app = express()
const cors = require("cors")
const session = require("express-session")
const mongoClient = require("mongodb").MongoClient


const option = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
const url = "mongodb://localhost:27017/mydb"

app.use(express.urlencoded({extended: true}));
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    cookie:{
        httpOnly: true,
        secure: false,
        maxage: 1000 * 60 * 60 * 24 * 30
    }
}))



app.use(cors({
    origin: '*',
    credentials: true,
    optionsSuccessStatus: 200
}))
app.use(express.urlencoded({extended: true}));


app.get("/get-category",async (req, res) => {
    let client
    try{
        client = await mongoClient.connect(url,option)
        const db = client.db("lifeLog")
        const category_collection = db.collection("category")
        const category = await category_collection.find({delete:0},{projection:{_id:1,category_name:1,count_type:1}}).toArray()
        console.log(category)
        res.json({
            result:category,
            error:false
        })
    }catch (e) {
        res.json({error:true})
    }finally {
        if(client){
            await client.close()
        }
    }
})

app.post("/add-category",async (req, res) => {
    const category = req.body.category
    const count_type = req.body.count_type
    if(!category||!count_type){
        res.json({error:true})
        return
    }
    let client
    try{
        client = await mongoClient.connect(url,option)
        const db = client.db("lifeLog")
        const category_collection = db.collection("category")
        const check_category = await category_collection.countDocuments({category_name:category,count_type:count_type,delete:0})
        if(check_category){
            res.json({error:true,message:"既に存在するカテゴリー名です。"})
            return
        }
        await category_collection.insertOne({category_name:category,count_type:count_type,delete:0})
        res.json({error:false})
    }catch (e){
        res.json({error:true,message:"内部エラー"})
    }finally {
        if(client){
            await client.close()
        }
    }
})

app.listen(3000)