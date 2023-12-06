package MT.Server;

import org.junit.Assert;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class ServerApplicationTests {

	private Router testRouter = new Router("test", 1L,true,1,"000.000.000.001");

	private routerRepo routerRepository;

	private DatabaseLoader loader;

	ServerApplicationTests(@Autowired routerRepo routerRepository) {
		this.routerRepository = routerRepository;
	}

	@BeforeEach
	void setUp() {
		this.loader = new DatabaseLoader(routerRepository);
	}

	@Test
	void saveRouterToDB() {
		// Variable vor dem Speichern
		long countBefore = routerRepository.count();

		// Test Router in die Datenbank schreiben
		this.routerRepository.save(testRouter);

		// Abrufen der Variable nach dem Speichern
		long countAfter = routerRepository.count();

		// Abfragen ob die beiden Variablen den gleichen Wert haben
		Assertions.assertEquals(countBefore + 1, countAfter);

		// Holen des Routers aus der DB wenn Null FehlerMeldung
		Router savedRouter = routerRepository.findById(testRouter.getId()).orElse(null);

		// Überprüfen ob der geholte Router nicht Null ist
		Assertions.assertNotNull(savedRouter);

		// hat der gespeicherte Router den Namen "test"
		Assertions.assertEquals("test", savedRouter.getName());




	}


	@Test
	void bringMeTheRouter(){


	}

	@Test
	void deleteRouterFromDB(){

		this.routerRepository.delete(testRouter);


	}

	@Test
	void testErrorMessage(){


	}

}
