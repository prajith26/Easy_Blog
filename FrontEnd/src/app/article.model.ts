export class ArticleModel{
    constructor(
        public _id: string,
        public article_title: string,
        public article_author: string,
        public article_category: String,
        public article_createdon: Date,
        public article_content: String,
        public article_image: String
    ){}
}
