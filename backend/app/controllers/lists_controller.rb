class ListsController < ApplicationController
  def index
    render json: List.all
  end

  def show
    render json: List.find(params[:id])
  end

  def create
    render json: List.create(list_params)
  end

  def update
      render json: List.update(params[:id], list_params)
  end

  def destroy
    render json: List.destroy(params[:id])
  end

  private

  def list_params
    ActiveModelSerializers::Deserialization.jsonapi_parse(params, only: [:title, :created_at, :updated_at])
  end
end
