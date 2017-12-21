package lt.turgus;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/rest/product")
public class ProductController {

	@Autowired
	private ProductService productService;
	
	
	@RequestMapping(method = RequestMethod.GET)
	public List<ProductForClient> giveAllProducts(){
		return getProductService().receiveAllProducts();
	}

	@RequestMapping(method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public void createProduct(@RequestBody final AddAnotherProduct oneMoreProduct){
		productService.addAnotherProduct(oneMoreProduct);
	}
	
	@RequestMapping(path= "/{id}",method=RequestMethod.DELETE)
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void deleteProductFromDatabase(@PathVariable final Long id) {
		productService.deleteProduct(id);
	}
	
	@RequestMapping(path= "/{id}", method = RequestMethod.PUT)
	@ResponseStatus(HttpStatus.CREATED)
	public void updateExistingProduct(@RequestBody final Product product, @PathVariable final Long id ) {
		productService.updateProduct(product, id);
	}
	
	public ProductService getProductService() {
		return productService;
	}

	public void setProductService(ProductService productService) {
		this.productService = productService;
	}
}
