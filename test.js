

<span><%= user.local.firstName %></span>


<%= user.local.firstName%>
<span><%= user.session %></span>





<h2>Customer Order</h2>

<% if (user.local.email) { %>
<form action="/cafe" method="POST">
  <input type="text" placeholder="Barista Name" name="baristaName" value="">
  <input type="text" value="" placeholder="Customer"name="customerName">
  <input type="text" placeholder="order" name="Order">
  <button type="submit">Submit</button>
</form>
</div>
<% } %>
