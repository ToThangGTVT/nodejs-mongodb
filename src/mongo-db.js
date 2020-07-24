import mongoose from 'mongoose';

export default class MongoDb {
  connect =  () => {
    mongoose.connect('mongodb+srv://Tothang:12345678abc@server0-bo7rd.mongodb.net/db_clone?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }).then(()=>{console.log('Success!')}).catch(()=>{console.log('ERROR')});
  }

  getAll = () =>{

    // tạo 1 schema: schema giống như 1 khung để định nghĩa cấu trúc dữ liệu của document
    const Schema = mongoose.Schema;
    const blogSchema = new Schema({
      title:  String,
      author: String,
      body:   String,
      hidden: Boolean,
    });

    // tạo model: model là thành phần giúp xây dựng nên document của mongo (cho phép CRUD)
    const Blog = mongoose.model('Blog', blogSchema);

    // tạo dữ liệu
    const dataInsert = {
      title: 'Lập trình NodeJS căn bản',
      author: 'Freetuts.net',
      body: 'Nội dung lập trình NodeJS căn bản',
      hidden: false,
    };

    // thực hiện xây dựng document
    const blogCollections = new Blog(dataInsert);
    blogCollections.save(function (err, data) {
      if (err) return console.error(err);
      console.log(data)
    });

    Blog.find({},(err,docs)=>{
      console.log(docs)
    })
  }
}