function index(req , res) {
   // res.send('<h1>Hello from main controller </h1>')
   
   res.render('pages/index.ejs' , 
   {title : "Home Page"});
}

function about(req , res) {
    res.render('pages/about.ejs' , 
    {title : "About Page"});
}
function post(req , res) {
    res.render('pages/post.ejs' , 
    {title : "Post Page"});
}

function contact(req , res) {
    res.render('pages/contact.ejs' , {
        title : "Contact Page"
    });
}
app.get('/', (req, res) => {
    const title = 'My Website';
    const tags = ['tag1', 'tag2', 'tag3'];
  
    res.render('main', { title, tags });
  });
module.exports = {
    index,
    about ,
    contact,
    post
}