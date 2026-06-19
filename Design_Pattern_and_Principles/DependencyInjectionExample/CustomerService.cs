using System;

public class CustomerService {
    private ICustomerRepository repository;

    public CustomerService(ICustomerRepository repository) {
        this.repository = repository;
    }

    public void LookupCustomer(string id) {
        string data = repository.FindCustomerById(id);
        Console.WriteLine("[Service Logging Logged Request Output]: " + data);
    }
}
