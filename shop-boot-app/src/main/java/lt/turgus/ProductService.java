package lt.turgus;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@Service
public class ProductService {

	@Autowired
	private ProductRepository productRepository;

	public List<ProductForClient> receiveAllProducts() {
		List<Product> productsFromDatabase = getProductRepository().findAll();
		List<ProductForClient> productsForClient = productsFromDatabase.stream().map((product) -> {
			ProductForClient pfc = new ProductForClient();
			pfc.setImageURL(product.getImageURL());
			pfc.setName(product.getName());
			pfc.setPrice(product.getPrice());
			pfc.setQuantity(product.getQuantity());
			pfc.setDescription(product.getDescription());
			return pfc;
		}).collect(Collectors.toList());
		return productsForClient;
	}

	public ProductRepository getProductRepository() {
		return productRepository;
	}

	public void setProductRepository(ProductRepository productRepository) {
		this.productRepository = productRepository;
	}

	public void addAnotherProduct(AddAnotherProduct oneMoreProduct) {
		Product prod = new Product();
		prod.setImageURL(oneMoreProduct.getImageURL());
		prod.setName(oneMoreProduct.getName());
		prod.setPrice(oneMoreProduct.getPrice());
		prod.setQuantity(oneMoreProduct.getQuantity());
		prod.setDescription(oneMoreProduct.getDescription());
		productRepository.save(prod);
	}

	public void deleteProduct(Long id) {
		productRepository.delete(id);
	}

	public void updateProduct(Product product, Long id) {
		Product prod = productRepository.findOne(id);
		prod.setImageURL(product.getImageURL());
		prod.setName(product.getName());
		prod.setPrice(product.getPrice());
		prod.setQuantity(product.getQuantity());
		prod.setDescription(product.getDescription());
		productRepository.save(prod);
	}
}
