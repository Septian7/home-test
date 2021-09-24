const request = require("request");
const url = "http://dev3.dansmultipro.co.id/api/recruitment/positions.json";

class apiController {
  static async show(req, res) {
    try {
        request({
            url: url,
            json: true
        }, function (error, response, body) {
        
            if (!error && response.statusCode === 200) {
                res.status(200).json(body)
            }
        })
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async search(req,res){
      try{
        let data = request({
            url: url,
            json: true
        }, function (error, response, body) {
        
            if (!error && response.statusCode === 200) {
                res.status(200).json(body)
            }
        })
        res.status(200).json(data)
      }catch(err){
          res.status(500).json(err)
      }
  }

  static async detail(req, res){
      try{
        const id = req.params.id
        console.log(id)
        request({
            url: url,
            json: true
        }, function (error, response, body) {
        
            if (!error && response.statusCode === 200) {
                let result=''
                body.forEach(bd=>{
                    if(bd.id===id){
                        result=bd
                    }
                })
                if(result){
                    res.status(200).json(result)
                }else{
                    res.status(404).json({
                        message:'id not found!'
                    })
                }
            }
        })
      }catch(err){
          res.status(500).json(err)
      }
  }
}

module.exports = apiController;
