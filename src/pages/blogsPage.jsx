import { autobind } from 'core-decorators';

import BlogList from '../components/blogList';

@autobind()
export default class BlogsPage extends React.Component {
   constructor(props) {
      super(props);

      this.url = 'https://jsonplaceholder.typicode.com/posts/';

      this.state = { //initial state
         blogs: []
      };
   }

   like(blogId) {
      let blog = this.state.blogs.find(b => b.id == blogId);

      if (!blog) return;
      if (!blog.likes) blog.likes = 0;

      blog.likes++;
      this.forceUpdate();
   }

   dislike(blogId) {
      let blog = this.state.blogs.find(b => b.id == blogId);

      if (!blog) return;
      if (!blog.dislikes) blog.dislikes = 0;

      blog.dislikes++;
      this.forceUpdate();
   }

   add({ title, body }) {
      let maxId = Math.max(...this.state.blogs.map(b => b.id));
      let blog = { title, body, userId: 1, id: maxId + 1 };
      let blogs = this.state.blogs.slice(0);

      blogs.push(blog);

      this.setState({
         blogs
      });
   }

   // componentWillMount() { //сработает когда компонент только монтируется в Virtual DOM
   // }

   componentDidMount() { //компонент вмонтирован в VD
      axios.get(this.url)
          .then(response => {
             this.setState({ //обновляем состояние компонента
                blogs: response.data
             });
          });
   }

   // componentWillUnmount() { //компонент собирается выгрузиться из VD
   // }

   // shouldComponentUpdate() { //возвращает true/false, показыват должна ли быть осуществлена перерисовка компонента
   // }

   // componentWillReceiveProps(props) {
   // }

   // componentWillUpdate() {
   // }

   // componentDidUpdate() {

   // }

   render() {
      return (
          <div>
              <h2 class="text-center">Blogs</h2>
              <BlogList like={this.like} dislike={this.dislike} add={this.add} blogs={this.state.blogs} />
          </div>
      );
   }
}