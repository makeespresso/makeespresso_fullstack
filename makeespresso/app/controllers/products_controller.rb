class ProductsController < ApplicationController
  before_action :set_Product, only: %i[show update destroy]
  before_action :authorize_request, except: %i[index show]

  def index
    @products = Product.all
    render json: @products
  end

  def show
    render json: @product
  end

  def create
    @product = Product.new(product_params)
    if @product.save
      render json: @product, status: :created
    else
      render json: @product.errors, status: :unprocessable_entity
    end
  end

  def update
    if @product.update(product_params)
      render json: @product
    else
      render json: @product.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @product.destroy
  end

  private
  
  # Use callbacks to share common setup or constraints between actions.
  def set_Product
    @product = Product.find(params[:id])
  rescue ActiveRecord::RecordNotFound
    render json: { message: 'no product matches that ID' }, status: 404
  end

  # Only allow a trusted parameter "white list" through.
  def product_params
    params.require(:product).permit(:image, :beanType, :geography, :altura, :toast, :aroma, :body, :acidity)
  end
end
