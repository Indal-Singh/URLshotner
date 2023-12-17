const URLModel = require('../models/url');
const shortID = require('short-id-gen')
const getShortID = shortID.generate();
const handelShortID = async (req,res) => {
    const body = req.body 
    if(!body.url)
    {
        res.json({err: "Url is required"})
        return;
    }
    await URLModel.create({
        shortId : getShortID,
        redirectURL: body.url,
        historyAnalytics : []
    })

   return res.json(
        {
            shortID : getShortID
        }
    )
}

const handelRedirect = async (req,res) =>
{
    const shortID = req.params.shortID;
    console.log(req.params.shortID)
    if(shortID=='favicon.ico')
    {
        res.render('home/index');
    }
    const urlData = await URLModel.findOneAndUpdate(
        { shortId:shortID },
        { $push: { historyAnalytics: {
            timestamp: Date.now()
        } } }
    );
    if(urlData!=null)
    {
        return res.redirect(`${urlData.redirectURL}`)
    }
}

module.exports = { handelShortID, handelRedirect};
