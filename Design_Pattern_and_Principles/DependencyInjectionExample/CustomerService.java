public class CustomerService {
    private CustomerRepository repository;
    public CustomerService(CustomerRepository repository) {
        this.repository = repository;
    }

    public void lookupCustomer(String id) {
        String data = repository.findCustomerById(id);
        System.out.println("[Service Logging Logged Request Output]: " + data);
    }
}
