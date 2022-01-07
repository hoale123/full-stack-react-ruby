class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/products" do
    Product.all.to_json
  end

  get "/users" do
    User.all.to_json
  end

  get "/orders" do 
    Order.all.to_json
  end

  


end
