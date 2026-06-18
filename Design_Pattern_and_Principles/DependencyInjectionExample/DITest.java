public class DITest {
    public static void main(String[] args) {
        CustomerRepository repoImpl = new CustomerRepositoryImpl();

        CustomerService service = new CustomerService(repoImpl);

        System.out.println("Processing execution pipeline query check:");
        service.lookupCustomer("CUST-7741");
    }
}
