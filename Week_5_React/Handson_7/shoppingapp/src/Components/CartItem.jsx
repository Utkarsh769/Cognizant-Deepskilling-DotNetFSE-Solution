function CartItem({ item }) {
  return (
    <tr>
      <td>{item.itemName}</td>
      <td>₹ {item.price}</td>
    </tr>
  );
}

export default CartItem;