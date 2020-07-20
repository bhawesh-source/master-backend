const Category=require("../models/category")

exports.categoryById = (req, res, next, id) => {
    Category.findById(id).exec((err, category) => {
        if (err || !category) {
            return res.status(400).json({
                error: 'Category does not exist'
            });
        }
        req.category = category;
        next();
    });
};

exports.create=(req,res)=>{
  var category=new Category(req.body);
  category.save((err,data)=>{
    if(err)return res.json({error:"Category already defined"});
    res.status(200).json("Category Added");
  })
}

exports.read = (req, res) => {
    return res.json(req.category);
};

exports.update=(req,res)=>{
  const category = req.category;
  category.name = req.body.name;
  category.save((err, data) => {
      if (err) {
          return res.status(400).json({
              error: errorHandler(err)
          });
      }
      res.json(data);
  });
};

exports.remove=(req,res)=>{
  res.json("hi there nothing happens here ")
}

exports.list = (req, res) => {
    Category.find({},"name").exec((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json(data);
    });
};
