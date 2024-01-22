package MT.Server;

import MT.Server.ResourceNotFoundException;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class ResourceNotFoundExceptionTest {

    @Test(expected = ResourceNotFoundException.class)
    public void testResourceNotFoundException() {
        // Arrange
        String errorMessage = "Ressource nicht gefunden";

        // Act
        throw new ResourceNotFoundException(errorMessage);
    }

    @Test
    public void testResourceNotFoundExceptionMessage() {
        // Arrange
        String errorMessage = "Ressource nicht gefunden";
        ResourceNotFoundException exception = new ResourceNotFoundException(errorMessage);

        // Act
        String actualMessage = exception.getMessage();

        // Assert
        assertEquals(errorMessage, actualMessage);
    }
}
