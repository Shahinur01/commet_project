const {json}=require('express');
const {readFileSync}=require('fs');
const path=require('path');


const homePageController=(req, res) => {
    const slider=readFileSync(path.join(__dirname,"../db/slider.json"));
    const images=readFileSync(path.join(__dirname,"../db/images.json"));
    const post=readFileSync(path.join(__dirname,"../db/post.json"));
    res.render('index',{
        slider:JSON.parse(slider.toString()),
        images:JSON.parse(images.toString()),
        post:JSON.parse(post.toString())

    })
}
const shopPage3Col=(req, res) => {
    const category=readFileSync(path.join(__dirname,"../db/categories.json"));
    res.render('shop',{ 
        category:JSON.parse(category.toString()),
    })
}

const shopPageSingle=(req, res) => {
    res.render('shopSinglePage',{})
}


module.exports ={
    homePageController,shopPage3Col,shopPageSingle
}