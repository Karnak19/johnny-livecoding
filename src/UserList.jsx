import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Card from "./Card";

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          id: 1,
          avatar:
            "https://media-exp1.licdn.com/dms/image/C5103AQHPPX1QTdfsNw/profile-displayphoto-shrink_200_200/0?e=1587600000&v=beta&t=grAwVrQg7_zi3ID1PK4ZOEW3rufA_sKlvUK-__mEfs8",
          desc: "Lorem ipsum",
          fullName: "Jean Toto"
        },
        {
          id: 2,
          avatar:
            "https://www.premiere.fr/sites/default/files/styles/scale_crop_560x800/public/2018-05/Johnny-Hallyday.jpg",
          desc: "Ah que coucou !",
          fullName: "Johnny Hallyday"
        },
        {
          id: 3,
          avatar:
            "https://media-exp1.licdn.com/dms/image/C5103AQHPPX1QTdfsNw/profile-displayphoto-shrink_200_200/0?e=1587600000&v=beta&t=grAwVrQg7_zi3ID1PK4ZOEW3rufA_sKlvUK-__mEfs8",
          desc: "Lorem ipsum",
          fullName: "Jean Toto"
        },
        {
          id: 4,
          avatar:
            "https://media-exp1.licdn.com/dms/image/C5103AQHPPX1QTdfsNw/profile-displayphoto-shrink_200_200/0?e=1587600000&v=beta&t=grAwVrQg7_zi3ID1PK4ZOEW3rufA_sKlvUK-__mEfs8",
          desc: "Lorem ipsum",
          fullName: "Jean Toto"
        }
      ]
    };
    this.deleteUser = this.deleteUser.bind(this);
  }

  deleteUser(id) {
    const users = this.state.users;
    const filteredUsers = users.filter(user => user.id !== id);
    this.setState({
      users: filteredUsers
    });
  }
  render() {
    const { users } = this.state;
    return (
      <Container>
        <Row>
          {users.map(user => (
            <Card {...user} key={user.id} onClick={this.deleteUser} />
          ))}
        </Row>
      </Container>
    );
  }
}
export default UserList;
