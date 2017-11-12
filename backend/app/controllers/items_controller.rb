class ItemsController < ApplicationController
  def index
    render json: Item.where(list_id: params[:list_id])
  end

  def show
    render json: Item.find(params[:id])
  end

  def create
    render json: Item.create(item_params)
  end

  def update
      render json: Item.update(params[:id], item_params)
  end

  def destroy
    render json: Item.destroy(params[:id])
  end

  private

  def item_params
    ActiveModelSerializers::Deserialization.jsonapi_parse(params, only: [:title, :detail, :list])
  end
end
