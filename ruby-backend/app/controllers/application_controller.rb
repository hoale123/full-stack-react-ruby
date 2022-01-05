class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/products" do
    products = Product.all
    products.to_json
  end

    
  # get "/test" do
  #   { message: "Good luck with your project!" }.to_json
  # end


end
