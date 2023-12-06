package MT.Server.Tables;
import jakarta.persistence.*;

@Entity
@Table(name="session")
public class Session {



  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long sessionId;

  public Session(Long sessionId) {
    this.sessionId = sessionId;
  }

  public Long getSessionId() {
    return sessionId;
  }

  public void setSessionId(Long sessionId) {
    this.sessionId = sessionId;
  }

  @Override
  public String toString() {
    return "Session{" + "sessionId=" + sessionId + '}';
  }
}
