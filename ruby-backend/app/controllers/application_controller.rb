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



end
