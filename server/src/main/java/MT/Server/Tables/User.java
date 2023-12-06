package MT.Server.Tables;

import jakarta.persistence.*;

@Entity
@Table(name="user")
public class User {




  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long userId;

  @Column(name = "Username")
  private String userName;
  public User(){
  }
  public User(Long userId, String userName) {
    this.userId = userId;
    this.userName = userName;
  }

  public Long getUserId() {
    return userId;
  }

  public void setUserId(Long userId) {
    this.userId = userId;
  }

  public String getUserName() {
    return userName;
  }

  public void setUserName(String userName) {
    this.userName = userName;
  }
  @Override
  public String toString() {
    return "User{" + "userId=" + userId + ", userName='" + userName + '\'' + '}';
  }
}