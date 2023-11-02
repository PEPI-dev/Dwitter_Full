import express from "express"
import * as tweetController from '../controller/tweet.js'

const router = express.Router()



// GET / tweets
router.get('/',tweetController.getTweets)
// GET / tweets?username=:username;
router.get('/',(req,res,next) => {
    const username = req.query.username
    const data = username
        ? tweets.filter((tweet) => tweet.username === username)
        : tweets
    res.status(200).json(data)
})

// GET / tweets/:id
router.get('/:id', tweetController.getTweet)
// POST / tweets
router.post('/', tweetController.createTweet)
// PUT / tweets/:id
router.put('/:id', tweetController.updateWeet)
// DELETE / tweets/:id
router.delete('/:id', tweetController.deleteTweet)


export default router