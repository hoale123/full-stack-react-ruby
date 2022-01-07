class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/products" do
    products = Product.all
    products.to_json
  end

  patch "/products/:id" do
    product = Product.find(params[:id])
    product.update(likes: params[:likes])
    product.to_json
    # {message: likes added}
  end

  get "/orders" do
    orders = Order.all
    orders.to_json
  end

  get "/users" do
    users = User.all
    users.to_json
  end

  post "/orders/:id" do
    orders = Order.create(params[:id])
    orders.update(likes: params[:likes])
    orders.to_json
    # {message: likes added}
  end


end
