class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/products" do
    products = Product.all
    products.to_json
  end

  patch "/products" do
    product = Product.find(params[:id])
    product.update({name: params[:name], description:params[:description],price:params[:price],status:params[:status],image:params[:image],likes:params[:likes]})
    product.to_json
  end



end
