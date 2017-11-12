class ItemSerializer < ActiveModel::Serializer
  attributes :id, :title, :detail, :list_id

  belongs_to :list
end
