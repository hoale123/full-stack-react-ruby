require 'pry'

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

  # get "/users" do
  #   users = User.all
  #   users.to_json
  # end

  # post "/users" do
  #   user = User.create(
  #     name: params[:name],
  #     email: params[:email],
  #     created_at: params[:created_at],
  #   )
  #   user.to_json
  # end


end
