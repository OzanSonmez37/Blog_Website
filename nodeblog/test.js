const mongoose = require('mongoose')

const Post = require('./models/Post')

mongoose.connect('mongodb://127.0.0.1/nodeblog_test_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}) 

Post.findByIdAndDelete('68939569f507a8dfb11c6f10')
    .then(post => {
        console.log(post);
    })
    .catch(error => {
        console.log(error);
    });

/* Post.findByIdAndUpdate('6893944dcad61f7839f8a767', {
    title: 'Güncellenmiş Post Başlığı',
})
.then(post => {
    console.log(post);
})
.catch(error => {
    console.log(error);
}) */

/* Post.find({
    title: 'İkinci Post Başlığım'
})
.then(post => {
    console.log(post);
})
.catch(error => {
    console.log(error);
}) */

/* Post.create({
    title: 'İkinci Post Başlığım',
    content: 'İkinci Post İçeriğim'
})
.then(post => {
    console.log(post);
})
.catch(error => {
    console.log(error);
}); */
