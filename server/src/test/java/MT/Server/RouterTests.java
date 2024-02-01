package MT.Server;

import MT.Server.Repos.routerRepo;
import MT.Server.Tables.Router;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest
class RouterTests {

	private Router testRouter = new Router("Test-Router", 1L,true,1,"000.000.000.001", "255.255.255.255",0,0);

	private routerRepo routerRepository;

	private DatabaseLoader loader;

	RouterTests(@Autowired routerRepo routerRepository) {
		this.routerRepository = routerRepository;
	}

	@BeforeEach
	void setUp() {
		this.loader = new DatabaseLoader(routerRepository);
	}



	@Test
	void saveAndDeleteRouterFromDB() {
		// Router in die Datenbank einfügen
		routerRepository.save(testRouter);
		// Vor dem Löschen den Router in der Datenbank zählen
		long countBefore = routerRepository.count();
		// Router aus der Datenbank löschen
		routerRepository.delete(testRouter);
		// Nach dem Löschen den Router in der Datenbank zählen
		long countAfter = routerRepository.count();
		// Überprüfen, ob die Anzahl der Router in der Datenbank um 1 abgenommen hat
		Assertions.assertEquals(countBefore - 1, countAfter);
		// Überprüfen, ob der Router nicht mehr in der Datenbank vorhanden ist
		Assertions.assertFalse(routerRepository.existsById(testRouter.getId()));
		routerRepository.deleteAll();
	}


	@Test
	void saveRouterToDB() {
		// Vor dem Speichern den Router in der Datenbank zählen
		long countBefore = routerRepository.count();
		// Test Router in die Datenbank schreiben
		this.routerRepository.save(testRouter);
 		// Überprüfen, ob die Anzahl der Router in der Datenbank um 1 zugenommen hat
		long countAfter = routerRepository.count();
		// Abfragen, ob die beiden Variablen den gleichen Wert haben
		Assertions.assertEquals(countBefore + 1, countAfter);
		// Holen des Routers aus der DB wenn Null FehlerMeldung
		Router savedRouter = routerRepository.findById(testRouter.getId()).orElse(null);
		// Überprüfen, ob der geholte Router nicht Null ist
		Assertions.assertNotNull(savedRouter);
		// Überprüfen, ob der gespeicherte Router den erwarteten Werten entspricht
		Assertions.assertEquals("Test-Router", savedRouter.getName());
		// Vergleichen wir doch mal die IDs, beider Router, ob es der gleiche ist
		Assertions.assertEquals(testRouter.getId(),savedRouter.getId());
		this.routerRepository.delete(testRouter);
	}

	@Test
	void updateRouterInDB() {
		// Router in die Datenbank einfügen
		routerRepository.save(testRouter);
		// Router aus der Datenbank abrufen und aktualisieren
		Router updatedRouter = routerRepository.findById(testRouter.getId()).orElse(null);
		Assertions.assertNotNull(updatedRouter);
		updatedRouter.setName("updatedName");
		updatedRouter.setIp("127.000.000.000");
		updatedRouter.setActive(false);
		routerRepository.save(updatedRouter);
		// Überprüfen, ob der aktualisierte Router den erwarteten Werten entspricht
		Router retrievedUpdatedRouter = routerRepository.findById(testRouter.getId()).orElse(null);
		Assertions.assertNotNull(retrievedUpdatedRouter);
		Assertions.assertEquals("updatedName", retrievedUpdatedRouter.getName());
		Assertions.assertEquals("127.000.000.000",updatedRouter.getIp());
		Assertions.assertFalse(updatedRouter.getActive());
		routerRepository.delete(updatedRouter);
	}
}
