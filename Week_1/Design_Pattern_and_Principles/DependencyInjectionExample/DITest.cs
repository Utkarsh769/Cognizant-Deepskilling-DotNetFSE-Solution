using System;

public class DITest {
    public static void Main(string[] args) {
        ICustomerRepository repoImpl = new CustomerRepositoryImpl();
        CustomerService service = new CustomerService(repoImpl);

        Console.WriteLine("Processing execution pipeline query check:");
        service.LookupCustomer("CUST-7741");
    }
}