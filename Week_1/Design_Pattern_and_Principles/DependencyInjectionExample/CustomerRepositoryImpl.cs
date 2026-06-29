class CustomerRepositoryImpl : ICustomerRepository {
    public string FindCustomerById(string id) {
        return "Match found: [ID=" + id + ", Name=Utkarsh Raj, Tier=VIP]";
    }
}