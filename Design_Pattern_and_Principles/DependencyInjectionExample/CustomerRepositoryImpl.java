public class CustomerRepositoryImpl implements CustomerRepository {
    public String findCustomerById(String id) {
        return "Match found: [ID=" + id + ", Name=Utkarsh Raj, Tier=VIP]";
    }
}
