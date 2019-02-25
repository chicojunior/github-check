import React from 'react'

const Test = (props) => <h1>Hello {props.name}</h1>

export default Test

// class Comment extends Component {
//   render() {
//     return (
//       <div className="comment">
//         <div className="user-info">
//           <UserInfo user={this.props.user} />
//         </div>
//         <div className="comment__text">
//           {this.props.text}
//         </div>
//         <div className="comment__date">
//           {this.formatDate(this.props.date)}
//         </div>
//       </div>
//     );
//   }
// }


// const UserInfo = (props) => {
//   return (
//     <div className="user-info">

//       <Avatar 
//         className="avatar" 
//         user={props.user}
//       />

//       <h4 className="user-info__name">
//         {props.user.name}
//       </h4>
//     </div>
//   );
// }

// const Avatar = (props) => {
//   return (
//     <img
//       src={props.user.avatarUrl}
//       alt={props.user.name}
//     />
//   );
// }
