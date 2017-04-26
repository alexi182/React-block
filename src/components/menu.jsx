import { Link } from 'react-router';
const menu = require('../menu.json');

export default class Menu extends React.Component {
   constructor(props) {
      super(props);
   }

   render() {
      return (
          <ul class="nav navbar-nav">
             {/*{ this.props.children }*/}
             { menu.map((menuLink, index) =>
                 <li key={index}>
                    <Link to={ menuLink.href }>{ menuLink.title }</Link>
                 </li>
             )}
          </ul>
      );
   }
}