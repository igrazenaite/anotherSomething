package lt.turgus;

import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.ImportResource;

@Configuration
@ImportResource({"classpath*:application-context.xml"})
public class AppConfig {
	
//	@Bean 
//	public Product productOne() {
//		return new Product("Habenaria radiata", 15.0);
//	}
//	
//	@Bean 
//	public Product productTwo() {
//		return new Product("Habenaria radiata", 20.0);
//	}
}